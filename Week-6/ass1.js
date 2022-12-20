let arr=[4,-1,2,1];

let max=arr[0];
sum=0;
for(el of arr)
    {
        sum=sum+el;
        if(sum>max)
            max=sum;
        if(sum<0)
            sum=0;
        
    }

console.log(max);
    