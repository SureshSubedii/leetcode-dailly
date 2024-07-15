countOfAtoms = function (formula) {
    let map = {}
    let stack = []

    for(let i = 0; i < formula.length; i++){
        console.log(stack)
        let char =  formula[i]
        if(char >= "A" &&  char <= "Z"){
            if(formula[i + 1] >= "a" && formula[i + 1] <= "z"){
                stack.push(char + formula[i + 1])
                i++
            }else{
                stack.push(char)
            }
            if(!parseInt(formula[i + 1])) stack.push(1)

        }

        if(parseInt(char) || char == 0){
          let  digits  = char
           let next = formula[i + 1]
            while(parseInt(next) || next  == 0){
            console.log(next, digits)

                digits += next
                i++
                next = formula[i + 1]
            }
            stack.push(+digits)
        }

        if(char === "("){
            stack.push(char)
        }

        if(char === ")"){
            let multiplier = ""
            next = formula[i + 1]
            while(parseInt(next) || next == 0){
                multiplier += next
                i++
                next = formula[i + 1]
            }
            if(multiplier == "") multiplier =  1
            let pointer = stack.length 

            while(true){
                pointer --
                if(stack[pointer] === "("){
                    stack[pointer] = "";
                    break
                }
                if(typeof(stack[pointer]) !== "number") continue 

                stack[pointer] =   stack[pointer] * multiplier

                
            }
        }
    }
    for(let i = 0 ; i < stack.length; i++ ){
        let string = stack[i]
        if(typeof(string) !== "string" || string === "") continue

        let count = !stack[i + 1] ? 1 : stack[i + 1]
        if(map[string]){
             map[string] += count
        }else{
            map[string] = count
        }
    }
    const result = Object.keys(map)
    .sort().reduce((str, key) => str += `${key}${map[key] === 1? "" : map[key] }` , "")

    return result
 
};