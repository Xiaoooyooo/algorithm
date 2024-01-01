export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
}

export function compareTree(root1: TreeNode | null, root2: TreeNode | null) {
  if (!root1 && !root2) {
    return true;
  }
  if (!root1 || !root2) {
    return false;
  }
  if (root1.val !== root2.val) {
    return false;
  }
  if (!compareTree(root1.left, root2.left)) {
    return false;
  }
  if (!compareTree(root1.right, root2.right)) {
    return false;
  }
  return true;
}
