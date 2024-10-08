/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
  let map = new Map()
  let hasParent = new Set() 
  descriptions.forEach(desc =>{
    if(!map.hasOwnProperty(desc[0])){
        map.set(desc[0], new TreeNode(desc[0]))
    }
      if(!map.hasOwnProperty(desc[1])){
        map.set(desc[1], new TreeNode(desc[1]))
    }
    hasParent.add(desc[1])
  })
  let root = null
  descriptions.forEach(desc =>{
    if(desc[2] === 1){
        map.get(desc[0]).left = map.get(desc[1])
    }else{
        map.get(desc[0]).right = map.get(desc[1])

    }
    if(!hasParent.has(desc[0])){
        root = map.get(desc[0])
    }
  })
  return root

};
