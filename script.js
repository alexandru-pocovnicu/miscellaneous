let arr = [1, 2];

function larger(x){
    let arri=[]
    for(let i=0;i<x.length;i++){
        if(x[i]>1){
            arri.push(x[i])
        }
    }
    return arri
}
console.log((larger(arr)));
console.log(arr.filter((x)=>x>1));
