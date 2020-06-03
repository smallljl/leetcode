/**
 * 给定一个 N 叉树，返回其节点值的后序遍历。
   例如，给定一个 3叉树 :
   返回其后序遍历: [5,6,3,2,4,1]
 * 
 * 
 */
var postorder = function(root) {
    function _postorder(node,hander){
        if(!node) return false;
        let childs = node.children 
        if(childs.length){
            for(let i = 0; i < childs.length;i++){
                let item = childs[i];
                _postorder(item,hander);
            }
        }
        hander(node.val);
    }
    let arr = [];
    function hander(val){
        arr.push(val);
    }
    _postorder(root,hander);
    return arr;
};
