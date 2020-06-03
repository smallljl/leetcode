/**
 *      您需要在二叉树的每一行中找到最大的值。

        示例：

        输入:

         1
        / \
       3   2
      / \   \
     5   3   9

 输出: [1, 3, 9]

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 *
 */
var largestValues = function(root) {
    if(!root) return [];
    let list = [];
    function _bfs(levels){
        if(levels.length === 0) return;
        let max = getMax(levels);
        list.push(max);
        let nextLevels = [];
        for(let i = 0; i < levels.length;i++){
            let item = levels[i];
            item.left && nextLevels.push(item.left);
            item.right && nextLevels.push(item.right);
        }
        _bfs(nextLevels);
        function getMax(levels){
            let max = levels[0].val;
            for(let i = 1; i < levels.length;i++){
                if(levels[i].val > max) max = levels[i].val;
            }
            return max;
        }
    }
    _bfs([root]);
    return list;
};