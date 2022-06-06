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

// let arr1=[];

// function search(nameKey, myArray){
//         for (var i=0; i < myArray.length; i++) {
//             if (myArray[i].name === nameKey) {
//                  arr1.push(myArray[i]);

//             }

//         }
//         return arr1;
//     }

//     var array = [
//         { name:"string 1", value:"this", other: "that" },
//         { name:"string 2", value:"this", other: "that" },
//         { name:"string 1", value:"yess", other: "noo" },
//     ];

//     var resultObject = search("string 1", array);
//     console.log(resultObject);

//
// function star(n){
//     for(let i=1; i<n; i++){
//         for(let j=1; j<=i; j++){
//             console.log("* ");
//         }
//         console.log("\n");
//     }


// }

// var n= 10;
// console.log(star(n));

// let item= "adiba"

// let strArray = [ {name: "u"},{name: "v"},{name: "x"},{name: "adiba"}];

// const indexOfObject = strArray.findIndex(object => {
//     return object.name === item;
//   });

// // var index = strArray.indexOf(item);
// if (indexOfObject !== -1) {
//     strArray.splice(indexOfObject, 1);
// }

// console.log(strArray);


// var object={
//   pk: "hello",
//   sk: "jello",
//   information: [

//   ]
// }

// var productInfo= [
//   {name: "potato", age: 3, job: "make chips"},
//   {name: "korolla", age:5, job: "spread bitterness"}]




//   productInfo.forEach(element => {
//     object.information.push(element)
//   });


// console.log(object.information, "Ki information pacchi" );

// var productInfo= [
//   {name: "potato", age: 3},
//   {name: "korolla", age:5, }]

// var obj= [{job: "make chips"},
//           {job: "spread bitterness"}
// ]

// let arr=[]
// // let arr3 = productInfo.map((item, i) => Object.assign({}, item, obj[i]));

// productInfo.forEach(element => {
//   arr.push(element)
// });
// Array.prototype.push.apply(arr, obj);

// console.log(arr);

// let arr1=[];

// let arr=[[{name: 'adiba', age: 27}, {name: 'arnob', age: 29}],
// [{name: 'farhad', age: 39}, {name: 'dia', age: 27}],
// [{name: 'sarina', age: 2}, {name:'yashna', age: 27}, {name: 'seku', age: 28}]
// ]


// arr.forEach(element => {
//     for(let i=0; i<element.length; i++){
//         arr1.push(element[i]);
//     }

// });
// console.log(arr1);

// let arr1=[];

// let arr=[
//     {name: 'adiba', age: 27},
//     {name: 'arnob', age: 29},
//     {name: 'farhad', age: 39},
//     {name: 'dia', age: 27},
//     {name: 'sarina', age: 2},
//     {name:'yashna', age: 27},
//     {name: 'seku', age: 28}
// ]

// let id= arr.name+ arr.age;

// arr.forEach(e => {
//     const id=(e.name+ e.age);
//     e["id"] = id;

// });

// console.log(arr, "ki pai??");
// function numberOfItems(arr, item) {
    // Write the code that goes here
//   arr.forEach(e => {
//       let c= 0;

//       if(arr[e]==item){
//           c++;
//       }
//       return c;
//   });


//   }

// var arr = [
//     25,
//     "apple",
//     ["banana", "strawberry", "apple", 25]
//   ];
//   console.log(numberOfItems(arr, 25));
  //console.log(numberOfItems(arr, "apple"));


  // let nameL= 'AdiBa sumaiya khan';

  // var final= nameL.toLowerCase().slice(0,4)

  // console.log(final);

  const name= require('./node');
  const sayHi= require('./sayHi')

  sayHi('Kumkum');
  sayHi(name.name.first+ ' '+ name.name.middle);


  var arr= [1,2,3,4,[5,6,7,8,[9,10,11,12,[13,14,15,16]]]]
  var arr2=[]

  const a= 8;
  const b=2;

  function addValue (num){
    console.log(`sum is : ${a+b}`);
  }

  addValue();

  const os= require('os');

  const user = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    x: os.getPriority()
  }

  console.log(user);





//   let applicants = [
//     {name: "aaron", yrsOfExperience: 18, age: 66},
//     {name: "beth", yrsOfExperience:  0, age: 18},
//     {name: "cara", yrsOfExperience: 4, age: 22},
//     {name: "daniel", yrsOfExperience: 3, age: 16},
//     {name: "ella", yrsOfExperience: 5, age: 25},
//     {name: "fin", yrsOfExperience: 0, age: 16},
//     {name: "george", yrsOfExperience: 6, age: 28},
// ]

// let criteria = {
// 	minimumExperience: 3,
//   lowerAge: 18,
//   upperAge: 65
// }


// let luckyApplicant = applicants.find(function(applicant) {
// 	return applicant.yrsOfExperience >= this.minimumExperience && applicant.age <= this.upperAge
//   && applicant.age >= this.lowerAge ;
// }, criteria)

// console.log(luckyApplicant);
const data = {
  users: [

  {
          "id": "123",
          "name": "John Smith",
          "items": [
              {
                  "id": 1,
                  "name": "Soccer ball",
              }
          ]
  },
  {
          "id": "456",
          "name": "Steve Johnson",
          "items": [
              {
                  "id": 2,
                  "name": "Basketball",
              }
          ]
  },
  {
          "id": "789",
          "name": "Leslie Thompson",
          "items": [
              {
                  "id": 3,
                  "name": "Football",
              }
          ]
  }
]
};

const output = data.users.filter(x => x.items.every(y => y.name.includes("Basketball")));



console.log('first task');
setTimeout(()=>{
  console.log('second task');
}, 0)

console.log('next task');

console.log(output, "basketballllllllllll");


const http = require('http');
const server = http.createServer((req, res)=>{
  console.log('request event');
  res.end('hello adiba')
})

server.listen(5000, ()=>{
  console.log('server listening on port: 5000...');
})

setTimeout(() => {
  console.log("i am dead");
}, 20000);
