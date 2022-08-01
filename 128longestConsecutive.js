// var longestConsecutive = function(nums) {

// };
let nums =[1, 2, 3, 5, 10, 9, 8, 9, 10, 11, 7];

let arr = [...new Set(nums)];
arr.sort()
let results=[];
for(var i=1; i < arr.length; i++) {
    if((arr[i-1]+arr[i+1]) / 2 == arr[i] && Math.abs(arr[i]-arr[i-1]) == 1) {
        results.push(i-1);
    }
}
console.log(results);