
function howManyStickers(str){
    let sticker = {'f': 1, 'a': 1, 'c': 1, 'e': 1, 'b': 1, 'o': 2, 'k': 1};
    let count =1;
    for(let i = 0; i<str.length; i++){
        if(sticker[str[i]] === 0){
            // console.log(sticker);    
            sticker = increaseSticker(str[i], sticker);
            // console.log(sticker);        
            count+=1;
        }
        else if(sticker[str[i]]){
            sticker[str[i]] -=1;
        }        
    }
    return count;
}

function increaseSticker(val, sticker){
    for(key in sticker){        
        if(key !== val){            
            if(key =='o'){            
                sticker[key] +=2;
            }else {
                sticker[key] +=1;
            }
        }
    }
    return sticker;
}

console.log(howManyStickers('ffaaoooo'));