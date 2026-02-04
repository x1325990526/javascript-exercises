//    expect(repeatString('hey', 3)).toEqual('heyheyhey');
const repeatString = function(str,n) {

    if(n<0)return "ERROR";
    let finalStr = '';
    for(i=0;i<n;i++){
        finalStr += str;
    } 

    return finalStr;


};


// Do not edit below this line
module.exports = repeatString;
