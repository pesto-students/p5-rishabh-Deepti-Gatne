function hasDuplicate(arr)
{
    x= new Set(arr);
    if(x.size==arr.length)
        console.log("false");
    else    
        console.log("true");
}

hasDuplicate([1,2,3,4,1]);