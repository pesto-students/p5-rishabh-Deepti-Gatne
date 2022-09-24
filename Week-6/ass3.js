let arr=[1,2,0,0,1];
let low=0;
let high=4;

function swap(f,s)
{
    
    let a=arr[f];
    arr[f]=arr[s]
    arr[s]=a;
}
for(let i=0;i<5;i++)
{
    if(arr[i]==0 && i>low)
    {
        swap(i,low);
        low++;
    }
    
    if(arr[i]==2 && i<high)
    {
        swap(i,high);
        high--;
    }
   
}


for (i of arr)
{
    console.log(i);
}