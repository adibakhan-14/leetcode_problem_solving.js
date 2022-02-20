var maximumWealth = function(array) {

    var newArray = array
        .map(arr => arr.reduce((sum, item) => sum += item, 0));

    const max = Math.max(...newArray);
    // const index = newArray.indexOf(max);
    // return index
    return max
};

var acc = [
    [1, 2],
    [5, 5, 8],
    [4, 6],
    [20, 80]
]
console.log(maximumWealth(acc));