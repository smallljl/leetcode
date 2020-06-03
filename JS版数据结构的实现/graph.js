/*
 * @Author: your name
 * @Date: 2020-01-24 11:06:40
 * @LastEditTime: 2020-05-28 09:04:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \练习\graph.js
 */
function Graph(){
    this.vertexes = []; // 顶点
    this.edges = new Dictionay(); // 边
    /**
     * @description:添加顶点 
     * @param {type} 
     * @return: 
     */
    Graph.prototype.addVertex = function(v){
        this.vertexes.push(v);
        this.edges.set(v,[]);
    };

    /**
     * @description: 添加边 
     * @param {type} 
     * @return: 
     */
    Graph.prototype.addEdge = function(v1,v2){
        this.edges.get(v1).push(v2);
        this.edges.get(v2).push(v1);
    };

    /**
     * @description:打印 
     * @param {type} 
     * @return: 
     */
    Graph.prototype.toString = function(){
        // 1.定义字符串，保存最终的结果
        var resultString = "";
        // 2.遍历所有的顶点，以及顶点对应的边
        for(var i = 0; i < this.vertexes.length; i++){
            resultString += this.vertexes[i] + '->';
            var vEdges = this.edges.get(this.vertexes[i]);
            for(var j = 0; j < vEdges.length; j++){
                resultString += vEdges[j] + " ";
            }
            resultString += "\n";
        }        
        return resultString;
    };

    Graph.prototype.initializeColor = function(){
        var colors = [];
        for(var i = 0; i < this.vertexes.length; i++){
            colors[this.vertexes[i]] = "white";
        }
        return colors;
    };

    /**
     * @description:实现广度搜索优先 
     * @param {type} 
     * @return: 
     */
    Graph.prototype.bfs = function(initV, handler){
        var colors = this.initializeColor();
        var enque = new Queue();
        enque.enqueue(initV);
        while(!enque.isEmpty()){ 
            var v = enque.dequeue();
            var vList = this.edges.get(v);
            colors[v] = 'gray';
            for(var i = 0; i < vList.length;i++){
                var e = vList[i];
                if(colors[e] == 'white'){
                    colors[e] = 'gray';
                    enque.enqueue(e);
                }
            }
            colors[v] = 'black';
            handler(v);
        }
    };

    /**
     * @description: 深度搜索优先
     * @param {type} 
     * @return: 
     */
    Graph.prototype.dfs = function(initV,handler){
        var colors = this.initializeColor();
        this.dfsVisit(initV , colors , handler);
    };

    Graph.prototype.dfsVisit = function(v , colors,  handler){
        colors[v] = 'gray';
        handler(v);
        var vList =  this.edges.get(v);
        for(var i = 0; i < vList.length; i++){
            var e  = vList[i];
            if(colors[e] === "white"){
                this.dfsVisit(e, colors, handler);
            }
        }
        colors[v] = 'black';
    };
}