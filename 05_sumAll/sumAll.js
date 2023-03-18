const sumAll = function(l, r) {
    if (r < l) {
        let temp = l;
        l = r;
        r = temp;
    }

    if (l < 0 || r < 0 || typeof l !== "number" || typeof r !== "number")
        return 'ERROR';

    let sum = 0;
    for (let i = l; i <= r; ++i) {
        sum += i;
    }

    return sum;
};
// console.log(typeof 5);
// Do not edit below this line
module.exports = sumAll;
