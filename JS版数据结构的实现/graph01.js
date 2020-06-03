/*
 * @Author: your name
 * @Date: 2020-01-25 17:21:44
 * @LastEditTime : 2020-01-25 19:19:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \练习\graph01.js
 */
function Graph(){
    this.vertexes = [];
    this.edges = new Dictionay();

    /**
     *
     * @param v
     */
    Graph.prototype.addVertex = function(v){
        this.vertexes.push(v);        
        this.edges.set(v,[]);
    };

    /**
     *
     * @param v1
     * @param v2
     */
    Graph.prototype.addEdge = function(v1,v2){
        this.edges.get(v1).push(v2);
        this.edges.get(v2).push(v1);
    };

    /**
     *
     * @returns {string}
     */
    Graph.prototype.toString = function(){
        var resultString = "";
        for(var i = 0; i < this.vertexes.length ; i++){
            resultString += this.vertexes[i] + " -> ";
            var vEdges = this.edges.get(this.vertexes[i]);
            for(var j = 0; j < vEdges.length; j++){
                resultString += vEdges[j] + " ";
            }
            resultString += "\n";
        }
        return resultString;
    };

    /**
     *
     * @returns {[]}
     */
    Graph.prototype.initializeColor = function(){
        var colors = [];
        for(var i = 0; i < this.vertexes.length; i++){
            colors[this.vertexes[i]] = "white";
        }
        return colors;
    };

    /**
     *
     * @param initV
     * @param handler
     */
    Graph.prototype.bfs = function(initV,handler){
        var colors = this.initializeColor();
        var queue = new Queue();
        queue.enqueue(initV);
        while(!queue.isEmpty()){
            var v = queue.dequeue();
            var vList = this.edges.get(v);
            colors[v] = 'gray';
            for(var i = 0; i < vList.length; i++){
                var e  = vList[i];
                if(colors[e] === 'white'){
                    colors[e] = 'gray';
                    queue.enqueue(e);
                }
            }
            handler(v);
            colors[v] = 'black';
        }
    };

    /**
     *
     * @param initV
     * @param handler
     */
    Graph.prototype.dfs = function(initV, handler){
        var colors = this.initializeColor();
        this.dfsVisit(this.vertexes[0],colors,handler);
    };

    /**
     *
     * @param v
     * @param colors
     * @param handler
     */
    Graph.prototype.dfsVisit = function(v, colors, handler){
        colors[v] = 'gray';
        handler(v);
        var vList = this.edges.get(v);
        for(var i = 0; i < vList.length; i++){
            var e = vList[i];
            if(colors[e] === 'white'){
                this.dfsVisit(e , colors, handler);
            }
        }
        colors[v] = 'black';
    }

}