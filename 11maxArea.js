var maxArea = function(height) {
 height.sort((a, b) => b-a);
 let arr = [...new Set(height)];
//  console.log(arr.length);
 if(arr.length===1){
    let maxArea= arr[0]*arr[0];
    return maxArea
 }
 else{
    let maxArea= arr[1]*arr[1];
    return maxArea
 }

};

var height = [1,1];
console.log(maxArea(height));