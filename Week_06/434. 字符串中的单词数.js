/*
    统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

    请注意，你可以假定字符串里不包括任何不可打印的字符。

    示例:

    输入: "Hello, my name is John"
    输出: 5
    解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/number-of-segments-in-a-string
 */ 
var countSegments = function(s) {
    let count = 0;
    let inSpace = true;
    let n = s.length;
    for(let i = 0; i < n; i++){
        if(s[i] === " "){
            inSpace = true;
        } else if(inSpace){
            inSpace = false;
            count++;
        }
    }
    return count;
};
