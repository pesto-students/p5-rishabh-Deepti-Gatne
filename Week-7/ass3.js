
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
  LinkedList.prototype.addcycle = function(loc) {
    if(this.head==null){
        console.log("list empty");
    }
    else{
        temp=this.head;
        cycle=null;
        while(temp.next!=null)
        {
            console.log(temp.value);
            if(loc==1)
              cycle=temp;
            temp=temp.next;
            loc--;
           
        }
        
        temp.next=cycle;
        
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

  LinkedList.prototype.loop = function() {
    if(this.head==null){
        console.log("list empty");
        return;
    }
    slow_pointer=fast_pointer=this.head;
    while (slow_pointer && fast_pointer && fast_pointer.next) {
      slow_pointer = slow_pointer.next;
      fast_pointer = fast_pointer.next.next;
      if (slow_pointer == fast_pointer) {
          
          return 1;
      }

  }
  return 0;
    
}
  const linked_list = new LinkedList();
  for(i of arr){
    linked_list.addNode(i);
  }
  
  linked_list.dispaly();
  linked_list.addcycle(0);
  console.log(linked_list.loop());
 
 