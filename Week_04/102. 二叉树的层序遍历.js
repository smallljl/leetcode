/**
 *   给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
     示例：
     二叉树：[3,9,20,null,null,15,7],
         3
        / \
       9  20
         /  \
        15   7
      返回其层次遍历结果：
     [
         [3],
         [9,20],
         [15,7]
     ]
     来源：力扣（LeetCode）
     链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
 *
 */
function Node(val){
    this.val = val;
    this.left = this.right = null;
}

var deserialize = function(data) {
    function _dfs(){
        if(data.length === 0) return null;
        let val = data.shift();
        if(val === null) return null;
        let node = new Node(val);
        node.left = _dfs();
        node.right = _dfs();
        return node;
    }
    return _dfs();
};


// 深度搜索优先  DFS
var levelOrder1 = function(root) {
    if(!root || root.length < 1)
        return [];
    let ans = [];
    helper(ans, root, 0);
    return ans;
    function helper(ans,node,layer){
        if(!node) return;
        if(!ans[layer]) ans[layer] = [];
        ans[layer].push(node.val);
        helper(ans,node.left,layer+1);
        helper(ans,node.right,layer+1);
    }
};

/**
 *
 * 广度搜索优先
 *
 */
var levelOrder = function(root){
    if(root === null){
        return [];
    }
    var arr = [root];
    var res = [];
    function bfs(layers){
        if(layers.length === 0) return;
        let nextLayers = [];
        let currentVals = []; //存当前层
        for(let i = 0; i < layers.length;i++){
            let item = layers[i];
            currentVals.push(item.val);  // 添加到里面取
            item.left && nextLayers.push(item.left);
            item.right && nextLayers.push(item.right);
        }
        res.push(currentVals);
        bfs(nextLayers);
    }
    bfs(arr);
    return res;
};

let node = deserialize([3,9,20,null,null,15,7]);
console.log(levelOrder(node));