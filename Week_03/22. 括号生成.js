/**
 * 
 *  数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
    示例：
    输入：n = 3
    输出：[
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()"
        ]
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/generate-parentheses
    * 
 */
var generateParenthesis1 = function(n){
    let list = [];
    function _generateParenthesis(l,r,s){
        if(l > r) return;
        if(l === 0 && r === 0){
            list.push(s);
            return;  // 出口
        }
        l > 0 && _generateParenthesis(l-1,r,s+"(");
        r > 0 && _generateParenthesis(l,r-1,s+")");
    }
    _generateParenthesis(n,n,"");
    return list;
};

var generateParenthesis = function(n){
  let list = [];
  function _generateParenthesis(level,n,s){
      if(s.length === n){
          list.push(s);
          return null;
      }
      _generateParenthesis(level+1,n,s+"(");
      _generateParenthesis(level+1,n,s+")");
  }

  _generateParenthesis(0,2*n,"");
  return list;
};

console.log(generateParenthesis(3));;