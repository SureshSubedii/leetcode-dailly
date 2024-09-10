// const insertionSort = (nums) =>{
//     for(let i = 1; i < nums.length; i ++){
//         let counter = i
//         while(counter && nums[counter - 1] > nums[counter]){
//             let temp = nums[counter - 1]
//             nums[counter - 1] = nums[counter]
//             nums[counter] = temp
//             counter --
//         }
//     }
//     return nums
// }

const insertionSort = (nums) =>{
    for(let i = 1; i < nums.length; i ++){
        let key = nums[i]
        let j = i - 1
        while( j >=0 && nums[j] > key){
            nums[j + 1] = nums[j]
            j -- 
            nums[ j + 1] =key
        }
    }
    return nums

}


console.log(insertionSort([3, 1, 4, 1, 5,-1]))