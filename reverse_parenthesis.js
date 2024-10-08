var reverseParentheses = function(s) {
    let stack = [];
    let result = ";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(result); 
            result = "; 
        } else if (s[i] === ')') {
            result = stack.pop() + result.split('').reverse().join('');
            console.log(result)
        } else {
            result += s[i]; 
        }
    }

    return result;
};

