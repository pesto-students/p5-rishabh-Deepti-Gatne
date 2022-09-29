
let arr=[1,2,3];
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

  LinkedList.prototype.reverse = function() {
    if(this.head==null){
        console.log("list empty");
    }
    else{
        prev=null;
        curr=this.head;
        while(curr!=null)
        {
            next1=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next1;
            
        }
        this.head=prev;
        
    }
    
  }
  const linked_list = new LinkedList();
  for(i of arr){
    linked_list.addNode(i);
  }
  
  
  linked_list.dispaly();
  console.log("Reverse list is");
  linked_list.reverse();
  linked_list.dispaly();