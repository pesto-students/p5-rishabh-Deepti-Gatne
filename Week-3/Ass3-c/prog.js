function createinc()
{
    let count=0;
    
    function inc()
    {
        console.log(count);
     
        count++;
    }
    console.log('count1213');
    let msg= `count is ${count}`;
    
    function log()
    {
        console.log(this==global);
        console.log(msg);
    }
    return [inc,log];
}

const [inc,log]=createinc();
inc();
inc();
inc();
log();