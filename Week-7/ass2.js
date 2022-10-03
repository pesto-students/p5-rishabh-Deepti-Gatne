//The task is to left-shift the linked list by k nodes
//Time complexity O(n)


// array consist of elements to be added in link list
let arr = [2, 4, 7, 8, 9];
const Node = function (value, next = null) {
  (this.value = value), (this.next = next);
};
//fuction to create empty link list
const LinkedList = function () {
  this.head = null;
};
//function to add node at the end of link list
LinkedList.prototype.addNode = function (value) {
  if (this.head == null) {
    this.head = new Node(value, this.head);
  } else {
    temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = new Node(value);
  }
};
// function to dislay link list
LinkedList.prototype.dispaly = function () {
  if (this.head == null) {
    console.log("list empty");
  } else {
    temp = this.head;
    while (temp != null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
};
// main function that will rotate list with given input
// time complexity of function is O(n)
LinkedList.prototype.rotate = function (value) {
  if (this.head == null) {
    console.log("list empty");
    return;
  }
  //will convert link list into CLL
  // attaching last node with first
  let temp = this.head;
  while (temp.next != null) temp = temp.next;
  temp.next = this.head;
  // rotating list for givn value
  temp = this.head;
  for (i = 0; i < value; i++) temp = temp.next;
  // making next node as per value as head
  this.head = temp;
  // again converting CLL into SLL
  temp = this.head;
  while (temp.next != this.head) temp = temp.next;
  // setting last node->next to NULL
  temp.next = null;
};
// creating list adding node
const linked_list = new LinkedList();
for (i of arr) {
  linked_list.addNode(i);
}

linked_list.dispaly();
linked_list.rotate(3); // rotating list with 3 nodes
console.log("rotated list");
linked_list.dispaly(); // displaying list
