// var searchRange = function(nums, target) {
//     let arr1= [];
//     let arr2= [-1, -1]

//     for(let i=0; i<nums.length; i++){
//         if(nums[i]==target){
//             arr1.push(i)
//         }
//     }
//     if(arr1.length===0){

//         return arr2
//     }
//     else{

//         if(arr1.length>1){

//             return arr1
//         }else{
//             let arr3= [arr1[0], arr1[0]];
//             return arr3
//         }
//     }

// };

var searchRange = function(N, T) {
    const find = (target, arr, left=0, right=arr.length) => {
        while (left <= right) {
            let mid = left + right >> 1
            if (arr[mid] < target) left = mid + 1
            else right = mid - 1
        }
        return left
    }
    let Tleft = find(T, N)
    if (N[Tleft] !== T) return [-1,-1]
    return [Tleft, find(T+1, N, Tleft) - 1]
};
 var nums = [5,7,7,8,8,10], target = 8;
//var nums = [1], target = 1;

console.log(searchRange(nums, target));