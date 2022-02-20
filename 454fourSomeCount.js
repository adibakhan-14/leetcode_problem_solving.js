var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let m = new Map(),
        count = 0;

    nums1.forEach(n1 => {
        nums2.forEach(n2 => {
            let sum = n1 + n2;
            m.set(sum, m.get(sum) + 1 || 1);
        })
    })

    nums3.forEach(n3 => {
        nums4.forEach(n4 => {
            let sum = -(n3 + n4);
            count += m.get(sum) ? m.get(sum) : 0;
        })
    })
    return count;
};