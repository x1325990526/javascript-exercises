const fibonacci = function(x) {

    if(typeof x !== 'number'){
        x = parseInt(x);
    } 
    
    if(x == 0) return 0;
    if(x < 0) return "OOPS";

    const arr = [1,1];
    if(x < 3) return arr[x-1];
    
    let count = x -2;

    while(count > 0){
        const tmp = arr[1];
        arr[1] = arr[0] + arr[1];
        arr[0] = tmp;
        count--;
    }
    return arr[1];
};

// Do not edit below this line
module.exports = fibonacci;
