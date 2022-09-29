
const inputStr=new String("{()]}");
const stack = function (){
    this.list = [0];
    
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
  stack.prototype.check = function() {
    for(el of inputStr){
      if(el=='{' || el=='(' || el=='[')
          stackobj.push(el);
      else if(el=='}'){
        if(stackobj.pop()!='{')
          return 0;
      }
      else if(el==']'){
        if(stackobj.pop()!='[')
          return 0;
      }
      else if(el==')'){
        if(stackobj.pop()!='(')
          return 0;
      }
       
  
    }
    return 1;
  }
    
   const stackobj = new stack();
   console.log(stackobj.check());