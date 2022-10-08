//All Path from source to target
//time complexity O(n^n)


let edges =  [[4,3,1],[3,2,4],[3],[4],[]]
let n = edges.length;
let src=0;
let dest=4;
let path=[];
let getPaths=function(src,dest){
    if(src==dest)
    {
        console.log(path);
        path.pop();
        return;
    }
    //DFS recursive call
    for(let i=0;i<edges[src].length;i++)
    {
        path.push(edges[src][i])
        getPaths(edges[src][i],dest);
    }
    path.pop();
    
}
path.push(src);
getPaths(src,dest);