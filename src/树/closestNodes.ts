// https://leetcode.cn/problems/closest-nodes-queries-in-a-binary-search-tree/description/
// 给你一个 二叉搜索树 的根节点 root ，和一个由正整数组成、长度为 n 的数组 queries 。
// 请你找出一个长度为 n 的 二维 答案数组 answer ，其中 answer[i] = [mini, maxi] ：
// mini 是树中小于等于 queries[i] 的 最大值 。如果不存在这样的值，则使用 -1 代替。
// maxi 是树中大于等于 queries[i] 的 最小值 。如果不存在这样的值，则使用 -1 代替。
// 返回数组 answer 。

export default function closestNodes(
  root: TreeNode | null,
  queries: number[]
): number[][] {
  const nums = [];
  function dfs(node: TreeNode) {
    if (node === null) {
      return;
    }
    dfs(node.left);
    nums.push(node.val);
    dfs(node.right);
  }
  dfs(root);
  const len = queries.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    let left = 0,
      right = nums.length - 1;
    // 二分查找小于等于 queries[i] 的数
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > queries[i]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    const query = [-1, -1];
    if (nums[right] <= queries[i]) {
      query[0] = nums[right];
    }

    if (nums[right] >= queries[i]) {
      query[1] = nums[right];
    } else if (right + 1 < nums.length) {
      query[1] = nums[right + 1];
    }
    res.push(query);
  }

  return res;
}

// export default function closestNodes(
//   root: TreeNode | null,
//   queries: number[]
// ): number[][] {
//   const len = queries.length;
//   const res = [];
//   for (let i = 0; i < len; i++) {
//     let curr = root;
//     const query = [-1, -1];
//     while (curr) {
//       if (curr.val > queries[i]) {
//         curr = curr.left;
//       } else if (curr.val < queries[i]) {
//         query[0] = curr.val;
//         curr = curr.right;
//       } else {
//         break;
//       }
//     }
//     if (curr) {
//       query[0] = curr.val;
//     }

//     curr = root;
//     while (curr) {
//       if (curr.val < queries[i]) {
//         curr = curr.right;
//       } else if (curr.val > queries[i]) {
//         query[1] = curr.val;
//         curr = curr.left;
//       } else {
//         break;
//       }
//     }
//     if (curr) {
//       query[1] = curr.val;
//     }
//     res.push(query);
//   }

//   return res;
// }
