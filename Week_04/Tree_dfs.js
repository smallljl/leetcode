// 中序遍历
function f2(root){
    let res = [];
    dfs(root,res);
    return res;
    function dfs(node,res){
        if(node !== null){
            dfs(node.left,res);
            res.push(node.val);
            dfs(node.right,res);
        }
    }
}
// 中序  =====>
function f3(root){
    let res = [];
    let node = root;
    let stack = [];
    while(stack.length > 0 || node !== null){
        if(node){
            stack.push(node);
            node = node.left;
        }else{
            node = stack.pop();
            res.push(node.val);
            node = node.right;
        }
    }
    return res;
}

// 前序遍历
function f4(root){
    let res = [];
    dfs(root,res);
    return res;
    function dfs(node,res){
        if(node !== null) {
            res.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
    }
}
// 根 左 右   前序  
function f5(root){
    if(!root) return [];
    let res = [];
    let node = root;
    let stack = [node];
    while(stack.length > 0){
        if(node){
            res.push(node.val);
            stack.push(node);
            node = node.left;
        }else{
            node = stack.pop();
            node = node.right;
        }
    }
    return res;
}

// 左 右 根  后序
function f6(root){
    if(!root) return [];
    let res = [];
    let stack = [];
    let node = root;
    while(node !== null || stack.length > 0){
        if(node){
            res.unshift(node.val);
            stack.push(node);
            node = node.right;
        }else{
            node = stack.pop();
            node = node.left;
        }
    }
    return res;
}

// tree 二叉树 dfs
function tDfs(root){
    dfs(root);
    function dfs(node){
        if(!node) return null;
        dfs(node.left);
        dfs(node.right)
    }
}

// n 叉树的前序遍历  dfs
function preorder(root){
    let res = [];
    _preorder(root);
    function _preorder(node){
        if(!node) return null;
        for(let i = 0; i < node.children.length;i++){
            _preorder(node.children[i]);
        }
    }
}

// 前序遍历  dfs
function preorder2(node){
   if(!node) return null;
   let queue = [node];
   let res = [];
   while(queue.length){
       let current = queue.pop();
       res.push(current.val);
       for(let i = current.children.length-1; i >= 0;i--){
           queue.push(current.children[i]);
       }
   }
   return res;
}

// 2 叉树
function BFS(root){
    let res = [];
    function bfs(layers){
        if(layers.length === 0) return null;
        let next = [];
        for(let i  = 0; i < layers.length;i++){
            let current = layers[i];
            if(current.left) next.push(current.left);
            if(current.right) next.push(current.right);
        }
        bfs(next);
    }
}

// n 叉树
function Nbfs(root){
    if(!root) return [];
    let res = [];
    function bfs(layers){
        if(layers.length === 0) return null;
        let next = [];
        for(let i = 0; i < layers.length;i++){
            let current = layers[i];
            if(current.children.length){
                for(let j = 0; j < current.children.length;j++){
                    next.push(current.children[j]);
                }
            }
        }
        bfs(next);
    }
    bfs([root]);
    return res;
}

// bfs 栈
function Nbfs2(root){
    if(!root) return [];
    let res = [];
    let queue = [root];
    while(queue.length){
        let len = queue.length;
        while(len--){
            let current = queue.shift();
            // 要做的事
            for(let j = 0; j < current.children.length;j++){
                queue.push(current.children[j]);
            }
        }
    }
    return res;
}

