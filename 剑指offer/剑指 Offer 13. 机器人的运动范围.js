/**

    地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
    一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格
    （不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，
    因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

    示例 1：

    输入：m = 2, n = 3, k = 1
    输出：3
    示例 2：

    输入：m = 3, n = 1, k = 0
    输出：1


 */

 /**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
     if(!m || !n) return 0;
    let queue = [[0,0]];
    // 已经走过的坐标
    let st = new Array(m);
    for(let i = 0; i < m; i++){
        st[i] = new Array(n).fill(false);
    };
    let res = 0;
    while(queue.length){
        let cur = queue.shift();
        if(getSum(cur[0]) + getSum(cur[1]) > k || st[cur[0]][cur[1]]) continue;
        res++;
        st[cur[0]][cur[1]] = true;
        // 走过的格子就不再纳入统计
        let dx = [-1,0,1,0], dy = [0,-1,0,1];
        for(let i = 0; i < 4; i++){
            let x1 = cur[0] + dx[i], y1 = cur[1] + dy[i];
            if(x1 >= 0 && x1 < m && y1 >=0 && y1 < n){
                queue.push([x1,y1]);
            }
        }
    }
    return res;
};


function getSum(num){
    let answer = 0;
    while(num) {
        answer += num % 10;
        num = Math.floor(num / 10);
    }
    return answer;
}