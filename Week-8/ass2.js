//Given the root of a binary tree, return its maximum depth
//Time complexity O(n)

//tree specified in the form of array if i is parent 2i ,2i+1 are left and right
let root = [1, 5, 1, 6];
//function to create node
const Node = function (value) {
  (this.value = value), (this.left = null), (this.right = null);
};
//fuction to initialize link list
const Tree = function () {
  this.root = null;
};
//function to add node at the end of link list
Tree.prototype.createSubTree = function (pos) {
  if (root[pos] == null || root[pos] == undefined) return null;
  let currNode = new Node(root[pos]);
  currNode.left = this.createSubTree(2 * pos+1);
  currNode.right = this.createSubTree(2 * pos + 2);
  return currNode;
};
Tree.prototype.display = function (currNode) {
  if (currNode != null) {
    console.log(currNode.value);
    this.display(currNode.left);
    this.display(currNode.right);
  }
};

function isValidBST(node, min, max) {
  if (node === null) {
    return true;
  }
  //comparing left & right node value with parent
  if ((max !== null && node.value > max) ||
   (min !== null && node.value < min) ) {
    return false;
  }
  //if b
  if (
    !isValidBST(node.left, min, node.value) ||
    !isValidBST(node.right, node.value, max)
  ) {
    return false;
  }
  return true;
}

const binaryTree = new Tree();
binaryTree.root = binaryTree.createSubTree(1);
// binaryTree.display(binaryTree.root);
console.log("BST", isValidBST(binaryTree.root, null, null));
