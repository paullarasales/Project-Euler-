function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function largestPalindromeProduct() {
    let largestPalindrome = 0;

    for (let i = 999; i >= 100; i--) {
        for (let j = i; j >= 10; j--) {
            const product = i * j;

            if (isPalindrome(product) && product > largestPalindrome) {
                largestPalindrome = product;
            }
        }
    }

    return largestPalindrome;
}

const result = largestPalindromeProduct();
console.log(result);

