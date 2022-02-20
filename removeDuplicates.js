var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        {
            let j = 1
            if (nums[j] !== nums[i]) {
                i++;
                nums[i] = nums[j]
                j++
            } else j++
        }
        return i + 1
    }

};
var arr = [1, 1, 2, 3]
console.log(removeDuplicates(arr));