
function* range(upperbound) {
   for(i=0;i<upperbound;i++){
        yield i;
        square(i);
   }
  }

  function mult(i) { 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(i*i);
      }, 5000);
    });
  }

async function square(n) {
    const response = await mult(n);
    console.log(response)
   
  }
  
 
for(const r of range(20)){
    
}