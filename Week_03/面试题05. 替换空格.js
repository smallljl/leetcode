/**
 * 
 *  请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
    示例 1：
    输入：s = "We are happy."
    输出："We%20are%20happy."
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof
 * 
 * 
 */
var replaceSpace1 = function(s){
    let arr = [];
    for(let i = 0,len = s.length; i < len;i++)
        s[i] === " " ? arr[i] = "%20":arr[i] = s[i];
    return arr.join("");
}