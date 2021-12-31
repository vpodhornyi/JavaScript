const arr = [1, 2, 3, 4, 5, 6, 7];

arr.reduceRight((acc, item) => console.log(item) && acc, 0);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
