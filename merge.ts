export function merge(collection1: number[], collection2: number[]): number[] {
  const mergeNum: number[] = [];
  let i = 0;
  let j = 0;
  while (i < collection1.length && j < collection2.length) {
    if (collection1[i] < collection2[j]) {
      mergeNum.push(collection1[i]);
      i++;
    } else {
      mergeNum.push(collection2[j]);
      j++;
    }
  }
  while (i < collection1.length) {
    mergeNum.push(collection1[i]);
    i++;
  }
  while (j < collection2.length) {
    mergeNum.push(collection2[j]);
    j++;
  }
  return mergeNum;
}
