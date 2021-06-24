
let count = 1;

do {
    if (count % 3 === 0 && count % 5 === 0) {
        console.log(`${count}: SCAN_FOR_TOWERS`);
    } else if (count % 5 === 0) {
        console.log(`${count}: CHECK_CHANNEL_NOISE`);
    } else if (count % 3 === 0) {
        console.log(`${count}: CHECK_SIGNAL_STRENGTH`);
    } else {
        console.log(`${count}: PING`)
    }
    count++;

} while (count <= 100)
