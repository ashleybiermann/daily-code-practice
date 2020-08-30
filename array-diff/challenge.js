function arrayDiff(a, b) {
    return result = a.filter(value => !b.includes(value));
}

module.exports = arrayDiff;