import sort from '../../code/sort/me-lesson4'

test("input1:",()=>{
    expect(sort([1,2,0])).toBe(3);
});

test("input2:",()=>{
    expect(sort([1,2,0,3,4])).toBe(5);
});