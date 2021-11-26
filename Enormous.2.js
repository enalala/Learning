//2.Enormous Input Test
enormous = function (n, k, ...x) {
    let t = 0;
    for (var i = 0; i < n; i++) {
        if (x[i] % k === 0) {
            t += 1;
        }
    }
    return t;
}
