const leapYears = function(year) {
    //闰年是能被4整除的年份（如1984年和2004年）。
    // 然而，能被100整除的年份不是闰年（如1800年和1900年），
    // 除非它们能被400整除（如1600年和2000年，这两个年份实际上是闰年）。（是的，这一切都挺让人困惑的）
    if(year % 400 === 0)return true;
    if(year % 4 === 0 && year % 100 !== 0)return true;

    return false;

};

/**
 * One Liner
 * const leapYears = function(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };
 */

// Do not edit below this line
module.exports = leapYears;
