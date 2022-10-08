//determine if there is a valid path that exists from vertex source to vertexdestination.
//time complexity n^2

let n=3;
let edges = [[0,1],[0,2],[3,5],[5,4],[4,3]]
let source = 0;
let destination = 5;
let isPath=0;
let check=function(source,destination){
    let i;
for( i=0;i<n;i++)
{
    if(edges[i][0]==source && edges[i][1]==destination){
        isPath=1;return;}
    if(edges[i][0]==source)
        check(edges[i][1],destination)
}
if(isPath==1) return true;
else return false;
}
console.log(check(source,destination));