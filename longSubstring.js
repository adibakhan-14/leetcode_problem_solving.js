var lengthOfLongestSubstring = function(s) {
    let longestStringLength = 0;

    for (let i = 0; i < s.length; i++) {
        let currentStringSet = new Set();

        for (let x = i; x < s.length; x++) {
            if (currentStringSet.has(s[x])) {
                break;
            } else {
                currentStringSet.add(s[x]);
            }
        }

        longestStringLength = Math.max(
            longestStringLength,
            currentStringSet.size
        );
    }

    return longestStringLength;
};