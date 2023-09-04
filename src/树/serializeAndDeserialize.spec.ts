import assert from "assert";
import { serialize, deserialize } from "./serializeAndDeserialize";
import { TreeNode } from "./index";

describe("serializeAndDeserialize", () => {
  const root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(3);
  const root2 = new TreeNode(1);
  root2.right = new TreeNode(2);
  root2.right.right = new TreeNode(3);
  const root3 = new TreeNode(1);
  root3.left = new TreeNode(2);

  let str1: string, str2: string, str3: string;
  it("serialize", () => {
    str1 = serialize(root1);
    str2 = serialize(root2);
    str3 = serialize(root3);
    assert.equal(str1, "[1,2,3]");
    assert.equal(str2, "[1,null,2,null,3]");
    assert.equal(str3, "[1,2]");
  });

  it("deserialize", () => {
    assert.equal(check(root1, deserialize(str1)), true);
    assert.equal(check(root2, deserialize(str2)), true);
    assert.equal(check(root3, deserialize(str3)), true);
  });
});

function check(root1: TreeNode, root2: TreeNode) {
  const queue1: TreeNode[] = [root1],
    queue2: TreeNode[] = [root2];
  while (queue1.length && queue2.length) {
    const node1 = queue1.shift(),
      node2 = queue2.shift();
    if (node1 === null && node2 === null) continue;
    if (node1 && node2 === null) return false;
    if (node2 && node1 === null) return false;
    if (node1.val !== node2.val) return false;
    queue1.push(node1.left, node1.right);
    queue2.push(node2.left, node2.right);
  }
  return queue1.length === 0 && queue2.length === 0;
}
