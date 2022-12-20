//Find the Town Judge
//time complexity O(n)


let edges =  [[1,3],[2,3]]
let n = edges.length;
let townJudge=edges[0][1];

let verifyJudge=function(){
for( let i=0;i<n;i++)
{
    if(edges[i][1]!=townJudge || edges[i][0]==townJudge)
        return -1;
}
return townJudge;
}
console.log(verifyJudge());