
function* range(upperbound) {
   for(let i=0;i<upperbound;i++){
    
        square(i);
       
        
   }
  }

  const mult=(i)=> { 
    return new Promise((resolve) => {
      setTimeout((i) => {
        
        resolve(i*i); 
      }, i*1000,i);       
            
    });
  }

async function square(n) {
    let response = await mult(n);
    console.log(response)
   
  }
  
 
for(const r of range(5)){}