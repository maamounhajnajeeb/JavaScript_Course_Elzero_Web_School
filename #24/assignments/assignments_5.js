function checkPerformance() {
    let t1 = performance.now();
    for ( let i=1; i < 9999; i++){
        console.log(i);
    }
    console.log(performance.now() - t1);
}

checkPerformance();
