/**
 *  给出一个完全二叉树，求出该树的节点个数。

    说明：

    完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，
    并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。

    示例:

    输入: 
        1
    / \
    2   3
    / \  /
    4  5 6

    输出: 6

 * 
 * 
 */
var countNodes = function(root) {
    if(root === null) return 0;
    return 1 + countNodes(root.left) + countNodes(root.right);    
};

var countNodes = function(root) {
    if(root === null) return 0;
    let ret = 1;
    let h1 = findLeftDepth(root.left);  
    let h2 = findRightDepth(root.left);
    let h3 = findLeftDepth(root.right);
    if(h1 === h2){
        ret += Math.pow(2,h1) - 1;  // 左边是满二叉树    //当前节点数 + 左边满二叉树的个数
        return ret + countNodes(root.right);   // 右边节点的个数
    } else {
        ret += Math.pow(2,h3) -1;  // 
        return ret + countNodes(root.left);
    }
};

function findLeftDepth(node){
    let count = 0;
    while(node){
        count ++;
        node = node.left;
    }
    return count;
}

function findRightDepth(node){
    let count = 0;
    while(node){
        count++;
        node = node.right;
    }
    return count;
}


// 二分查找
var countNodes = function(root) {
    if(!root) return 0;
    let h = 0;
    let node = root;
    while(node){
        h++;
        node = node.left;
    }
    let low = Math.pow(2,h-1);
    let high = Math.pow(2,h) -1;
    while(low < high){
        let mid = low + Math.floor((high - low + 1) / 2);
        if(hasK(root,mid))
            low = mid;
        else 
            high = mid - 1;
    } 
    return low;
};

function hasK(node,k){
    let path = [];
    while(k > 0){
        path.push(k);
        k >>= 1; // 右移1位
    }
    for(let i = path.length-1; i >= 0; i--){
        if(node === null) return false;
        if(i === 0) return true;  // 存在值
        if(path[i-1] === path[i] << 1)  //乘以2
            node = node.left;
        else 
            node = node.right;
    }
    return false;
}