// Gets the swatch time right now
function GetSwatchTime(showDecimals = true) {
    return GetSwatchTimeAt(new Date(), showDecimals);
}

// Converts a given time to swatch time - takes a JS Date object
function GetSwatchTimeAt(date, showDecimals = true) {
    // Get date in UTC/GMT
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var milliseconds = date.getUTCMilliseconds();

    // Convert to Biel Mean Time (BMT), add 1 hour to UTC
    hours = (hours + 1) % 24;
    // Time in seconds since midnight BMT
    var timeInMilliseconds = ((hours * 60 + minutes) * 60 + seconds) * 1000 + milliseconds;
    // Convert milliseconds to beats - there are 86.4 seconds in a beat
    var beats = timeInMilliseconds / 86400;

    if (showDecimals) {
        return beats.toFixed(2);
    } else {
        return Math.floor(beats);
    }
}

// +++ Handy Functions for Swatch Time coders!! +++

// Converts a Swatch stamp to Biel Mean Time / UTC+1 date object
function SwatchToBMT(swatchTime) {
    let date = SwatchToUTC(swatchTime);
    date.setHours((date.getHours() + 1) % 24);
    return date;
}

// Converts a Swatch value to UTC date object.
function SwatchToUTC(swatchTime) {
    //Strip any beat symbol
    swatchTime = swatchTime.replace("@", "");
    // Check if swatchTime includes decimals
    var hasDecimals = swatchTime % 1 !== 0;
    // Convert Swatch Beats to total seconds
    var totalSeconds = swatchTime * 86.4;
    // Convert total seconds to milliseconds
    var totalMilliseconds = totalSeconds * 1000;
    // Calculate hours, minutes, and seconds
    var secondsSinceMidnight = totalMilliseconds / 1000;

    // Adjust for Biel Mean Time (UTC+1)
    secondsSinceMidnight -= 3600;
    // Handle negative wraparound
    if (secondsSinceMidnight < 0) {
        secondsSinceMidnight += 86400;
    }

    var hours = String(Math.floor(secondsSinceMidnight / 3600) % 24).padStart(2, "0");
    var minutes = String(Math.floor((secondsSinceMidnight % 3600) / 60)).padStart(2, "0");
    var seconds = String(Math.floor(secondsSinceMidnight % 60)).padStart(2, "0");

    let date = new Date(`2000-01-01T${hours}:${minutes}:${seconds}`);
    date.setMilliseconds(400); // This gives a cleaner result if its converted back to swatch time again

    return date;
}

// Gets the number of beats until the next @000 loop over
function BeatsUntilMidnight() {
    // Get the current Swatch time in beats (no decimals needed)
    var currentBeats = parseFloat(GetSwatchTime(false));
    // Total beats in a day is 1000 (from @000 to @999)
    var totalBeatsInDay = 1000;
    // Calculate remaining beats until @000
    var remainingBeats = totalBeatsInDay - currentBeats;
    // Handle edge case where remainingBeats is 0 (exactly at @000)
    return remainingBeats === 0 ? totalBeatsInDay : remainingBeats;
}
