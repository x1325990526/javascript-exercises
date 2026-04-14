const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
	return arr.reduce((acc, cur) => acc + cur,0);
};

const multiply = function(arr) {
	return arr.reduce((acc, cur) => acc * cur);

};

const power = function(base, exp) {
  let result = 1;
  for (let i = 0;i < exp; i++) {

    result *= base;
    
  }
  return result;
	
};

const factorial = function(num) {
	let fac = 1;
  while(num > 0){
    fac *= num;
    num--;
  }

  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
