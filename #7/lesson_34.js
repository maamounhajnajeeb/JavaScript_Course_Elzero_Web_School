// if (condition) {
    // Block of code
// }

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount == true) {
    price -= discountAmount;
}

else if (country=="Egypt") {
    price -= discountAmount + 10;
    if (student === true) {
        price -= 10;
    }
}

else {
    price -= 10;
}

console.log(price);