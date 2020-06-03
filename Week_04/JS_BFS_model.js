function deepSearch(){
    let visited = new Set();
    function bfs(nodes,start,end){
        if(nodes.length === 0) return;
        let next = [];
        for(let i = 0; i < nodes.length; i++){
            let current = nodes[i];
            visited.add(current);
            for(let j = 0; j < current.neighbors.length;j++){
                if(!next.includes(current.neighbors[j])){
                    next.push(current.neighbors[j]);
                }
            }
        }
        for(let i = 0; i < next.length;i++){
            if(visited.has(next[i])){
                next.splice(i,1);
                i--;
            }
        }
        bfs(next);
    }
} 