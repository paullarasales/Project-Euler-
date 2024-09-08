function multiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            let product = i * j;
            row += product + ' ';
        }
        console.log(row.trim());
    }
}

console.log(multiplicationTable(5));