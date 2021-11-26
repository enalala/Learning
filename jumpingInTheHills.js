// jumpingInTheHills
jumpingInTheHills = function (n, u, d, ...x) {
    let cur = null;
    let step = 0;
    let parachute = 1;
    for (let i = 0; i < n; i++) {
        if (cur === null) {
            cur = x[i];
        }
        else if ((cur + u) >= x[i] && (cur - d) <= x[i]) {
            cur = x[i];
        } else if (cur - d > x[i] && cur >= x[i] && parachute === 1) {
            cur = x[i];
            parachute = 0;
        } else {
            break;
        }
        step++;
    }
    return step;
}
