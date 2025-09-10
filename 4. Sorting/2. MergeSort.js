// ✅ Logical Revision Bullets – Merge Sort
// Use if (low < high) in mergeSort() to stop recursion at single-element subarrays (base case).
// Calculate mid = Math.floor((low + high) / 2) to get integer index for splitting.
// Use while (left <= mid && right <= high) in merge() to compare elements from both halves until one side is exhausted.
// Use separate while (left <= mid) and while (right <= high) to copy remaining elements after main comparison loop.
// Use a temporary array temp[] to store merged results safely without overwriting arr[] during merge.
// Copy elements back to arr[low..high] using arr[i] = temp[i - low] to correctly map indices.
// Do not use a loop (like while) in mergeSort() because recursion naturally divides the array into smaller problems.
// Time complexity is O(n log n), space complexity is O(n), and the sort is stable.

const arr = [1, 8, 9, 4, 7, 5, 6];

function merge(arr, low, mid, high) {
  const temp = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mergeSort(arr, low, high) {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
}

mergeSort(arr, 0, arr.length - 1);
console.log(arr);
