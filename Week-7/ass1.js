//The task is to reverse this list
//Time complexity O(n)

// arr consist of elements to be added in link list
let arr = [1, 2, 3];
//function to create node
const Node = function (value, next = null) {
  (this.value = value), (this.next = next);
};
//fuction to initialize link list
const LinkedList = function () {
  this.head = null;
};
//function to add node at the end of link list
LinkedList.prototype.addNode = function (value) {
  if (this.head == null) {
    this.head = new Node(value, this.head);
  } else {
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = new Node(value);
  }
};
//function to display link list
LinkedList.prototype.dispaly = function () {
  if (this.head == null) {
    console.log("list empty");
  } else {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
};
// main function that will reverse the orignal link list
//running with time complexity O(n) where n is number of nodes
LinkedList.prototype.reverse = function () {
  if (this.head == null) {
    console.log("list empty");
  } else {
    //using three pointer to chnage the direction of link
    let prev = null;
    let curr = this.head;
    while (curr != null) {
      next1 = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next1;
    }
    this.head = prev;
  }
};

const linked_list = new LinkedList();
for (let element of arr) {
  linked_list.addNode(element);
}
linked_list.dispaly(); // display orignal list
console.log("Reverse list is");
linked_list.reverse(); // reversing list
linked_list.dispaly(); // display reverse list
