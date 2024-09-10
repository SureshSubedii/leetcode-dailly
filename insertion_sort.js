const insertionSort = (nums) =>{
    for(let i = 1; i < nums.length; i ++){
        let counter = i
        while(counter && nums[counter - 1] > nums[counter]){
            let temp = nums[counter - 1]
            nums[counter - 1] = nums[counter]
            nums[counter] = temp
            counter --
        }
    }
    return nums
}
console.log(insertionSort([3, 1, 4, 1, 5,0]))