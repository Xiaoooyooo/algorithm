// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。
// 请你从 nums 中选出三个整数，使它们的和与 target 最接近。
// 返回这三个数的和。
// 假定每组输入只存在恰好一个解。

// function threeSumClosest(nums, target) {
//   const len = nums.length;
//   nums.sort((a, b) => a - b);
//   let min = Infinity, res;
//   for (let i = 0; i < len - 2; i++) {
//     for (let j = i + 1; j < len - 1; j++) {
//       for (let k = j + 1; k < len; k++) {
//         const sum = nums[i] + nums[j] + nums[k];
//         const d = Math.abs(target - sum);
//         // console.log(nums[i], nums[j], nums[k], d)
//         if (d < min) {
//           min = d;
//           res = sum;
//         }
//       }
//     }
//   }
//   // console.log(res)
//   return res;
// }

// 排序 遍历 双指针
export default function threeSumClosest(nums: number[], target: number) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let min = Infinity,
    res;
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1,
      k = len - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      const d = Math.abs(target - sum);
      // console.log(nums[i], nums[j], nums[k], sum)
      // if (d === 0) {
      //   return sum;
      // }
      if (d < min) {
        min = d;
        res = sum;
      }
      if (sum < target) {
        j++;
        continue;
      }
      if (sum > target) {
        k--;
        continue;
      }
      j++;
      k--;
    }
  }
  return res;
}
