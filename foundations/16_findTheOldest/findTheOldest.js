/**
 * 
 * @param {[]} people 
 */

const findTheOldest = function(people) {
    const old = people.reduce((oldest,person) =>{
        let curYear = 0;
        let oldYear = 0;

        if(oldest.yearOfDeath == undefined){
            oldYear = new Date().getFullYear() - oldest.yearOfBirth;
        }else{
            oldYear = oldest.yearOfDeath - oldest.yearOfBirth;
        }
        
        if(person.yearOfDeath == undefined){
            curYear = new Date().getFullYear() - person.yearOfBirth;
        }else{
            curYear = person.yearOfDeath - person.yearOfBirth;
        }

        return curYear > oldYear ? person : oldest;

    },{
        name: "",
        yearOfBirth: 1900,
        yearOfDeath: 1900,
      });

      return old;

      

};


/**
 *   const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
 * 
 */

// Do not edit below this line
module.exports = findTheOldest;
