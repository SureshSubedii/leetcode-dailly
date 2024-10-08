var maximumGain = function(s, x, y) {
    let total = 0;
    let stack = s.split("");

    function remove(stack, temp, point) {
        let resultStack = [];
        for (let char of stack) {
            resultStack.push(char);
            if (resultStack.length >= 2 && resultStack[resultStack.length - 2] === temp[0] && resultStack[resultStack.length - 1] === temp[1]) {
                resultStack.pop();
                resultStack.pop();
                total += point;
            }
        }
        return resultStack;
    }

    if (x >= y) {
        stack.reverse()
        let temp = x
        x = y
        y = temp

    } 
    
        stack = remove(stack, "ba", y);
        stack = remove(stack, "ab", x);

    return total;
};
