var missingNumber = function(arr) {

    arr.sort();

for(let i=0; i<arr.length; i++){
    if((arr[i+1]- arr[i])>1){
        arr[i]++;

        return arr[i]++;
    }
    // else{
    //     return arr.length;
    // }

}

for (let i = 0; i < arr.length; i++) {
    if (i !== arr[i]) return i;
}
return arr.length;
};

var arr= [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14];

console.log(missingNumber(arr));





