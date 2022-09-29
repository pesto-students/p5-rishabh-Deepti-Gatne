
let arr=[2,4,7,8,9];
const Node = function(value, next = null) {
    this.value = value,
    this.next = next
  }
  const LinkedList = function() {
    this.head = null;
 }
  LinkedList.prototype.addNode = function(value) {
    if(this.head==null){
        this.head = new Node(value, this.head);
    }
    else{
        temp=this.head;
        while(temp.next!=null)
        {
            temp=temp.next;
        }
        temp.next= new Node(value);
    }
   
  
    
  }

  LinkedList.prototype.dispaly = function() {
    if(this.head==null){
        console.log("list empty");
    }
    else{
        temp=this.head;
        while(temp!=null)
        {
            console.log(temp.value);
            temp=temp.next;
        }
        
    }
    
  }

  LinkedList.prototype.rotate = function(value) {
    if(this.head==null){
        console.log("list empty");
        return;
    }
   temp=this.head;      
    while(temp.next!=null)
           temp=temp.next;
    temp.next=this.head;
    temp=this.head;
    for(i=0;i<value;i++)
            temp=temp.next;
    this.head=temp;
    temp=this.head;      
    while(temp.next!=this.head)
           temp=temp.next;
    temp.next=null;
    
}
  const linked_list = new LinkedList();
  for(i of arr){
    linked_list.addNode(i);
  }
  
  linked_list.dispaly();
  linked_list.rotate(3);
  console.log("rotated list")
  linked_list.dispaly();
 