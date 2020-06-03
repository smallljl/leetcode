import words from '../../code/recur/me-lesson2'

test('words', () => {
    expect(words('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9])
})
test('words:2', () => {
    expect(words('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])).toEqual([])
})