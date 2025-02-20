document.addEventListener("DOMContentLoaded", function () {
  if (navigator.userAgent.includes("WebTV")) {
    alert('Heya! Sorry, but WebTV boxes are not supported, Unfortunately. For the safety of your poor webtv box trying to run all of the javascript in this page, Page loading halted. Press OK to redirect you to something else!');
    window.location.replace('https://theoldnet.com/')
  }

  //document.getElementById('UserAgent').value = navigator.userAgent;
  function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
  }

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  var sheep = new eSheep(); 
if (document.cookie === "" || document.cookie === null) {
    sheep.Start(); 
  } else {
    if (getCookie('feature1') === "false") {
        sheep.Start(); 
    }
  }
   if (getCookie('feature5') === "true"){
(function (srcs,cfg) { var cbcount = 1; var callback = function () { -- cbcount; if (cbcount === 0) { BrowserPonies.setBaseUrl(cfg.baseurl); if (!BrowserPoniesBaseConfig.loaded) { BrowserPonies.loadConfig(BrowserPoniesBaseConfig); BrowserPoniesBaseConfig.loaded = true; } BrowserPonies.loadConfig(cfg); if (!BrowserPonies.running()) BrowserPonies.start(); } }; if (typeof(BrowserPoniesConfig) === "undefined") { window.BrowserPoniesConfig = {}; } if (typeof(BrowserPoniesBaseConfig) === "undefined") { ++ cbcount; BrowserPoniesConfig.onbasecfg = callback; } if (typeof(BrowserPonies) === "undefined") { ++ cbcount; BrowserPoniesConfig.oninit = callback; } var node = (document.body || document.documentElement || document.getElementsByTagName('head')[0]); for (var id in srcs) { if (document.getElementById(id)) continue; if (node) { var s = document.createElement('script'); s.type = 'text/javascript'; s.id = id; s.src = srcs[id]; node.appendChild(s); } else { document.write('\u003cscript type="text/javscript" src="'+ srcs[id]+'" id="'+id+'"\u003e\u003c/script\u003e'); } } callback();})({"browser-ponies-script":"https://panzi.github.io/Browser-Ponies/browserponies.js","browser-ponies-config":"https://panzi.github.io/Browser-Ponies/basecfg.js"},{"baseurl":"https://panzi.github.io/Browser-Ponies/","fadeDuration":500,"volume":0,"fps":25,"speed":3,"audioEnabled":true,"showFps":false,"showLoadProgress":true,"speakProbability":0.1,"spawn":{"applejack":1,"fluttershy":1,"pinkie pie":1,"rainbow dash":1,"rarity":1,"twilight sparkle":1}});void(0)
  }
  if (getCookie('feature7') === "true"){
(function (srcs,cfg) { var cbcount = 1; var callback = function () { -- cbcount; if (cbcount === 0) { BrowserPonies.setBaseUrl(cfg.baseurl); if (!BrowserPoniesBaseConfig.loaded) { BrowserPonies.loadConfig(BrowserPoniesBaseConfig); BrowserPoniesBaseConfig.loaded = true; } BrowserPonies.loadConfig(cfg); if (!BrowserPonies.running()) BrowserPonies.start(); } }; if (typeof(BrowserPoniesConfig) === "undefined") { window.BrowserPoniesConfig = {}; } if (typeof(BrowserPoniesBaseConfig) === "undefined") { ++ cbcount; BrowserPoniesConfig.onbasecfg = callback; } if (typeof(BrowserPonies) === "undefined") { ++ cbcount; BrowserPoniesConfig.oninit = callback; } var node = (document.body || document.documentElement || document.getElementsByTagName('head')[0]); for (var id in srcs) { if (document.getElementById(id)) continue; if (node) { var s = document.createElement('script'); s.type = 'text/javascript'; s.id = id; s.src = srcs[id]; node.appendChild(s); } else { document.write('\u003cscript type="text/javscript" src="'+ srcs[id]+'" id="'+id+'"\u003e\u003c/script\u003e'); } } callback();})({"browser-ponies-script":"https://panzi.github.io/Browser-Ponies/browserponies.js","browser-ponies-config":"https://panzi.github.io/Browser-Ponies/basecfg.js"},{"baseurl":"https://panzi.github.io/Browser-Ponies/","fadeDuration":500,"volume":1,"fps":25,"speed":3,"audioEnabled":true,"showFps":false,"showLoadProgress":true,"speakProbability":0.1,"spawn":{"applejack":1,"fluttershy":1,"pinkie pie":1,"rainbow dash":1,"rarity":1,"twilight sparkle":1}});void(0)
  }
  // Function to create and append the script tag

  function loadSheep() {
    const script = document.createElement('script');
    script.src = "esheep.js";
    script.id = 'dynamicScript';
    document.head.appendChild(script);
  }
  if (document.cookie === "" || document.cookie === null) {
    loadSheep();
  } else {
    if (getCookie('feature1') === "false") {
      loadSheep();
    }
  }
/*/
  const app = document.getElementById("app");
  if (app) {
    const webamp = new Webamp({
      // Optional.
      initialTracks: [
        {
          metaData: {
            artist: "Autechre",
            title: "Yulquen",
          },
          url: "https://cdn.alekeagle.me/ULl4MVZdtI.mp3",
        },
        {
          metaData: {
            artist: "Tree Palm",
            title: "Turn Me Around",
          },
          url: "https://glitchyzorua.github.io/files/Tree%20Palm%20-%20Turn%20Around%20-%20Tree%20Palm%20(youtube,%20B7plBbp76aU).mp3",
        },
        {
          metaData: {
            artist: "author (tbotv)",
            title: "DELTAQUEST",
          },
          url: "https://glitchyzorua.github.io/files/sfx/64%20-%20DELTAQUEST%20-%20tbotv%20guy's%20music%20and%20sometimes%20other%20stuff%20(youtube,%200VCQKdoztEY).mp3",
        },
        {
          metaData: {
            artist: "Unknown",
            title: "Purple Groove",
          },
          url: "https://glitchyzorua.github.io/files/youtube_tBglvCnUOE8_audio.mp3",
        },
        {
          metaData: {
            artist: "DJ Tronika",
            title: "Dream With Me",
          },
          url: "https://glitchyzorua.github.io/files/Dream%20With%20Me.mp3",
        },
        {
          metaData: {
            artist: "glaciære", // glaciære
            title: "Confidence, Baby",
          },
          url: "https://glitchyzorua.github.io/files/glaci%C3%A6re%20-%20Two%20Months%20of%20Moments%20-%2007%20Confidence,%20Baby.mp3",
        },
        {
          metaData: {
            artist: "glaciære",
            title: "Into the Maelstrom",
          },
          url: "https://glitchyzorua.github.io/files/sfx/glaci%C3%A6re%20-%20Two%20Months%20of%20Moments%20-%2001%20Into%20the%20Maelstrom.mp3",
        },
        {
          metaData: {
            artist: "Aquacycle & VaVr",
            title: "ABCnymph",
          },
          url: "https://glitchyzorua.github.io/files/sfx/Aquacycle - VvvvvaVvvvvvr's Vighest Vuality Vips Vol - 27 ABCnymph.mp3",
        },
        {
          metaData: {
            artist: "New Order",
            title: "Blue Monday",
          },
          url: "https://glitchyzorua.github.io/files/sfx/New%20Order%20-%20Blue%20Monday%20(Official%20Lyric%20Video)%20-%20New%20Order%20(youtube,%20c1GxjzHm5us).mp3",
        },
        {
          metaData: {
            artist: "C418",
            title: "Certitudes",
          },
          url: "https://glitchyzorua.github.io/files/Certitudes%20-%20C418%20(youtube,%2072fGruG_LSY).mp3",
        },
        {
          metaData: {
            artist: "Christopher Saint & Who's Who?",
            title: "Ulterior Motives",
          },
          url: "https://glitchyzorua.github.io/files/Ulterior%20Motives%20-%20Who's%20Who%20(youtube,%20nTXQ6-35e7o).mp3",
        },
        {
          metaData: {
            artist: "Sonic De Glitcher",
            title: "Ulterior Motives ~ Sega Genesis Remix",
          },
          url: "https://GlitchyZorua.github.io/files/sfx/Who's Who - Ulterior Motives ~ Sega Genesis Remix - Sonic De Glitcher (youtube, TngvMIaJMoU).mp3",
        },
      ],
    });

    if (document.cookie === "" || document.cookie === null) {
      webamp.renderWhenReady(app);
    } else {
      if (getCookie('feature6') === "false") {
        webamp.renderWhenReady(app);
      }
    }
  } else {
    console.error("Element with ID 'app' not found.");
  }
/*/
  function BeatsUntilMidnight() {
    var currentBeats = parseFloat(GetSwatchTime(false));
    var totalBeatsInDay = 1000;
    var remainingBeats = totalBeatsInDay - currentBeats;
    return remainingBeats === 0 ? totalBeatsInDay : remainingBeats;
  }

  function updateCountdown() {
    var closeCountdownElement = document.getElementById("close_countdown");
    if (closeCountdownElement) {
      closeCountdownElement.innerHTML = BeatsUntilMidnight();
    }
  }

  function showForumStatus() {
    var forumStatusElement = document.getElementById("forum_status");
    var beatsLeft = BeatsUntilMidnight();

    if (isSwatchMonday()) {
      forumStatusElement.innerHTML = `<strong>Boop!</strong> The Melonland Forum <a href="https://wiki.melonland.net/forum_help#why_is_the_forum_closed_on_mondays" target="_blank">will re-open</a> in <strong id="close_countdown">${beatsLeft}</strong>.beats!`;
    } else if (isSwatchSunday()) {
      forumStatusElement.innerHTML = `<strong>Boop!</strong> The Melonland Forum <a href="https://wiki.melonland.net/forum_help#why_is_the_forum_closed_on_mondays" target="_blank">will close</a> in <strong id="close_countdown">${beatsLeft}</strong>.beats!`;
    } else {
      forumStatusElement.innerHTML = ""; // Clear the status if it's neither Sunday nor Monday
    }
  }

  function isSwatchMonday() {
    const now = new Date();
    const utcPlus1 = new Date(now.getTime() + 3600000); // Add 1 hour (3600000 ms)
    return utcPlus1.getUTCDay() === 1; // Monday
  }

  function isSwatchSunday() {
    const now = new Date();
    const utcPlus1 = new Date(now.getTime() + 3600000); // Add 1 hour (3600000 ms)
    return utcPlus1.getUTCDay() === 0; // Sunday
  }

  // Execute on load
  showForumStatus();
  setInterval(updateCountdown, 1000); // Update every second

  // Clock Emoji
  const emoji = document.querySelector('.emoji');
  if (emoji) {
    emoji.textContent = Tmj.getTimeMoji(new Date(), 'clock');
  }

  // Landscape Emoji
  const landscape = document.querySelector('.landscape');
  if (landscape) {
    landscape.textContent = Tmj.getTimeMoji(new Date(), 'landscape');
  }

  // Set initial highlight on page load
  updateHighlightTime();
  // Update highlight every second
  setInterval(updateHighlightTime, 1000);

  // Start the clock
  startTime();

  var highlightElement;

  function updateHighlightTime() {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();

    // Format time with leading zeros
    h = h.toString().padStart(2, "0");
    m = m.toString().padStart(2, "0");
    s = s.toString().padStart(2, "0");

    // Combine formatted time for hex color
    var hex = "#" + h + m + s;

    // Get the element to be highlighted (assuming an element with ID "time")
    highlightElement = document.getElementById("time");

    if (highlightElement) {
      // Create a span element to wrap the highlighted text
      var highlightSpan = document.createElement("span");
      highlightSpan.textContent = '#' + h + m + s;
      highlightSpan.style.backgroundColor = hex; // Set background for highlighting

      // Clear previous content (if any)
      highlightElement.innerHTML = "";

      // Append the highlighted time within the element
      highlightElement.appendChild(highlightSpan);
    }
  }

  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ampm = h >= 12 ? 'PM' : 'AM';
    m = checkTime(m);
    s = checkTime(s);
    const clockElement = document.getElementById('clock');
    if (clockElement) {
      clockElement.innerHTML = h + ":" + m + ":" + s + " " + ampm;
    }

    // get a new date (locale machine date time)
    var date = new Date();
    // get the date as a string
    var n = date.toDateString();
    // get the time as a string
    // var time = date.toLocaleTimeString();

    // find the html element with the id of date
    const dateElement = document.getElementById('date');
    if (dateElement) {
      dateElement.innerHTML = n;
    }
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
  }

  var url = document.getElementById('url');
  var gowww = document.getElementsByName('gowww')[0];
  var gonc = document.getElementsByName('gonc')[0];
  var luck = document.getElementsByName('luck')[0];

  function searchstartpage() {
    if (url.value) {
      window.location.assign("https://www.startpage.com/sp/search?query=" + encodeURI(url.value));
    }
  }

  function searchwww() {
    if (url.value) {
      // const searchUrl = searchEngineSelect.value; + encodeURI(url.value);
      if (searchEngineSelect.value === "Google (No AI)") {
        //alert('Click on the "Web" tab in the google search');
        window.location.assign(searchEngineSelect.value + encodeURI(url.value) + "&udm=14");
      } else {
        window.location.assign(searchEngineSelect.value + encodeURI(url.value));
      }
    }
  }

  function searchneocities() {
    if (url.value) {
      window.location.assign("https://neocities.org/browse?sort_by=followers&tag=" + encodeURI(url.value));
    }
  }

  function searchluck() {
    if (url.value === "the cake is a lie") {
      window.location.assign('https://www.youtube.com/watch?v=JAw3V8ScLeI');
      return;
    }
    if (url.value === "fandom") {
      window.location.assign('https://www.youtube.com/watch?v=qcfuA_UAz3I');
      return;
    }
    if (url.value === "orgin") {
      window.location.assign('https://windows93.net');
      return;
    }
    if (url.value === "list") {
      window.location.assign('https://github.com/GlitchyZorua/GlitchyZorua.github.io/blob/main/projects/random/neocities/random.html');
      return;
    }
    if (url.value === "ding") {
      alert('fries are ready.');
      return;
    }
    if (url.value == "computer") {
      window.location.assign('https://www.youtube.com/watch?v=aAtF-Zzdnc8')
      return;
    }
    if (url.value == "surprise") {
      window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
      return;
    }
    if (url.value == "sdjlkfgjfsdlkgfdjglfkdjgfdlkg") {
      alert('you\'ve looked in the code. congrats. nothing will happen.');
      return;
    }
    if (url.value == "shoot em up") {
      var KICKASSVERSION = '2.0'
      var s = document.createElement('script')
      s.type = 'text/javascript'
      document.body.appendChild(s)
      s.src = '//hi.kickassapp.com/kickass.js'
      void (0);
      return;
    }
    if (url.value == "make text go boom boom") {
      (function () { var s = document.createElement('script'); s.setAttribute('src', 'http://fontbomb.ilex.ca/js/main.js'); document.body.appendChild(s); }());
      return
    }
    if (url.value == "best cooking site") {
      window.location.assign("https://based.cooking/");
      return
    }
    window.location.assign("https://GlitchyZorua.github.io/projects/random/neocities/random.html");

  }
  //gowww.addEventListener("click", searchstartpage);
  gowww.addEventListener("click", searchwww);
  gonc.addEventListener("click", searchneocities);
  luck.addEventListener("click", searchluck);

  url.addEventListener('keydown', (event) => {

    if (event.shiftKey && event.key === "Enter") {
      searchneocities();
      return;
    }
    if (!event.shiftKey && event.key === 'Enter') {
      searchwww();
      return;
    }
  });
});
/*/
if (event.shiftKey) {
  keys.Shift = true;
}
if (event.key === "Enter") {
  keys.Enter = true;
/*/