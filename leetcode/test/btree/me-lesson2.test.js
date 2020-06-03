import Tree, {Node} from "../../code/btree/me-lesson2";

test('Tree',()=>{
    let root = new Tree([2,1,3])
    expect(Tree.walk(root)).toBe(true);
})

test('Tree:4',()=>{
    let root = new Tree([5,1,4,null,null,3,6])
    console.log(root);
    expect(Tree.walk(root)).toBe(true);
})