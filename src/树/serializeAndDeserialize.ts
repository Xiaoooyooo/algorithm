// https://leetcode.cn/problems/serialize-and-deserialize-bst/
// 序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，
// 或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。
// 设计一个算法来序列化和反序列化 二叉搜索树 。 对序列化/反序列化算法的工作方式没有限制。
// 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。
// 编码的字符串应尽可能紧凑。
import { TreeNode } from "./Tree";

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode): string {
  const res = [];
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const curr = queue.shift();
    if (curr === null) res.push(null);
    else {
      res.push(curr.val);
      queue.push(curr.left);
      queue.push(curr.right);
    }
  }
  // 移除后置 null
  while (res.length >= 1 && res[res.length - 1] === null) {
    res.pop();
  }
  return JSON.stringify(res);
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  const arr: number[] = JSON.parse(data);
  if (arr.length === 0) return null;
  const root: TreeNode | null = new TreeNode(arr[0]);
  const queue = [root];
  let index = 0;
  while (index < arr.length - 1) {
    let curr: TreeNode;
    while (!curr && queue.length > 0) {
      curr = queue.shift();
    }
    if (curr === null) break;
    curr.left = arr[++index] === null ? null : new TreeNode(arr[index]);
    if (index === arr.length - 1) break;
    curr.right = arr[++index] === null ? null : new TreeNode(arr[index]);
    queue.push(curr.left, curr.right);
  }
  return root;
}
