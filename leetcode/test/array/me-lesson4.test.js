import grayCode from '../../code/array/me-lesson4'

test('grayCode:1', () => {
    expect(grayCode(2)).toEqual(['00', '01', '11', '10']);
//   expect(grayCode(2)).toEqual([0,1,3,2]);
})
 test('grayCode:2', () => {
    expect(grayCode(3)).toEqual(['000', '001', '011', '010', '110', '111', '101', '100']);
 })
