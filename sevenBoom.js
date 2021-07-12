const BOOM_FACTOR = 7;
const BOOM_SIGN = '*'

const numbers = new Array(210).fill('').map((_, i) => i + 1)

const startGame = numbers => numbers.map(checkIfBoom);

const checkIfBoom = number => {
    let isBoom = false;
    isBoom = checkIfDividedByFactor(number);
    if (!isBoom) {
        isBoom = checkIfContainFactor(number);
    }
    return isBoom ? BOOM_SIGN : number;
}

const checkIfDividedByFactor = number => number % BOOM_FACTOR === 0;

const checkIfContainFactor = number => {
    const remainder = number % 10;
    const nextNumber = Math.floor(number / 10);
    if (remainder === BOOM_FACTOR) return true;
    if (nextNumber < 1) return false;
    return checkIfContainFactor(nextNumber);
}

const numbersWithBooms = startGame(numbers);