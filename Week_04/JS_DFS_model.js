function f1(root){
    let visited = new Set();
    function dfs(node){
        if(!node) return;
        if(visited.has(node)) return;
        visited.add(node);
        for(let i = 0; i < node.neighbors.length;i++)
            dfs(node.neighbors[i]);
    }
    dfs(root);
}

