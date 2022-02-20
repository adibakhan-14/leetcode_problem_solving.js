var findFinalValue = function(nums, original) {
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums.length == 1) {
            if (nums.includes(original)) {
                original = original * 2;
                return original;

            } else {
                return original
            }
        } else if (nums.length === 2) {
            original = original * 2;
            if (nums.includes(original)) {
                original = original * 2
                return original;
            }
            return original;

        } else if (nums.includes(original)) {
            original = original * 2;
            continue;
        } else if (!(nums.includes(original)) && nums.length === 1) {
            return nums[nums.length - 1]
        } else {
            return original
        }
    }


};

const nums = [1]
const original = 2
    // const value = nums.length;
    // const val = nums[nums.length - 1];
    // console.log(val);
    // const ase = nums.indexOf(2);
    // const ase = original * 2
    // console.log(ase);


console.log(findFinalValue(nums, original));