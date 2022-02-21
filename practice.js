// var berrr= {
//         GF:'NAI',
//         JOB:'CHAI',
//         BF: [{
//         order_id: 'maaa',
//         orientation: 'lease',
//         information: 'this.combineTruck',
// }]}

// var obj= {
//         name: 'adiba',
//         kaaj:'parina',
//         matha:'kore betha'
// }

// var mair= [{...berrr.BF[0], ...obj}];
// console.log(mair);

// var arr=[];
// var obj1= {
//         naam:'adiba',
//         kaam:'nai',
//         poysha:'nai'
// }
// var obj2={
//         age:'buri',
//         biye:'korenai'
// }

// arr.push(obj1, obj2);
// console.log(arr);

// function search(nameKey, myArray){
//         for (var i=0; i < myArray.length; i++) {
//             if (myArray[i].name === nameKey) {
//                 return myArray[i];
//             }
//         }
//     }
    
//     var array = [
//         { name:"string 1", value:"this", other: "that" },
//         { name:"string 2", value:"this", other: "that" }
//     ];
    
//     var resultObject = search("string 1", array);
//     console.log(resultObject);

// 
function star(n){
    for(let i=1; i<n; i++){
        for(let j=1; j<=i; j++){
            console.log("* ");
        }
        console.log("\n");
    }
    
    
}

var n= 10;
console.log(star(n));