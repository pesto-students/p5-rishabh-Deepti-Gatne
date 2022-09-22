let arr=[4,-1,2,1];
let diff=10;
function diffarr()
{
for(let i=0;i<4;i++)
{
    for(let j=i+1;j<4;j++)
    {
        if(Math.abs(arr[i]-arr[j])==diff)
        {
            return 1;
        }
    }
}
return 0;
}

console.log(diffarr());
