// Sort array in O(nlogn) time

var sortArray = function(nums) {
if(nums.length <= 1) return nums
let midIndex = Math.floor(nums.length/2)

let left = sortArray(nums.slice(0, midIndex))
let right = sortArray(nums.slice(midIndex, nums.length))

return merge(left,right)


   
};

const merge = (left, right)=>{
let sorted = []
let leftIndex = rightIndex = 0
while (leftIndex < left.length && rightIndex < right.length){
   if(left[leftIndex] < right[rightIndex]){
   sorted.push(left[leftIndex])
   leftIndex ++
   }
   else{
    sorted.push(right[rightIndex])
   rightIndex ++
   }

}
sorted.push(...left.slice(leftIndex, left.length))
sorted.push(...right.slice(rightIndex, right.length))

return sorted

}
