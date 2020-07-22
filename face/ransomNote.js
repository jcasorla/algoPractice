function checkMagazine(magazine, note) {
    let hash ={};
    let flag = false;
    if(note.length > magazine.length){
        flag = true;
    }else{
        magazine.forEach(data=>{
        if(hash[data]){
            hash[data]+=1;
        }else{
            hash[data] = 1;
        }
    });   
  

    note.forEach(data=>{
        if(hash[data] >= 1){
            hash[data] --;
        }else{
             flag = true;
        }
    });

    }
   

    console.log(flag === true ? 'No' : 'Yes');

}

let str1 = 'avtq ekpvq z rdvzf m zu bof pfkzl ekpvq pfkzl bof zu ekpvq ekpvq ekpvq ekpvq z';
let str2 = 'm z z avtq zu bof pfkzl pfkzl pfkzl rdvzf rdvzf avtq ekpvq rdvzf avtq';
checkMagazine(str1.split(' '), str2.split(' '));

str1 = 'apgo clm w lxkvg mwz elo bg elo lxkvg elo apgo apgo w elo bg';
str2 = 'elo lxkvg bg mwz clm w';
checkMagazine(str1.split(' '), str2.split(' '));