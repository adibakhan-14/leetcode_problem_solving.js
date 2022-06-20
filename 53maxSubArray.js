// var plusOne = function(digits) {
//     const singleNum = Number(digits.join(''));
//     const totalNum= singleNum+1;

//     // var myArr = String(totalNum).split("").map((totalNum)=>{
//     //     return Number(totalNum)
//     //   })

//      return totalNum
// };

var plusOne = function(digits) {
    for (let i = digits.length -1; i >= 0; i--) {
        const curDigit = digits[i];
        if (curDigit < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        }
        digits[i] = 0;
    }
    return [1, ...digits];
}

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

console.log(plusOne(digits));

