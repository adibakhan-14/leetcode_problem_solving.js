var validateStackSequences = function(pushed, popped) {
    var stack = []
    let i = 0

    for (const el of pushed) {
        stack.push(el)
        while (stack.length && stack[stack.length - 1] === popped[i]) {
            stack.pop()
            i++
        }
    }
    
    return pushed.length === i
}

var pushed=[1,2,3,4,5];
var pop= popped = [4,3,5,1,2]

console.log(validateStackSequences(pushed));

