import Heap from "../../code/heap/me-lesson1";
//
// test('Heap:1', () => {
//     let heap = new Heap([1, 10, 9, 5, 3, 11])
//     expect(heap.sort()).toEqual([1, 3, 5, 9, 10, 11])
// })

test('Heap:2',()=>{
    let heap = new Heap('CHCAA');
    expect(heap.toString()).toMatch(/CCAAH|AACCH/);
})