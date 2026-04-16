/**
 * @param {string} str
 */


const palindromes = function (str) {
    let arrFilter = str.split("").map(char => char.toLocaleLowerCase())
                                .filter(char => /[a-zA-Z0-9]/.test(char));


    let isPalindromes = true;
    for (let i = 0; i < arrFilter.length; i++) {

        if(arrFilter[i] !== arrFilter.toReversed()[i]) isPalindromes =false;
        
    }                             
    return isPalindromes;                         

    
};

// Do not edit below this line
module.exports = palindromes;
