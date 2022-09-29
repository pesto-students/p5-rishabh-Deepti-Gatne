
const inputArr=[1,2,1,3,2,1,4,2];
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

  stack.prototype.popelement = function(s2) {
    
    while ( el =this.pop())
           s2.push(el)
    
    console.log(s2.list.pop());
    while ( el =s2.pop())
           this.push(el)

    
  }
  
 
    
   const stack1= new stack();
   const stack2= new stack();
   for(let i=0;i<inputArr.length;i++)
   {
        // console.log(stack1.list);
        if(inputArr[i]==1)
               stack1.push(inputArr[++i])
        else if(inputArr[i]==2)
                stack1.popelement(stack2);
        
   }
 