//Given the root of a binary tree, return the level order traversal of its nodes' values.
//Time complexity O(n)

//tree specified in the form of array if i is parent 2i ,2i+1 are left and right
let root = [1, 1];
let addQ=[];
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
Tree.prototype.displayLevel=function(){
    let currNode=addQ.shift();
    if(currNode==undefined)
        return;
    console.log(currNode.value);
    if(currNode.left!=null)
     addQ.push(currNode.left);
    if(currNode.right!=null)
    addQ.push(currNode.right);
    this.displayLevel();

}

const binaryTree = new Tree();
binaryTree.root = binaryTree.createSubTree(1);
addQ.push(binaryTree.root);
binaryTree.displayLevel();

