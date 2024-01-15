let num = "10";

// 1
console.log(2 * num);
console.log(typeof(2 * num));

// 2
console.log(num - num  + 2 * num--);
console.log(typeof(num - num  + 2 * num));

num--

// 3
console.log(2 * num + 0.5 * num);
console.log(typeof(2 * num + 0.5 * num));

num--

// 4
console.log(2 * num + --num);
console.log(typeof(2 * num + num));

// 5
console.log(4 * (num - true));
console.log(typeof(4 * (num - true)));
