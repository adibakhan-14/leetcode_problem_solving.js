var maximumUniqueSubarray = function(nums) {
    let uniqArr=[];
    var sum=0;

    nums.forEach((c) => {
        if (!uniqArr.includes(c)) {
            uniqArr.push(c);
        }
    });
  var sum= uniqArr.reduce((a, b) => a + b, 0);
  return sum




    // return uniqArr
};

var arr= [187,470,25,436,538,809,441,167,477,110,275,133,666,345,411,459,490,266,987,965,429,166,809,340,467,318,125,165,809,610,31,585,970,306,42,189,169,743,78,810,70,382,367,490,787,670,476,278,775,673,299,19,893,817,971,458,409,886,434];
console.log(maximumUniqueSubarray(arr));

