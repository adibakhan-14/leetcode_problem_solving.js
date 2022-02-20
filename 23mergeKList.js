var mergeKLists = function(arr) {
    var myArray = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        while (arr[i]) {
            myArray.push(arr[i].val);
            arr[i] = arr[i].next;
        }
    }
    myArray.sort((a, b) => { return a - b });
    const n = myArray.length;
    if (n === 0) {
        const e = new ListNode(undefined, undefined);
        return e.next;
    }
    let prevNode = new ListNode(myArray[n - 1], undefined);
    for (let i = myArray.length - 2; i >= 0; i--) {
        prevNode = new ListNode(myArray[i], prevNode);
    }
    return prevNode;

};

var arr = [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6]
];


console.log(mergeKLists(arr));