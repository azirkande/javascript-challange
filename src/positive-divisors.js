
//Question 1: Write a function that takes a single positive integer, and returns a collection / sequence (e.g.
//array) of integers.

export const getDivisors = (number) => {
    if(typeof number !== 'number')
        return [];
    if(number <= 0)
     return [];
    const divisors = [];
    for(let divisor = 1; divisor<= number ; divisor++){
        if(number % divisor === 0)
            divisors.push(divisor);
    }
    return divisors;
}