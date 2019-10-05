// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

// 例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let i1 = root.indexOf(p)
  let i2 = root.indexOf(q)

  let n1 = parseInt(i1 / 2)

  let n2 = parseInt(i2 / 2)

  console.log('i1:', i1)
  console.log('i2:', i2)

  console.log('n1:', n1)
  console.log('n2:', n2)

  let v = n1 > n2 ? n2 : n1
  console.log(v)
  while (v) {
    if (Math.pow(2, n2 - v) * i2 === i2 || Math.pow(2, n2 - v) * i2 === i2 + 1) {
      return v
    } else {
      v--
    }
  }
  console.log(v)
  return v
}

var root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]; var p = 4; var q = 3
lowestCommonAncestor(root, p, q)
