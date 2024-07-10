var minOperations = function(logs) {
    let nextFolder = /[a-z0-9]/
    let back = /^[.]{2}/
    let number = 0
    logs.forEach(cmd  =>{
        if(nextFolder.test(cmd)) number ++
        if(back.test(cmd) && number !==0) number --
    })
    return number 
    
    
}
