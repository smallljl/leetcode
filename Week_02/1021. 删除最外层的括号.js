/*有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。

如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-outermost-parentheses*/
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses1 = function(S) {
    let count = 0;
    let arr = [];
    for(let i = 0; i < S.length; i++){
        if(S[i]=== ")"){
            count--;
        }
        if(count >=1){
            arr.push(S[i]);
        }
        if(S[i] === "("){
            count++;
        }
    }
    return arr.join("");
};

var removeOuterParentheses2 = function(S) {
    let sArr = [], sLen = 0, result = []
    for(let i = 0; i < S.length; i++){
        if(S[i] === '('){
            sLen++
        }else{
            sLen--
        }
        sArr.push(S[i])
        if(sLen === 0){
            sArr.shift()
            sArr.pop()
            result.push(sArr.join(''))
            sArr = []
        }
    }
    return result.join('')
};

var removeOuterParentheses3 = function(S){
    let count = 0;
    let str = "";
    for(let i = 0; i < S.length;i++){
        if(S[i] === "(" && count === 0){
            count++;
            continue;
        }
        if(S[i]=== ")" && count === 1){
            count--;
            continue;
        }
        if(S[i] === "(" && count !== 0){
            str += S[i];
            count ++;
            continue;
        }
        if(S[i] === ")" && count !== 0){
            str += S[i];
            count--;
            continue;
        }
    }
    return str;
}


// 用两个数字统计
var removeOuterParentheses6 = function(S){
    var child = '';
    var right = 0;
    var left = 0;
    var contents = '';
    for(var i = 0; i<S.length; i ++){
        if(S[i]=== '(') { right++ }
        if(S[i]=== ')') { left++ }
        contents+=S[i];
        if (right === left) {
            right = 0;
            left = 0;
            child +=contents.slice(1,-1);   // 截取字符串的两边
            contents = ''
        }
    }
    return child
}


// 栈方法
var removeOuterParentheses5 = function(S){
    let stack = [];
    let res = "";
    for(let i = 0; i < S.length;i++){
        if(S[i] === "("){
            if(stack.length) res+=S[i];
            stack.push(S[i]);
        }else{
            stack.pop();
            if(stack.length) res+=S[i];
        }
    }
};

// 计数器
var removeOuterParentheses7 = function(S){
    let counter = 0;
    let result = '';
    for (let i = 0; i < S.length; i++) {
        if ((S[i] === '(' && ++counter !== 1) || (S[i] === ')' && --counter !== 0)) {
            result += S[i];
        }
    }
    return result;
}

var removeOuterParentheses8 = function(S) {
    let level = 0;
    let res = "";
    for (let i=0; i < S.length; ++i) {
        if (S[i-1] === "(" && S[i] === "(") {
            level++;
        } else if (S[i-1] === ")" && S[i] === ")") {
            level--;
        }
        if (level > 0) {
            res += S[i];
        }
    }
    return res;
};

var removeOuterParentheses = function(S) {
    let counter = 0;
    let breakPoint = 0;
    let res = '';
    for (let i = 0; i < S.length; i++) {
        counter += S[i] === '(' ? 1 : -1;
        if (counter === 0) {
            res += S.slice(breakPoint + 1, i);
            breakPoint = i + 1;
        }
    }
    return res;
};