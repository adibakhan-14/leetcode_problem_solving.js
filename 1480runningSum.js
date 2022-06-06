var runningSum = function(nums) {
    let arr2 = [];
    nums.reduce( (prev, curr,i) =>  arr2[i] = prev + curr , 0 )

    return arr2

};

const nums = [3,1,2,10,1]

console.log(runningSum(nums));