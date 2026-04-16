const sumAll = function(floor,upper) {

    if(!Number.isInteger(floor) || !Number.isInteger(upper) || floor < 0 || upper < 0){
        return 'ERROR';
    }
    
    let sum = 0;

    //Array Destructuring for swapping
    if(upper < floor) [upper,floor] = [floor,upper];

    for (let cursor = floor; cursor <= upper; cursor++) {
        sum += cursor;

        
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
