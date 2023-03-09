export default function mergeSort(
  nums: number[],
  start = 0,
  end = nums.length - 1
) {
  const dis = end - start;
  if (dis <= 0) return nums;
  if (dis === 1) {
    if (nums[start] > nums[end]) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
    }
    return nums;
  }
  const mid = Math.floor(start + dis / 2);
  mergeSort(nums, start, mid - 1);
  mergeSort(nums, mid, end);
  const len = dis + 1,
    temp = Array(len);
  let i = start,
    j = mid,
    c = 0;
  while (c < len) {
    if (i < mid && j <= end) {
      if (nums[i] < nums[j]) {
        temp[c++] = nums[i++];
      } else {
        temp[c++] = nums[j++];
      }
    } else if (i >= mid) {
      temp[c++] = nums[j++];
    } else if (j > end) {
      temp[c++] = nums[i++];
    }
  }
  for (let k = start; k <= end; k++) {
    nums[k] = temp[k - start];
  }
  return nums;
}
