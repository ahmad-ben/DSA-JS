isBalanced() {
  const checkBalance = (node) => {
    if (!node) return 0;

    const leftDepth = checkBalance(node.left);
    if (leftDepth === -1) return -1;

    const rightDepth = checkBalance(node.right);
    if (rightDepth === -1) return -1;

    if (Math.abs(leftDepth - rightDepth) > 1) return -1;
    return Math.max(leftDepth, rightDepth) + 1;
  };

  return checkBalance(this.root) !== -1;
}
