// const playedMusic = [
//   {
//     name: "radiohead",
//     playCount: 156,
//   },
//   {
//     name: "kishor kumar",
//     playCount: 141,
//   },
//   {
//     name: "The Black Keys",
//     playCount: 35,
//   },
//   {
//     name: "Neutral Milk Hotel",
//     playCount: 94,
//   },
//   {
//     name: "Beck",
//     playCount: 88,
//   },
//   {
//     name: "The Stroke",
//     playCount: 61,
//   },
//   {
//     name: "Wilco",
//     playCount: 194,
//   },
// ];

function findSmallest(arr: number[]): number {
  let smallest = arr[0];
  let smallest_index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

function selectionSort(arr: number[]) {
  let newArr: number[] = [];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
  }

  return newArr;
}

const nums = [5, 3, 6, 2, 10];
console.log(nums);
const sortedNums = selectionSort(nums);
console.log(sortedNums);
