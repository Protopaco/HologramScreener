
let count = 1;

const evaluateSignal = (count) => {
    if (count % 3 === 0 && count % 5 === 0) {
        return "SCAN_FOR_TOWERS";
    } else if (count % 5 === 0) {
        return "CHECK_CHANNEL_NOISE";
    } else if (count % 3 === 0) {
        return "CHECK_SIGNAL_STRENGTH";
    }
    return "PING"
}

do {
    let signal = evaluateSignal(count);
    console.log(`${count}: ${signal}`)
    count++;

} while (count <= 100)

