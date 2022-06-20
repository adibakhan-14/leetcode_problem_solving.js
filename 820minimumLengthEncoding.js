var minimumLengthEncoding = function(words) {

    let set  = new Set(words);
     for(let i of set){
        for(let j = 1 ; j < i.length ; j++){
            set.delete(i.slice(j))
        }
    }
    let c = Array.from(set)
    return c.join("").length + c.length





};


let words = ["time", "me", "bell", "ell"]
console.log(minimumLengthEncoding(words));