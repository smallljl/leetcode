import Tree from '../../code/btree/me-lesson1';

test('Tree1:1',()=>{
    let root = new Tree([1,2,2,3,4,4,3]);
    console.log(root);
    expect(Tree.isSymmetry(root)).toBe(true)
});

