var maxScoreIndices = function(nums) {

    let zero = new Set();
    let one = new Set()

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            zero.add(i);
        } else {
            one.add(i);
        }
    }
    let left = 0;
    let right = one.size;
    let max = left + right;
    let result = [
        [0, max]
    ]



    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) right--;
        else left++;

        max = Math.max(max, right + left)
        result.push([i + 1, right + left])
    }
    let arr1 = result.filter((x) => x[1] == max)
    let arr2 = arr1.map(x => x[0])
    return arr2



};
let arr = [0, 0, 1, 0]
console.log(maxScoreIndices(arr));