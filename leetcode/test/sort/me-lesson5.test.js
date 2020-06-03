import sort from '../../code/sort/me-lesson5'

test("input1:",()=>{
    expect(sort([4,2,6,7,3])).toEqual([2,3,4,6,7]);
    expect(sort([4,2,6,7,3,8,3,4,68,4])).toEqual([2,3,3,4,4,4,6,7,8,68]);
});