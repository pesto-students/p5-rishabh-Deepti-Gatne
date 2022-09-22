let mat=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
let t=0,l=0,r=3,b=3;
while(t<=b && l<=r)
{
     for(i=l;i<=r;i++)
        console.log(mat[t][i]);
    t++;
     for(i=t;i<=b;i++)
        console.log(mat[i][r]);
    r--;
    for(i=r;i>=l;i--)
        console.log(mat[b][i]);
    b--;
   
     for(i=b;i>=t;i--)
         console.log(mat[i][l]);
    
       
    l++;
}
