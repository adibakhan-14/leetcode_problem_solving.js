var containsDuplicate = function(nums) {
    let result= false;
    result = nums.some((element, index) => {
        return nums.indexOf(element) !== index
    });

    if(result){
        return true
    }
    else{
       return false
    }
};

var arr = [1,2,3,1]
console.log(containsDuplicate(arr));