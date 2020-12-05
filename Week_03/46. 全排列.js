/*
*
*   给定一个 没有重复 数字的序列，返回其所有可能的全排列。
    示例:
    输入: [1,2,3]
    输出:
    [
        [1,2,3],
        [1,3,2],
        [2,1,3],
        [2,3,1],
        [3,1,2],
        [3,2,1]
    ]
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/permutations
*
*
*
*/

/**
 * 深度搜索优先
 */
var permute = function(nums) {
    let list = [];
    let sublist = [];
    let len = nums.length;
    let used = [];
    function dfs(sublist,index,used){
        if(index === len){
            list.push(sublist.slice(0));
            return;
        }
        for(let i = 0; i < len;i++){
            if(used[i]){
                continue;
            }
            sublist.push(nums[i]);
            used[i] = true;
            dfs(sublist,index+1,used);
            sublist.pop();
            used[i] = false;
        }
    }
    dfs(sublist,0,used);
    return list;
};