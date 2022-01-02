const str = 'Hello World!';

const refStr = str.split('').reverse().join('');
  // .reduce((acc, ch, i) => (acc += i%2 && ch !== ' ' ? '' : ch) && acc, '');
console.log(refStr);
