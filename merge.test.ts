import { merge } from './merge';

describe('merge function', () => {
  it('should merge two empty arrays', () => {
    expect(merge([], [])).toEqual([]);
  });

  it('should merge an empty array with a non-empty array', () => {
    expect(merge([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should merge a non-empty array with an empty array', () => {
    expect(merge([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it('should merge two non-empty arrays', () => {
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should merge two non-empty arrays with repeated values', () => {
    expect(merge([1, 2, 2, 3, 5], [2, 4, 5, 6])).toEqual([1, 2, 2, 2, 3, 4, 5, 5, 6]);
  });
});
