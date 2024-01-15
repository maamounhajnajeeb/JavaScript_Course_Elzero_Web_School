// start time

let start = new Date();

// operation
for (let i=0; i<1000; i++) {
    document.write(`<div>${i}</div>`);
}

// end time
let end = new Date();

let duration = end - start;

console.log(duration);

// performance.now(), performance.time() for searching