// 链接：https://leetcode.cn/leetbook/read/queue-stack/g02cj/
// 有一幅以 m x n 的二维整数数组表示的图画 image ，其中 image[i][j] 表示该图画的像素值大小。
// 你也被给予三个整数 sr ,  sc 和 newColor 。你应该从像素 image[sr][sc] 开始对图像进行 上色填充 。
// 为了完成 上色工作 ，从初始像素开始，记录初始坐标的 上下左右四个方向上 像素值与初始坐标相同的相连像素点，
// 接着再记录这四个方向上符合条件的像素点与他们对应 四个方向上 像素值与初始坐标相同的相连像素点，……，
// 重复该过程。将所有有记录的像素点的颜色值改为 newColor 。
// 最后返回 经过上色渲染后的图像 。

// 队列 - 广度优先
export default function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const rows = image.length,
    cols = image[0].length;
  const target = image[sr][sc];
  const queue = [];
  const visited = new Set(); // 防止出现 image[sr][sc] === color 的情况
  queue.push([sr, sc]);
  visited.add(sr + "," + sc);
  while (queue.length) {
    const [x, y] = queue.shift();
    image[x][y] = color;
    if (
      x - 1 >= 0 &&
      image[x - 1][y] === target &&
      !visited.has(x - 1 + "," + y)
    ) {
      visited.add(x - 1 + "," + y);
      queue.push([x - 1, y]);
    }
    if (
      x + 1 < rows &&
      image[x + 1][y] === target &&
      !visited.has(x + 1 + "," + y)
    ) {
      visited.add(x + 1 + "," + y);
      queue.push([x + 1, y]);
    }
    if (
      y - 1 >= 0 &&
      image[x][y - 1] === target &&
      !visited.has(x + "," + (y - 1))
    ) {
      visited.add(x + "," + (y - 1));
      queue.push([x, y - 1]);
    }
    if (
      y + 1 < cols &&
      image[x][y + 1] === target &&
      !visited.has(x + "," + (y + 1))
    ) {
      visited.add(x + "," + (y + 1));
      queue.push([x, y + 1]);
    }
  }
  return image;
}
