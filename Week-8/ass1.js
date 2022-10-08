//Given the root of a binary tree, return its maximum depth
//Time complexity O(n)

//tree specified in the form of array if i is parent 2i ,2i+1 are left and right
let root = [1,1,null,2];

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
function maxDepth(currNode) {
  if (currNode == null || currNode == undefined) return 0;
  //calculating depth of left subtree recursively
  let ldepth = maxDepth(currNode.left);
  //calculating depth of right subtree
  let rdepth = maxDepth(currNode.right);
  //returning max of left , right subtree to parent call
  if (ldepth > rdepth) return ldepth + 1;
  return rdepth + 1;
}
const binaryTree = new Tree();
binaryTree.root = binaryTree.createSubTree(1);
console.log("Maximum  depth of tree is", maxDepth(binaryTree.root));
