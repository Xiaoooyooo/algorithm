export default function fn(nums: number[], target: number) {
  const len = nums.length;
  function findLeft() {
    let i = 0,
      j = len - 1;
    while (i <= j) {
      const mid = Math.floor((i + j) / 2);
      if (nums[mid] >= target) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    }
    return nums[i] === target ? i : -1;
  }
  function findRight() {
    let i = 0,
      j = len - 1;
    while (i <= j) {
      const mid = Math.floor((i + j) / 2);
      if (nums[mid] <= target) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
    return nums[i - 1] === target ? i - 1 : -1;
  }
  return [findLeft(), findRight()];
}
