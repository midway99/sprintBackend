const NUMBER_START = 2;
const NUMBER_END = 1000;

const outputPrimeNumbers = () => {
    nextPrime:
        for (let i = NUMBER_START; i <= NUMBER_END; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j === 0) continue nextPrime
            }
            console.log(i);
        }
};

outputPrimeNumbers();