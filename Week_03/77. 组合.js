/*
    给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
    示例:
    输入: n = 4, k = 2
    输出:
    [
        [2,4],
        [3,4],
        [2,3],
        [1,2],
        [1,3],
        [1,4],
    ]
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/combinations
 */
var combine = function(n, k) {
    let list = [];
    let subList = [];
    function _combine(start,subList){
         if(subList.length === k){
            console.log(subList);
            list.push(subList.slice(0));
            return;
         }
         for(let i = start; i <= n; i++){
            subList.push(i);
            _combine(+1,subList);
            subList.poip();
         }
    }
    _combine(1,subList);
    return list;
 };


var combine1 = function(n,k){
    let list = [];
    let sublist = [];
    function dfs(sublist,index){
        if(index > n){
            sublist.length === k && list.push(sublist.slice(0));
            return;
        }
        dfs(sublist,index+1);  // 不选
        sublist.push(index);
        dfs(sublist,index+1); // 选
        sublist.pop();
    }
    dfs(sublist,1);
    return list;
};

 combine(3,2)