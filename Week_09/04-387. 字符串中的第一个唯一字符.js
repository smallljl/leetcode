/**
 *  给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

    示例：

    s = "leetcode"
    返回 0

    s = "loveleetcode"
    返回 2

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/first-unique-character-in-a-string
 * 
 * 
 */
var firstUniqChar = function(s) {
   for(let i = 0; i < s.length; i++)
       if(s.indexOf(s[i]) === s.lastIndexOf(s[i]))
           return i;
   return -1;
};

let gen = (s)=>{
    let hash = {} , map = new Map();
    for(let i = 0; i < s.length;i++){
        if(!hash[s[i]]){
            hash[s[i]] = 1;
            map.set(s[i],i);
        } else 
            map.delete(s[i]);
    }
    if(map.size === 0) return -1;
    return map.values().next().value;
}