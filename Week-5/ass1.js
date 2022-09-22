
function* range(upperbound) {
   for(i=0;i<upperbound;i++){
        yield i;
        square(i);
   }
  }

  function mult(i) { 
    return new Promise(resolve => {
      setTimeout((i) => {
        resolve(i*i);
      }, 1000*i,i);
    });
  }

async function square(n) {
    const response = await mult(n);
    console.log(response)
   
  }
  
 
for(const r of range(10)){
    
}