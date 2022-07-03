function hasAlmostSequence(sequence) {
    if (!sequence || sequence.length < 2 || sequence.length > Math.pow(10, 5))
        throw Error('Invalid paramater');

    let isRemoved = false;
    let maxValue = -Infinity;
    let prevMax = -Infinity;

    for (var s of sequence) {
        if (s <= maxValue) {
            if (isRemoved) return false;
            isRemoved = true;
            if (s > prevMax) maxValue = s;
        } else {
            prevMax = maxValue;
            maxValue = s;
        }
    }
    return true;

}

module.exports = hasAlmostSequence;