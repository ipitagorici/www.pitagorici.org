"use client"
interface Array<T> {
/**
  * Divides an array in `block` parts, each having a size calculated as `array.length / block`.
  *
  * Ex:
  *
  * ```js
  * let arr = [1, 1, 1, 2, 2, 2, 3, 3, 3]
  * arr.partition(3) // [[1,1,1], [2,2,2], [3,3,3]]
  *
  * let arr = [1, 1, 1, 2, 2, 2, 3, 3]
  * arr.partition(3) // [[1,1,1], [2,2,2], [3,3]]
  * ```
  *
  * @param blocks the number of blocks required
  * @returns the divided array
  */
  partition(blocks: number): T[][];
}

Array.prototype.partition = function <T>(this: T[], blocks: number): T[][] {
  const result: T[][] = []
  let newPart: T[] = []
  const chunkSize = Math.ceil(this.length / blocks);
  this.forEach((el) => {
    newPart.push(el)
    if (newPart.length === chunkSize) {
      result.push(newPart);
      newPart = [];
    }
  })
  // If the last part did not get pushed, add it to the result
  if (newPart.length > 0) {
    result.push(newPart)
  }
  return result
};
