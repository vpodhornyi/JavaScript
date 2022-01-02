const factorial = length => Array.from({length}, (v, i) => ++i).reduce((f, v) => (f *= v) && f, 1);

console.log(factorial(5));
