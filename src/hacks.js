// Hack script

// Adding the sleep function to  JavaScript.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




// Wait for the page to be ready.
sleep(2500);



// Enable Staff Mode
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().flags += 1;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().flags += 1}}}]);window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.isDeveloper !== undefined) {Object.defineProperty(m.default, "isDeveloper", {get: (a) => 1,set: (a) => a,configurable: true}); console.log("%cWorked!", "font-size: 50px");return console.log(`%cYou now have Developer Options and a Staff badge. You can find the Developer Settings in the Settings's bottom tab!`, "font-size: 16px")}if (m.isDeveloper !== undefined) {Object.defineProperty(m, "isDeveloper", {get: (a) => 1,set: (a) => a,configurable: true}); console.log("%cWorked!", "font-size: 50px");return console.log(`%cYou now have Developer Options and a Staff badge. You can find the Developer Settings in the Settings's bottom tab!`, "font-size: 16px")}}}]);



// Get all badges
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().isSystemUser = () => true;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().isSystemUser = () => true}}}])



// Unlock NSFW Channels
var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.default&&m.default[item]!==undefined)return m.default}}])
findModule('getCurrentUser').getCurrentUser().nsfwAllowed = true



// Hidden Channel IDs
let array = window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getPrivateChannelIds !== undefined) {return console.log(m.default.getPrivateChannelIds())}if (m.getPrivateChannelIds !== undefined) {return console.log(m.getPrivateChannelIds())}}}]);
console.log("");



// Bypass Guild Verification
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().phone = '+1234567890';}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().phone = '+1234567890'}}}]);
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().email = 'email@email.com';}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().email = 'email@email.com'}}}]);
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getCurrentUser !== undefined) {return m.default.getCurrentUser().verified = true;}if (m.getCurrentUser !== undefined) {return m.getCurrentUser().verified = true}}}]);



// Show Activities Button
var AppIds = ["755600276941176913", "880218394199220334", "755827207812677713", "773336526917861400", "814288819477020702", "832012774040141894", "879864070101172255", "879863881349087252", "832012854282158180", "878067389634314250", "902271654783242291", "879863686565621790", "879863976006127627", "852509694341283871", "832013003968348200", "832025144389533716", "763133495793942528", "880218832743055411", "878067427668275241", "879864010126786570", "879864104980979792", "891001866073296967", "832012586023256104", "832012682520428625", "832013108234289153", "763116274876022855", "832012730599735326", "832012938398400562", "832025061657280566", "801133024841957428", "832012815819604009", "832012894068801636", "832025114077298718", "832025993019260929"]
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getEnabledAppIds !== undefined) {return m.default.getEnabledAppIds = () => AppIds}}}]);



// Guild Features
let serverid = ""; // TODO: get current serverId then put it in.
let feature = "VERIFIED";

window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getGuilds !== undefined) {return m.default.getGuild(serverid).features.add(feature)}if (m.getGuilds !== undefined) {return m.getGuild(serverid).features.add(feature)}}}]);