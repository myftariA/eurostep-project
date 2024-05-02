function isPalindrome() {
    let string = document.getElementById('palindromeNumber');
    string = string.toLowerCase();
    return string === string.split("").reverse().join("");
}

function logNumbers() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Eurostep");
        } else if (i % 3 === 0) {
            console.log("Euro");
        } else if (i % 5 === 0) {
            console.log("Step");
        } else {
            console.log(i);
        }
    }
}

function isFactorial() {
    let n = document.getElementById('factorialNumber');
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}