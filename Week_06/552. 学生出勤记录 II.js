/*
 *
 *  给定一个正整数 n，返回长度为 n 的所有可被视为可奖励的出勤记录的数量。 答案可能非常大，你只需返回结果mod 109 + 7的值。

    学生出勤记录是只包含以下三个字符的字符串：

    'A' : Absent，缺勤
    'L' : Late，迟到
    'P' : Present，到场
    如果记录不包含多于一个'A'（缺勤）或超过两个连续的'L'（迟到），则该记录被视为可奖励的。

    示例 1:

    输入: n = 2
    输出: 8 
    解释：
    有8个长度为2的记录将被视为可奖励：
    "PP" , "AP", "PA", "LP", "PL", "AL", "LA", "LL"
    只有"AA"不会被视为可奖励，因为缺勤次数超过一次。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/student-attendance-record-ii
 * 
 *
 */ 


/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
   let ans = [];
   let arr = ["P","A","L"]
   function _check(str){
      let count = 0;
      for(let i = 0; i < str.length && count < 2; i++){
         if(str[i] === "A"){
            count++;
         }
      }
      return str.length > 0 && count < 2 && str.indexOf("LLL") < 0; 
   }

   function _checkRecord(level,str){
      if(level === n  ){
         if(_check(str))
            ans.push(str);
         return;
      }
      for(let i = 0; i < arr.length; i++){
         let item = arr[i];
         // 不能有连续两个L
         _checkRecord(level+1,str+item);
      }
   }
   _checkRecord(0,"");
   return ans.length;
};

/**
 * 剪枝
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
   let ans = [];
   let arr = ["P","A","L"]
   function _checkRecord(level,Acount,Lcount,str){
      if(level === n){
         ans.push(str);
         return;
      }
      for(let i = 0; i < arr.length; i++){
         let item = arr[i];
         if(item === "A"){
            if(Acount === 1) continue
            _checkRecord(level+1,Acount+1,0,str+item);
         } else if(item === "P")
            _checkRecord(level+1,Acount,0,str+item);
         else {
            if(Lcount === 2) continue;
            _checkRecord(level+1,Acount,1,str+item);
         }
      }
   }
   _checkRecord(0,0,0,"");
   return ans.length;
};