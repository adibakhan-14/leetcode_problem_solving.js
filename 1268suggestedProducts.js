// var suggestedProducts = function(products, searchWord) {
//     let newArr=[];

//     for(let i=0; i< products.length; i++){
//         if(products[i].includes(searchWord)){
//             newArr.push(products[i])
//         }
//     }
//     return newArr


// };

var suggestedProducts = function(products, searchWord) {
    const newArr = [];
    products.sort();

    for(let i = 1; i <= searchWord.length; i++){
        const substr = searchWord.substring(0,i);
        newArr.push(products.filter(str => str.startsWith(substr)).slice(0, 3))
    }

    return newArr;
};

let products = ["mobile","mouse","moneypot","monitor","mousepad"];
let searchWord = "monitor"

console.log(suggestedProducts(products, searchWord));
