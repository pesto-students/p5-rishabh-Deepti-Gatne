let arr=[7,1,5,3,6,4];
let n=6;
let max=0;
function diffarr()
{
for(let i=0;i<n;i++)
{
    for(let j=i+1;j<n;j++)
    {
        if((arr[j]-arr[i])>max)
        {
            max=(arr[j]-arr[i]);
        }
    }
}
return max;
}

console.log(diffarr());
