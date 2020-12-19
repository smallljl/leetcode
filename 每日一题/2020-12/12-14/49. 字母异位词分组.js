/**
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

    示例:

    输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
    输出:
    [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
    ]
 *  
 *   
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    for(let str of strs){
        let arr = Array.from(str);
        let key = arr.sort().toString();
        if(!map.has(key)){
            map.set(key,[]);
        } else {
            map.get(key).push(str);
        }
    }
    return Array.from(map.values());
};


/**
 * @param {string[]} strs  计数法
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let counts = [];
    const hashTable = {};
    for(let i = 0; i < strs.length; i++){
       const str = strs[i];
       counts = new Array(26).fill(0);
       for(let j = 0; j < str.length;j++){
           counts[str[j].charCodeAt() - "a".charCodeAt()]++;
       }
       if(hashTable[counts]){
          hashTable[counts].push(str);
       }  else {
          hashTable[counts] = [str]
       }
      
    }
    return Object.values(hashTable);
 };