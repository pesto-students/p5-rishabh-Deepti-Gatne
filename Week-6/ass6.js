let arr=[4,-1,2,1];
let ediff=9;
let max=arr[0];
sum=0;
let diff=99;
for(el of arr)
    {
        sum=sum+el;
        if(diff>Math.abs(sum-ediff))
        {
            diff=Math.abs(sum-ediff);
            max=sum;
        }
            
        if(sum<0)
            sum=0;
        
    }

console.log(max);
    