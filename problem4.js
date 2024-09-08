function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function largestPalindromeProduct() {
    let largestPalindrome = 0;

    for (let i = 20; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            const product = i * j;
            console.log(` i = ${i}, j = ${j}, product = ${product}`);
            if (isPalindrome(product) && product > largestPalindrome) {
                largestPalindrome = product;
            }
        }
    }

    return largestPalindrome;
}

const result = largestPalindromeProduct();
console.log(result);

