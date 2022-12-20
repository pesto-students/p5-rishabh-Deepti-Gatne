//The task is to check if the linked list has a loop
//Time complexity O(n)
let arr = [2, 4, 7, 8, 9];

const Node = function (value, next = null) {
  (this.value = value), (this.next = next);
};
const LinkedList = function () {
  this.head = null;
};
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
//function to add cycle in the link list
LinkedList.prototype.addcycle = function (loc) {
  if (this.head == null) {
    console.log("list empty");
  } else {
    temp = this.head;
    cycle = null;
    while (temp.next != null) {
      if (loc == 1) cycle = temp; 
      temp = temp.next;
      loc--;
    }
    //sttaching node selected as cycle to last node
    temp.next = cycle;
  }
};

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
//function to check loop
LinkedList.prototype.loop = function () {
  if (this.head == null) {
    console.log("list empty");
    return;
  }
  //slow_poniter moving 1 postiton at a time
  //fast_pointer moving 2 position at a time
  //if they interact there is cycle
  slow_pointer = fast_pointer = this.head;
  while (slow_pointer && fast_pointer && fast_pointer.next) {
    slow_pointer = slow_pointer.next;
    fast_pointer = fast_pointer.next.next;
    if (slow_pointer == fast_pointer) {
      return 1;
    }
  }
  return 0;
};

const linked_list = new LinkedList();

for (let element of arr) {
  linked_list.addNode(element);
}

linked_list.dispaly();
//node to which last node is connected
let x=2;
linked_list.addcycle(x);
console.log(linked_list.loop());
