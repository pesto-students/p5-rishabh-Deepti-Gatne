
const inputArr=[1,3,2,4];
const max=[-1,-1,-1,-1];
const stack = function (){
    this.list = [];
    
  }
  
  stack.prototype.push = function (value){
        // this.list.push(value);
        this.list.push(value);
    }
    stack.prototype.pop = function() {
        return(this.list.pop());
    }
   
    stack.prototype.display = function() {
    for ( el of this.list)
        console.log(el);
  }

 
   const s1= new stack();
   for(el of inputArr)
            s1.push(el);

  prev=s1.pop();
  console.log(prev);
  index=inputArr.length-2;
  console.log(index);
  while(curr=s1.pop())
  {
        console.log(curr);
        if(curr<prev)
                max[index]=prev;
        else    
                max[index]=max[index+1];
        prev=curr;
        index--;
  }

  console.log(max);
   
  
 