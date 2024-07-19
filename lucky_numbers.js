var luckyNumbers  = function(matrix) {
    let m =  matrix.length
    let n =  matrix[0].length
    let min = []
    let max  = []
    
    for(let j = 0; j < n; j++){
         let maxCol = 0
    for(let i = 0; i < m; i++){
        if(j == 0) min.push( Math.min(...matrix[i]))
        if(matrix[i][j]  > maxCol) maxCol =   matrix[i][j] 
    }
    max.push(maxCol)

    }
  return min.filter(item => max.includes(item))
    
};