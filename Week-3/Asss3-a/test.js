    
    function memorize(fn)
    {
        const cache=new Map();
      
        return function(...args)
        {
           
            const key=args.toString();
            if(cache.has(key))
            {
                return cache.get(key);
            }
            cache.set(key,fn(...args))
            console.log(cache);
            return cache.get(key);
        }
    }
    
    function add(n1=0,n2=0)
    {
        return n1+n2;
    }

    const addm=memorize(add);
    console.time();
    console.log(addm(3,2));
    console.timeEnd();
    console.time();
    console.log(addm(3,6));
    console.timeEnd();
    console.time();
    console.log(addm(3,2));
    console.timeEnd();
    console.time();
    console.log(addm(3,2));
    console.timeEnd();
    console.time();
    console.log(addm(5));
    console.timeEnd();