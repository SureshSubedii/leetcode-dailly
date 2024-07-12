var maxDepth = function(s) {
    let left = 0
    let right = 0
    let depth = 0
    let max = 0
    for(let i = 0; i < s.length; i++){
        if( s[i] === "("){
            left += 1
        }
        if( s[i] === ")"){
            right += 1
        }
        else{

            depth = left - right  
            if(depth > max) max = depth
        }
    }
    return max
    
};
