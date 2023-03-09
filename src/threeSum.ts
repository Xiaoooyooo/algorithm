// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]]
// 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
// 你返回所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

// 指针法，
// function threeSum(nums) {
//   const len = nums.length;
//   nums.sort((a, b) => a - b);
//   const res = [];
//   for (let i = 0; i < len - 2; i++) {
//     if (nums[i] > 0) break;
//     // a去重
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     let l = i + 1,
//       r = len - 1;
//     while (l < r) {
//       const sum = nums[i] + nums[l] + nums[r];
//       if (sum < 0) {
//         l++;
//         continue;
//       }
//       if (sum > 0) {
//         r--;
//         continue;
//       }
//       res.push([nums[i], nums[l], nums[r]]);
//       // b c 去重
//       while (l < r && nums[l] === nums[++l]);
//       while (l < r && nums[r] === nums[--r]);
//     }
//   }
//   // process.stdout.end(JSON.stringify(res));
//   return res;
// }

// repeat
export default function threeSum(nums: number[]) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const res = [];
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1,
      k = len - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
        continue;
      }
      if (sum > 0) {
        k--;
        continue;
      }
      res.push([nums[i], nums[j], nums[k]]);
      while (j < k && nums[j] === nums[++j]);
      while (j < k && nums[k] === nums[--k]);
    }
  }
  return res;
}
