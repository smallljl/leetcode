/**
 *      给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

        字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

        说明：

        字母异位词指字母相同，但排列不同的字符串。
        不考虑答案输出的顺序。
        示例 1:

        输入:
        s: "cbaebabacd" p: "abc"

        输出:
        [0, 6]

        解释:
        起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
        起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
         示例 2:

        输入:
        s: "abab" p: "ab"

        输出:
        [0, 1, 2]

        解释:
        起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
        起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
        起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。

        来源：力扣（LeetCode）
        链接：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string
 * 
 * 
 * 
 */
let s = "cbaebabacd", p="abc";

var isAnagram = function(s, t) {
   if (s === "" && t === "") return true
   if (s.length > t.length) return false
   let hashMap = new Map()
   for(let i = 0; i < s.length; i++) {
       if (!hashMap.has(s[i])) {
           hashMap.set(s[i], 1)
       } else {
           hashMap.set(s[i], hashMap.get(s[i])+1)
       }
   }
   for(let i = 0; i < t.length; i++) {
       if(!hashMap.has(t[i])){
        return false
     }
       if(hashMap.get(t[i]) > 0){
           hashMap.set(t[i], hashMap.get(t[i])-1)
       } else {
           return false
       }
   }
   return true
};

var findAnagrams = function(s, p) {
       let ans = [];
       for(let i = 0; i < s.length;i++){
          let flag = true;
          for(let j = 0; j < p.length;j++){
             if(s[i] !== s[j]){
                flag = false;
             }
          }
          if(flag){
              ans.push(i);
          }
       }
       return ans;
};
console.log(findAnagrams(s,p));