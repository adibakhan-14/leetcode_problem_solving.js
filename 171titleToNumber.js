var titleToNumber = function(columnTitle) {
        let correspondingNumber= 0;
       for(let i=0; i<columnTitle.length; i++){
        const cl = columnTitle[i]; 
        const cn = cl.charCodeAt(0) - 64;

        correspondingNumber+= cn*Math.pow(26, columnTitle.length-i-1);
       }
       return correspondingNumber;
    
};

var columnTitle = "AB";

console.log(titleToNumber(columnTitle));