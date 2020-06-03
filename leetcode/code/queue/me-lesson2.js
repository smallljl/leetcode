export default (task, n) => {
    let q = '';
    let Q = {};
    task.forEach(item=>{
        if(Q[item]){
            Q[item]++
        } else {
            Q[item] = 1;
        }
    });
    while (1){
        let keys = Object.keys(Q);
        if (!keys[0]){
            break;
        }
        // n+1 为一组
        let tmp = [];
        for(let i = 0;i <= n ;i ++){
            let max = 0;
            let key;
            let pos;
            // 从所有的任务重找到未处理最大的优先安排
            keys.forEach((item,idx)=>{
                if(Q[item] > max){
                    max = Q[item];
                    key = item;
                    pos = idx;
                }
            });
            if(key){
                tmp.push(key);
                keys.splice(pos,1);
                Q[key]--;
                if(Q[key] < 1){
                    delete Q[key];
                }
            }else{
                break;
            }
        }
        q += tmp.join('').padEnd(n+1,'-');
    }
    return q.length;
}