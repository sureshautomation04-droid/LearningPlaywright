
//✅ 1. Row-wise Total (per environment)

// total execution time for each env (dev, staging, prod)
let rowTotals = execTimes.map(row => 
    row.reduce((sum, time) => sum + time, 0)
);
console.log(rowTotals); // [999, 1230, 1155]


// ✅ 2. Row-wise Average (performance check)

// average execution time per env
let rowAvg = execTimes.map(row => 
    row.reduce((sum, time) => sum + time, 0) / row.length
);
console.log(rowAvg); // [249.75, 307.5, 288.75]


//✅ 3. Column-wise Total (per test case across envs)

// total time per test across dev/staging/prod
let colTotals = execTimes[0].map((_, colIndex) =>
    execTimes.reduce((sum, row) => sum + row[colIndex], 0)
);
console.log(colTotals); // [500, 1140, 284, 1460]


//✅ 4. Find Slowest Execution Time

// flatten → convert 2D → 1D, then find max
let maxTime = Math.max(...execTimes.flat());
console.log(maxTime); // 520



//✅ 5. Find Fastest Execution Time

let minTime = Math.min(...execTimes.flat());
console.log(minTime); // 89



//✅ 6. Print Only Slow Tests (> 400ms)

execTimes.flat().forEach(time => {
    if (time > 400) {
        process.stdout.write(time + " ");
    }
});
console.log(); // 450 410 520 490





