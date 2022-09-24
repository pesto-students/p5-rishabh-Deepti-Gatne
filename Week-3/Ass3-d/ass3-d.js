function createSatck(){
    let items=[];
    return{
       
        push(item){
            items.push(item);
        },
        pop(){
            return items.pop();
        }
    };
}
const stack=createSatck();
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack.items);
stack.items=[10,100,1000];

