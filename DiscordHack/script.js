// Script to fetch the hacks.

// Adding the sleep function to  JavaScript.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Wait to fetch the hacks until the page is loaded.
sleep(2500);

// Fetch the hacks.
fetch("https://raw.githubusercontent.com/afkvido/DiscordDeveloper/master/src/hacks.js").then((r) => r.text().then((t) => eval(t)));

