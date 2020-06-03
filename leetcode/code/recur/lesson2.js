/**
 * 串联所有单词的子串

 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

  

 示例 1：

 输入：
 s = "barfoothefoobarman",
 words = ["foo","bar"]
 输出：[0,9]
 解释：
 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
 输出的顺序不重要, [9,0] 也是有效答案。
 示例 2：

 输入：
 s = "wordgoodgoodgoodbestword",
 words = ["word","good","best","word"]
 输出：[]
 */

export default (str, words) => {
  // 保存结果
  let result = []
  // 记录数组的长度，做边界条件计算
  let num = words.length
  // 递归函数体
  let range = (r, _arr) => {
    if (r.length === num) {
      result.push(r)
    } else {
      _arr.forEach((item, idx) => {
        let tmp = [].concat(_arr)
        tmp.splice(idx, 1)
        range(r.concat(item), tmp)
      })
    }
  };
  range([], words);
  // [0, 9, -1] filter 之后[0,9]
  return result.map(item => {
    return str.indexOf(item.join(''))
  }).filter(item => item !== -1).sort()
}
