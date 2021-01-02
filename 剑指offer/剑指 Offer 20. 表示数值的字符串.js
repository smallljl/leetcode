/**
 *  请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，
 * 但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。
 * 
 */

 /**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    let i = 0, j = s.length-1;
    while(i <= j && s[i] === " ") i++;
    while(i <= j && s[j] === " ") j--;
    if(i > j) return false;
    s = s.substr(i,j-i+1);
    
    if(s[0] === "+" || s[0] === "-") s = s.substr(1);
    // 单独的.  + -
    if(!s.length || (s[0] === "." && s.length === 1)) return false;
    let dot = 0, e = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] >= "0" && s[i] <= "9");
        else if(s[i] === "."){
            dot++;
            // e 的前后为整数
            if(dot > 1 || e){  //  多个点 或者 点的前面有e
                return false;  // 123.312.312   123e231.213
            }
        } else if(s[i] === "e" || s[i] === "E"){
            e++;
            // e的前面为空  || e的后面为空 || e > 1 || .e123
            if(!i || i + 1 === s.length || e > 1 || (s[i-1] === "." && i === 1)) return false;   // e12312  12323e  231e1312e
            // e的后面为 + -
            if(s[i+1] === "+" || s[i+1] === "-"){
                if(i+2 === s.length) return false;  // 123e+   231e-
                i++;  // 吃掉 + -
            }
        } else return false;
    }
    return true;
};