// var largestRectangleArea = function(heights) {
//     const x = heights.sort();
//     console.log(x, "sorted arr");

//     if (x.length == 3 && (x[x.length - 1]) == (x[x.length - 2])) {
//         return ((x[x.length - 2]) + x[x.length - 3])

//     } else if (x.length == 2 && (x[x.length - 1] == x[x.length - 2])) {
//         return (x[x.length - 2] + x[x.length - 1])
//     } else if ((x.length == 2 && (x[x.length - 2] == 0))) {
//         return x[x.length - 1]

//     } else if ((x[x.length - 2] == 0)) {
//         return x[x.length - 1]
//     } else if (x[x.length - 1] == x[x.length - 2]) {
//         return x[x.length - 1]
//     } else if (x.length == 1) {
//         return x[x.length - 1]

//     } else {
//         const l1 = x[x.length - 2];
//         const sum = l1 + l1
//         return sum
//     }


// };
var largestRectangleArea = function(heights) {
    let maxArea = 0
    let stack = [];
   
    heights.push(0);
    heights.unshift(0);
    
    for(let g=0; g<heights.length; g++){
         while(stack && stack.length && heights[stack[stack.length -1]] > heights[g] ){
             let popElement = stack.pop();
             maxArea = Math.max(maxArea, heights[popElement] * (g - stack[stack.length - 1] -1) )
         }
         stack.push(g);   
    }
    return maxArea;  
};

const arr = [2, 1, 2]
    // const m = arr.length;
    // console.log(m);
    // const y = arr[arr.length - 1]

// console.log(y);

console.log(largestRectangleArea(arr));