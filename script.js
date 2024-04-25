// Write a function that returns the sum of two numbers.
// Write a function that returns the sum of all numbers regardless of # of params.


function add(param1,param2) {
    return param1 + param2;
}

console.log(sum(1,2))

function sumOfAllParam(...param1){       // using Rest Operators and forEach()
    let total=0;
    param1.forEach(perElement => {
        total += perElement;
    })
    return total;
}

console.log(sumOfAll(1,2,3,4,5,6,7,8,9,10));