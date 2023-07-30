const circuitBreaker = [false, false, true, false, false, true, false, false];

for (let index = 0; index < circuitBreaker.length; index++){
    if (circuitBreaker[index]){
        console.log(index);
    }
}