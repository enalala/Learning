// ATM 
withdrawal = function (x, t) {
    if (x % 5 !== 0) {
        throw new Error('Incorrect Withdrawal Amount (not multiple of 5)');
    }
    if (x > t) {
        throw new Error('Insufficient Funds');
    }
    return t - x - 0.5;
}
