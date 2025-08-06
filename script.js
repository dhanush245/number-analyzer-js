function checkEvenOdd() {
    const input = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (input === '') {
        resultDiv.textContent = 'Please enter a number!';
        resultDiv.style.color = 'red';
        return;
    }

    const number = parseInt(input);

    if (number % 2 === 0) {
        resultDiv.textContent = `${number} is Even!`;
        resultDiv.style.color = 'lime';
    } else {
        resultDiv.textContent = `${number} is Odd!`;
        resultDiv.style.color = 'yellow';
    }
}

function findFactorial() {
    const input = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (input === '') {
        resultDiv.textContent = 'Please enter a number!';
        resultDiv.style.color = 'red';
        return;
    }

    const number = parseInt(input);

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    resultDiv.textContent = `Factorial of a ${number} is ${factorial}`;
    resultDiv.style.color = 'aqua';
}

function checkPrime() {
    const input = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (input === '') {
        resultDiv.textContent = 'Please enter a number!';
        resultDiv.style.color = 'red';
        return;
    }

    const number = parseInt(input);

    if (number < 2) {
        resultDiv.textContent = `${number} is NOT a prime number`;
        resultDiv.style.color = 'crimson';
        return;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        resultDiv.textContent = `${number}is a PRIME number`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = `${number} is NOT a prime number`;
        resultDiv.style.color = 'crimson';
    }
}

function generateFibonacci() {
    const input = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (input === '') {
        resultDiv.textContent = 'Please enter a number!';
        resultDiv.style.color = 'red';
        return;
    }

    const number = parseInt(input);

    let fib = [0, 1];

    if (number === 0) fib = [0];
    else if (number === 1) fib = [0, 1];
    else {
        for (let i = 2; i <= number; i++) {
            const next = fib[i - 1] + fib[i - 2];
            if (next > number) break;
            fib.push(next);
        }
    }

    resultDiv.textContent = `Fibonacci sequence up to ${number}: ${fib.join(', ')}`;
    resultDiv.style.color = 'yellow';

}

