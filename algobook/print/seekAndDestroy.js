
function seekAndDestroy(a,b){
    return a.filter(data=>{
        return !b.includes(data);
    })

};

console.log(seekAndDestroy([3,5,1,2,2],[2,3,5]));