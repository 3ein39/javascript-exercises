const removeFromArray = function(arr, ...rm) {
    let ans = [];
    for (let el of [...arr]) {
        if (!rm.includes(el))
            ans.push(el);
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
