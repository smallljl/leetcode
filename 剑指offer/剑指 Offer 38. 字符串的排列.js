/**
 *  输入一个字符串，打印出该字符串中字符的所有排列。

    你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

    示例:

    输入：s = "abc"
    输出：["abc","acb","bac","bca","cab","cba"]

 * 
 * 
 */

function a(s){
    const res = new Set()
    const visit = {}
    function dfs(path) {
        if(path.length === s.length) return res.add(path)
        for (let i = 0; i < s.length; i++) {
            if (visit[i]) continue
            visit[i] = true
            dfs(path + s[i])
            visit[i] = false
        }
    }
    dfs('')
    return [...res]
}
 
var permutation2 = function(s) {
    let list = [];
    let sublist = [];
    let nums = s.split("");
    let len = nums.length;
    nums.sort((a,b)=>a-b);
    let used = [];
    function dfs(sublist,index,used){
        if(index === len){
            list.push(sublist.slice(0).join(""));
            return;
        }
        for(let i = 0; i < len;i++){
            if(used[i]) continue;
            // 剪枝条件, i > 0 是为保证num[i-1] 有意义
            // used[i-1] 是因为 nums[i-1] 在回退的过程中刚刚被撤销选择   used[i-1] 为false 表示上一个数已经使用了
            if(i > 0 && nums[i] === nums[i-1] && used[i-1] === false)
                continue;
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
