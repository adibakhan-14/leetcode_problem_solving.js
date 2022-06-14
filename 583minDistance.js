var minDistance = function(word1, word2) {
    let con1 = word1.length, con2 = word2.length;

    const dp = new Array(con1).fill(0).map(() => new Array(con2).fill(-1));

    const lcs = (i = 0, j = 0) => {
        if(i == con1 || j == con2) return 0;

        if(dp[i][j] != -1) return dp[i][j];

        if(word1[i] == word2[j]) {
            return dp[i][j] = lcs(i + 1, j + 1) + 1;
        }

        return dp[i][j] = Math.max(lcs(i + 1, j), lcs(i, j + 1));
    }

    return (con1 + con2 - 2 * lcs());
};
let word1= 'leetcode'
let word2= 'etco'




console.log(minDistance(word1, word2));
// console.log(con1);
// console.log(con2);
// console.log(result);