// Hack script

// Adding the sleep function to  JavaScript.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Wait for the page to be ready.
sleep(2500);


// Staff mode?
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().flags += 1;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().flags += 1}}}]);window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.isDeveloper !== undefined) {Object.defineProperty(m.default, "isDeveloper", {get: (a) => 1,set: (a) => a,configurable: true}); console.log("%cWorked!", "font-size: 50px");return console.log(`%cYou now have Developer Options and a Staff badge. You can find the Developer Settings in the Settings's bottom tab!`, "font-size: 16px")}if (m.isDeveloper !== undefined) {Object.defineProperty(m, "isDeveloper", {get: (a) => 1,set: (a) => a,configurable: true}); console.log("%cWorked!", "font-size: 50px");return console.log(`%cYou now have Developer Options and a Staff badge. You can find the Developer Settings in the Settings's bottom tab!`, "font-size: 16px")}}}]);