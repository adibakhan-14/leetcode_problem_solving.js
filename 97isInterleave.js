var dp = null;
var a = null;
var b = null;
var c = null;

var isInterleave = function(s1, s2, s3) {
    a = s1;
    b = s2;
    c = s3;
    dp = new Map();
    if(s1 === "") return s2 === s3;
    if(s2 === "") return s1 === s3;
    return interleave(0, 0, 0);
};

function interleave(ai, bi, ci){
    var dp_key = `${ai}-${bi}-${ci}`;

    if(dp.has(dp_key))
        return dp.get(dp_key);

    while(ci < c.length){
        // case 1: could use either -> recurse on both
        if(a[ai] === c[ci] && b[bi] === c[ci]){
            if( interleave(ai+1, bi, ci+1) || interleave(ai, bi+1, ci+1) ){
                dp.set(dp_key, true);
                return true
            }
            dp.set(dp_key, false);
            return false
        }
        // case 2: only a matches -> consume a
        if (a[ai] === c[ci]){
            ai++;
            ci++;
            continue;
        }
        // case 3: only b matches -> consume b
        if (b[bi] === c[ci]){
            bi++;
            ci++;
            continue;
        }
        // case 4: neither matches -> done
        dp.set(dp_key, false);
        return false;
    }

    return ai === a.length && bi === b.length;
}

var s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";

console.log(isInterleave(s1, s2, s3));