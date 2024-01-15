const buildSandwich = (ingredient) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient} ${ingredient2} ${ingredient3}`;
        }
    }
}

console.log(buildSandwich("bread")("tomato")("meet"));


/////////////////////
const buildSamy = ingred1 => ingred2 => ingred3 => {
    return `${ingred1}${ingred2}${ingred3}`;
}

console.log(buildSamy("Sa")("m")("y"));


/////////////////////
const multiply = (x, y) => x * y;

const curriedMultiply = x => y => x*y;

console.log(multiply(2, 3));
console.log(curriedMultiply(3)(2));

//
const timesTen = curriedMultiply(10);
console.log(timesTen(5));

//////////////////

const updateElement = id => content => {
    document.querySelector(`#${id}`).textContent = content;
}

updateElement("para")("currying function technique");
