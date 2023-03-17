const repeatString = function(str, n) {
    let ans = "";

    if (n < 0)
        return "ERROR";

    for (let i = 0; i < n; ++i) {
        ans += str;
    }

    return ans;
};

// Do not edit below this line
module.exports = repeatString;
