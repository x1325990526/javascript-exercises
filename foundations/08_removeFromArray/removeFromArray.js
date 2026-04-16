const removeFromArray = function(arr,...theArgs) {
    const newArr = Array.from(arr);
    for (let index = 0; index < newArr.length; index++) {
        for (const item of theArgs) {
            if(item === newArr[index]){

                newArr.splice(index,1);
                //splice() delete element, recover index;
                index--;

            }
                
        }        
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
