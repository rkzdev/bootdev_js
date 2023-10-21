let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * @param {number[]} items
 * @param {number | null } item
 */
function binarySearch(items: number[], item: number) {
  let low = 0;
  let high = Math.floor(items.length);
  let count = 1;

  while (low <= high) {
    const mid = low + high;
    const guess = items[mid - 1];
    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    console.log(count);
    count++;
  }
  return null;
}

console.log(binarySearch(data, 7));
