var searchInsert = function(nums, target) {
       var left=0;
       var right= nums.length;

       while(left<right){
               var mid= Math.floor((left+right)/2);
               if(nums[mid]===target){
                        return mid
               }
               else if(nums[mid]>target){
                       console.log(right, "right pai");
                        right=mid;
               }
               else{
                       console.log(left), "left pai";
                       left= mid+1;
               }
       }
       return left;
};

let arr= [1,2,3,4,5,7];
let target=4;
 console.log(searchInsert(arr, target));