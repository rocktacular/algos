function getNthFib(n) {
    /* ------------------------ */
    // VALIDATION
    // validate n is an integer
    if (!Number.isInteger(n)) throw new TypeError('not an integer');

    // validate n > 0
    if (n <= 0) throw new Error('n must be greater than 0');

    /* ------------------------ */
    // ALGO
    // set up initial conditions
    const fib = [0, 1];
    
    // if fib[n] is already known
    if (n <= fib.length) {
        return fib[n-1];
    }

    // run iterative calculation
    // we only have to store 2 numbers at a time.
    for (let i = 2; i < n; i++) {
        const newNum = fib[0] + fib[1];
        fib[0] = fib[1];
        fib[1] = newNum;
    }
    return fib[1];
}

exports.getNthFib = getNthFib;