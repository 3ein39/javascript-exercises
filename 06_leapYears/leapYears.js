const leapYears = function(year) {
    return year % 4 === 0 && ( (year % 100 !== 0 ) || (year % 400 === 0) );
};

// let ans = leapYears(1900);
// console.log(1900 % 400);

// Do not edit below this line
module.exports = leapYears;
