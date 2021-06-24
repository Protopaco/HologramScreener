// written in Javascript
// To run: 
// add .js to the end of the filename
// in console: node THX1138.js

const evaluateSignal = (count) => {
    if (count % 3 === 0 && count % 5 === 0) return "SCAN_FOR_TOWERS";
    if (count % 5 === 0) return "CHECK_CHANNEL_NOISE";
    if (count % 3 === 0) return "CHECK_SIGNAL_STRENGTH";
    return "PING"
}

let count = 1;

do {
    console.log(`${count}: ${evaluateSignal(count)}`)
    count++;
} while (count <= 100)

