let obj={
    [Symbol.iterator](){
        let i=0;
        let firstTerm=0, secondTerm=1, sum=0;
        return{
            next(){
                sum=firstTerm+secondTerm;
                firstTerm=secondTerm;
                secondTerm=sum
                return{ value: sum,done:i++>10};
              
            }
        }
    }
}

console.log("Fibonacci Series")
console.log(0);
console.log(1);
for (const el of obj){
        console.log(el);
 
}