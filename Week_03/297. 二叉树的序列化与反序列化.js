/*
 * 
 *   序列化是将一个数据结构或者对象转换为连续的比特位的操作，
 *   进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，
 *   采取相反方式重构得到原数据。
     请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，
     你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
     示例: 
     你可以将以下二叉树：
        1
       / \
      2   3
         / \
        4   5
     序列化为 "[1,2,3,null,null,4,5]"

     来源：力扣（LeetCode）
     链接：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree
 *
 *
 * 
 * 
 */
/**
 * @description: 序列化 
 * @param {type} 
 * @return: 
 */
var serialize = function(root) {
    let list = [];
    function _dfs(node){
        if(!node) {
            list.push(null);
            return;
        }
        list.push(node.val);
        _dfs(node.left);
        _dfs(node.right);
    }
    _dfs(root);
    return list;
};

var deserialize = function(data) {
    function _dfs(){
        if(data.length === 0) return null;
        let val = data.shift();
        if(val === null) return null;
        let node = new TreeNode(val);
        node.left = _dfs();
        node.right = _dfs();
        return node;
    }
    return _dfs();
};