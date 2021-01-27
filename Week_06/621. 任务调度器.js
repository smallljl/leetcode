/*
 *
 *  给定一个用字符数组表示的 CPU 需要执行的任务列表。其中包含使用大写的 A - Z 字母表示的26 种不同种类的任务。
 *  任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。CPU 在任何一个单位时间内都可以执行一个任务，或者在待命状态。

    然而，两个相同种类的任务之间必须有长度为 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。

    你需要计算完成所有任务所需要的最短时间。

    示例 ：

    输入：tasks = ["A","A","A","B","B","B"], n = 2
    输出：8
    解释：A -> B -> (待命) -> A -> B -> (待命) -> A -> B.
        在本示例中，两个相同类型任务之间必须间隔长度为 n = 2 的冷却时间，而执行一个任务只需要一个单位时间，所以中间出现了（待命）状态。 

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/task-scheduler
 * 
 * 
 * 
 */ 
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // 得到 任务=> 出现次数 的 map
    let mapKeyCount = new Map();
    tasks.forEach((t)=>{
        let m = (mapKeyCount.get(t) || 0) + 1;
        mapKeyCount.set(t,m);
    });

    // 按个数倒序
    let sorted = Array.from(mapKeyCount.values()).sort((a,b)=> b-a);

    let countMax = sorted.lastIndexOf(sorted[0]);  // 最大数量的个数
    //  总排队时间 = (桶个数 - 1) * (n + 1) + 最后一桶的任务数
    return Math.max((sorted[0] - 1) * (n + 1) + countMax + 1,tasks.length);

};