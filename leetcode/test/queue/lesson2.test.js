import cpu from '../../code/queue/lesson2'

test('cpu:1', () => {
  let tasks = ['A', 'A', 'A', 'A', 'A', 'A']
  let n = 2
  expect(cpu(tasks, n)).toBe(8)
})
// test('cpu:2', () => {
//   let tasks = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D']
//   let n = 2
//   expect(cpu(tasks, n)).toBe(8)
// })
