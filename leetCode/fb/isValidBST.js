/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


 //no
// var isValidBST = function(root) {
    
//     let node = root;
    
//     let queue = [node];

//     while(queue){
//         const cur = queue.pop();
//         if(!cur) break;
//         if(cur.left && ((cur.left.val >= cur.val) || (cur.left.val >= root.val))) return false;
//         if(cur.right && ((cur.right.val <= cur.val) || (cur.right.val <= root.val))) return false;
//         if((cur.right && cur.left) && (cur.right.val <= cur.left.val)) return false;
//         queue.unshift(cur.left);
//         queue.unshift(cur.right);
//     }
    
//     return true;
    
// };


//almost
var isValidBST = function(root) {
    
    let node = root;
    let temp = -Infinity;
    
    function recurse(node){
        if(!node) return;
        recurse(node.left);
        console.log(node.val);
        console.log(cache[cache.length-1])
        if(node.val <= cache[cache.length-1]) return false;
        cache.unshift(node.val);        
        recurse(node.right);
    }
    let res = recurse(node) === false ? false : true;
    return res;
    
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    let node = root;
    let temp=-Infinity,
        flag=true;
    
    
    function recurse(node){
        if(!node) return true;
        recurse(node.left);
        if(node.val<=temp) flag=false;  //temp is for keeping track of the previous inorder value. 
									   //If current node value <=temp, flag it.
        temp=node.val;
        recurse(node.right);
    }
    recurse(node)
    return flag;
    
};