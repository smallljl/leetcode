/**
 *  
 * 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。
 * 需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

   示例 1：

   输入：s = "bcabc"
   输出："abc"
   示例 2：

   输入：s = "cbacdcbc"
   输出："acdb"

 * 
 */

 /**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
   let n = s.length;
   if(n === 0) return s;
   let res = [];
   let lastOccurrence = new Array(26);
   let used = new Array(26);
   for(let i = 0; i < n; i ++){
       lastOccurrence[s[i].charCodeAt() - 97] = i;
   }
   console.log(lastOccurrence)
   for(let i = 0; i < n; i++){
       let cur = s[i];
       if(used[cur.charCodeAt() - 97]) continue;
       while(res.length > 0 && cur < res[res.length-1] &&
           lastOccurrence[res[res.length-1].charCodeAt() -97] > i
       ){
           used[res[res.length-1].charCodeAt() - 97] = false;
           res.pop();
       }
       res.push(cur);
       used[cur.charCodeAt() - 97] = true;
   }

   return res.join("");
};