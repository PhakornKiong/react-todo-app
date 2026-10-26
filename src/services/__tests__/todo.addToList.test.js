const { addToList } = require('../../services/todo');

// Note: the project uses ES module `export` syntax in source. This test file
// is intended for the repo's test runner (react-scripts/jest). It asserts the
// normalization behavior of addToList.

describe('addToList', () => {
  test('appends fireworks emoji when missing and trims input', () => {
    const list = [];
    const res = addToList(list, { text: '  New Task  ' });
    const added = res[res.length - 1];
    expect(added.text.endsWith('🎆')).toBe(true);
    expect(added.text).toBe('New Task 🎆');
  });

  test('does not duplicate emoji if already present', () => {
    const list = [];
    const res = addToList(list, { text: 'Already 🎆' });
    const added = res[res.length - 1];
    expect(added.text).toBe('Already 🎆');
  });

  test('preserves other fields from data', () => {
    const list = [];
    const res = addToList(list, { text: 'X', completed: false });
    const added = res[res.length - 1];
    expect(added.completed).toBe(false);
    expect(added.text.endsWith('🎆')).toBe(true);
  });
});
