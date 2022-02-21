const majorityElement = (arr = []) => {
        const threshold = Math.floor(arr.length / 2);
        const map = {};
        for (let i = 0; i < arr.length; i++) {
           const value = arr[i];
           map[value] = map[value] + 1 || 1;
           console.log( map[value]);
           if (map[value] > threshold)
              return value
        };
        return false;
     };

let arr=[3,2,3]
console.log(majorityElement(arr));

