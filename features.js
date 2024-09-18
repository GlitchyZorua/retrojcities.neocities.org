// Function to set a cookie
function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
}

// Function to get a cookie value
function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        while (cookie.charAt(0) === ' ') cookie = cookie.substring(1);
        if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length);
    }
    return null;
}

// Function to apply features based on cookie values
function applyFeatures() {
    // Retrieve feature states from cookies
    const eSheepDisabled = getCookie('feature1') === "true";
    const onekoDisabled = getCookie('feature2') === "true";
    const leakyDisabled = getCookie('feature3') === "true";
    const partykitDisabled = getCookie('feature4') === "true";
    const ponyMode = getCookie('feature5') === "true";
    const hideWebamp = getCookie('feature6') === "false";
    const ponyModewithSFX = getCookie('feature7') === "true";
    const disableQuote = getCookie('feature8') === "true";
    //const disableQuote = getCookie('feature9') === "true";
    
    if (eSheepDisabled) {
        console.log('eSheep is disabled');
    } else {
        console.log('eSheep is enabled');
    }
    if (disableQuote) {
        console.log('Quotes is disabled');
    } else {
        console.log('Quotes is enabled');
    }

    if (onekoDisabled) {
        console.log('Oneko is disabled');
    } else {
        console.log('Oneko is enabled');
    }
    
    if (leakyDisabled) {
        console.log('leaky is disabled');
    } else {
        console.log('leaky is enabled');
    }
        

    if (partykitDisabled) {
        console.log('partykit is disabled');

    } else {
        console.log('partykit is enabled');

    }
    if (ponyMode) {
        console.log('pony mode is enabled');

    } else {
        console.log('pony mode is disabled');

    }
    if (ponyModewithSFX) {
        console.log('pony mode w/ sfx is enabled');

    } else {
        console.log('pony mode w/ sfx is disabled');
    }
    if (hideWebamp) {
        console.log('hide webamp is enabled');
    } else {
        console.log('hide webamp is disabled');
    }
    
}

// Function to initialize checkbox states from cookies
function checkCheckboxState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const cookieValue = getCookie(`feature${checkbox.dataset.featureNumber}`);
        checkbox.checked = cookieValue === "true";
    });
    applyFeatures();
}

// Function to update cookie and apply features when checkbox state changes
function updateCheckbox(event) {
    const checkbox = event.target;
    // Set cookie based on checkbox state
    setCookie(`feature${checkbox.dataset.featureNumber}`, checkbox.checked ? "true" : "false");
    applyFeatures();
}

// Initialize the script
window.onload = () => {
    checkCheckboxState();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateCheckbox);
    });
};