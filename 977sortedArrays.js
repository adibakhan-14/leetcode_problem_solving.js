var sortedSquares = function(nums) {
       var newArr=  nums.map(x=> {
                return Math.pow(x, 2);
              });
             return newArr.sort(function(a, b){return a-b});
              
         
};

var arr=  [-4,-1,0,3,10];
console.log(sortedSquares(arr));