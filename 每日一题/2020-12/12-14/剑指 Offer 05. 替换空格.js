/**
 *  请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

    示例 1：

    输入：s = "We are happy."
    输出："We%20are%20happy."
 * 
 * 
 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let len = s.length;
    let arr = [];
    let size = 0;
    for(let i = 0; i < len; i++){
        let c = s[i];
        if(c === " "){
            arr[size++] = "%20";
        } else {
            arr[size++] = c;
        }
    }
    return arr.join("");
};