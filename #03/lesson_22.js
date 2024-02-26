let a = 10, c = 80;
let b = "20";

// 1]
// console.log(++a + +b++ + +c++ - a++); // 100

/*

- [++a] => value: 11, explain: a is 10 and there is a post increament
- [+] => value: sum, explain: it behave like sum operator because before b there is unary plus
- [+b++] => seperated into two portions: 1]+ , 2]b++
                1] is unary plus so behave like number
                2] b value and post inscreament
    value: 20
- [+] => value: sum, explain: it behave like sum operator because before b there is unary plus
- [+c++] => value: 80, explain: unary c and post increament
- [-] => value: sum, explain: it behave like , minus operator because before c and a are numbers
- [a++] => value: 10, explain: post increament

*/

// 2]
// console.log(++a + -b + +c++ - -a++ + +a);

// 3]
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);


// challenge two
let d = "-100", e = "20";
let f = 30;
let g = true;


// 1] 2000
console.log(-d * e + f + 30 * -g);

// 2] 173
console.log(-d + 2 * ++e + f + g);
