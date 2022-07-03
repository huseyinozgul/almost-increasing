const hasAlmostSequence = require("../src/hasAlmostSequence");

describe('Starting cases', () => {
    test('Case [1, 3, 2, 1] expected false', () => {
        const result = hasAlmostSequence([1, 3, 2, 1]);
        expect(result).toEqual(false);
    });
    test('Case [10, 1, 2, 3, 4, 5] expected true', () => {
        const result = hasAlmostSequence([10, 1, 2, 3, 4, 5]);
        expect(result).toEqual(true);
    });
    test('Case [1, 2, 3, 4, 5, 3, 5, 6] expected false', () => {
        const result = hasAlmostSequence([1, 2, 3, 4, 5, 3, 5, 6]);
        expect(result).toEqual(false);
    });
    test('Case [1, 1] expected true', () => {
        const result = hasAlmostSequence([1, 1]);
        expect(result).toEqual(true);
    });
    test('Case [1, 2, 5, 5, 5] expected false', () => {
        const result = hasAlmostSequence([1, 2, 5, 5, 5]);
        expect(result).toEqual(false);
    });
    test('Case [123, -17, -5, 1, 2, 3, 12, 43, 45] expected true', () => {
        const result = hasAlmostSequence([123, -17, -5, 1, 2, 3, 12, 43, 45]);
        expect(result).toEqual(true);
    });

});