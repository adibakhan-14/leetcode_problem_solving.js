// var findMedianSortedArrays = function(nums1, nums2) {
//     let arr = [];
//     var x = nums2.length;
//     var y = nums1.length;
//     let totalLen = nums1.length + nums2.length
//     console.log(totalLen, "totalLen");

//     if (totalLen == 1) {
//         return nums1.length == 1 ? console.log(nums1[0], "nums1[0") : console.log(nums2[0], "nums2[0");
//     }
//     let arrLen = totalLen % 2 == 0 ? (totalLen) / 2 + 1 : Math.ceil(totalLen / 2);

//     let i = 0;
//     let j = 0;

//     while (arr.length < arrLen) {
//         if (i < nums1.length && j < nums2.length) {
//             if (nums1[i] <= nums2[j]) {
//                 arr.push(nums1[i]);
//                 i++;
//             } else {
//                 arr.push(nums2[j]);
//                 j++;
//             }
//         } else if (i >= nums1.length) {
//             arr.push(nums2[j]);
//             j++;
//         } else {
//             arr.push(nums1[i]);
//             i++;
//         }
//     }
//     return totalLen % 2 == 0 ? (arr[arr.length - 1] + arr[arr.length - 2]) / 2 : arr[arr.length - 1]
//         // var z = x + y;
//         // for (let i = 0; i < nums2.length; i++) {
//         //     nums1.push(nums2[i]);
//         // }

//     // console.log(nums1, "nums1");

//     // if (z % 2 === 0) {
//     //     const q = z / 2;
//     //     console.log(q, "qqqqqq");
//     //     var m1 = nums1.indexOf((q + 1));
//     //     console.log(m1, "m1");
//     //     var m2 = nums1.indexOf(q + 2);
//     //     console.log(m2, "M2");
//     //     var avg = (m1 + m2) / 2;
//     //     console.log(avg, "avgavgavg");
//     //     return avg;

//     // }

// };

var findMedianSortedArrays = function(nums1, nums2) {
   const arr= nums1.concat(nums2);
   const arr2= arr.sort();
   const len= arr2.length;
   if((len%2)==0){
    const i= Math.trunc(arr2.length /2);
    return (arr2[i-1] + arr2[i])/2
   }
   else{
    const i= Math.trunc(arr2.length /2);
    return arr2[i]
   }


};


var n = [1, 2, 3, 4, 5]
var m = [1, 2, 3]



console.log(findMedianSortedArrays(n, m));