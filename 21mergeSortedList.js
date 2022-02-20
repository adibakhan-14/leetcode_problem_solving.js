var mergeTwoLists = function(arr1, arr2) {

    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }

    for (let i = 0; i <= arr1.length; i++) {
        for (let j = 0; j < ((arr1.length)); j++) {
            if (arr1[j] > arr1[j + 1]) {
                var temp = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = temp;
            }
        }
    }
    return arr1



};

var arr1 = [1, 2, 3];
var arr2 = [2, 1, 4, 5];


// var arr3 = [...arr1, ...arr2]
// arr3.sort();
// console.log(arr3);
// for (let i = 0; i < arr2.length; i++) {
//     arr1.push(arr2[i]);
// }
console.log(mergeTwoLists(arr1, arr2));