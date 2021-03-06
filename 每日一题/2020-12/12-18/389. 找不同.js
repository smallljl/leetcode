/**
 *  给定两个字符串 s 和 t，它们只包含小写字母。

    字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

    请找出在 t 中被添加的字母。

     

    示例 1：

    输入：s = "abcd", t = "abcde"
    输出："e"
    解释：'e' 是那个被添加的字母。
    示例 2：

    输入：s = "", t = "y"
    输出："y"
    示例 3：

    输入：s = "a", t = "aa"
    输出："a"
    示例 4：

    输入：s = "ae", t = "aea"
    输出："a"

 * 
 * 
 */

 /**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
/**
 * 思路:计算找差值
 */
var findTheDifference = function(s, t) {
    let as = 0, at = 0;
    for(let i = 0; i < s.length; i++){
        as += s[i].charCodeAt();
    }
    for(let i = 0; i < t.length; i++){
        at += t[i].charCodeAt();
    }
    return String.fromCharCode(at - as);
};

/**
 * 思路:计数
 */
var findTheDifference = function(s, t) {
    const cnt = new Array(26).fill(0);
    for(const ch of s){
        cnt[ch.charCodeAt() - "a".charCodeAt()]++;
    }
    for(const ch of t){
        cnt[ch.charCodeAt() - "a".charCodeAt()]--;
        if(cnt[ch.charCodeAt() - "a".charCodeAt()] < 0){
            return ch;
        }
    }
    return " ";
};

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const map = new Map();
    for(let i = 0; i < s.length; i++) {
        const val = map.get(s[i]);
        map.set(s[i], val === undefined ? 1 : val + 1);
    }
    for(let i = 0; i < t.length; i++) {
        const val = map.get(t[i]);
        if(val === 0 || val === undefined) {
            return t[i];
        } else {
            map.set(t[i], val - 1);
        }
    }
};

var findTheDifference = function(s, t) {
    let ret = 0;
    for (const ch of s) {
        ret ^= ch.charCodeAt();  // 相同变为0
    }
    for (const ch of t) {
        ret ^= ch.charCodeAt();
    }
    return String.fromCharCode(ret);
};