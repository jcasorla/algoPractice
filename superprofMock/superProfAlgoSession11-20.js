//first non duplicate in array
//[a,a,a,a,a,b,c,c,c] => b
//count: 1
//run: b
//[a,a,a,b,c,c,c,d] =>b
//         x
//hashmap{a:4,b:1}
//runningVal : c
//count = 1
//res = b

//O(N)
//N(log(N))
/**
function firstNonDup(arr){
    arr = arr.sort((a.b) =>a-b);
    let runningVal = arr[0];//a
    let count = 1;
    let len = arr.length;
    
    for(let i =1; i< len; i++){
        let ch = arr[i];
        if(runningVal !== ch){//b === c
            if(count === 1){
                return ch;//b
            }
            count = 1;
            runningVal = ch;
        }
    }
}
*/

//console.log(firstNonDup(['a','a','a','b','c','c','c','d']))//b


//[d,a,a,b,c,c,a] =>b
//[d,d,a,a,c,c,a,b,b,b,e]=>e =>a
//                     x
//{d:2,a:3,c:2,b:3,e:1}

//[d,d,c,b,b,b,a]

function firstNonDup(arr){
    let map = {};
    let len = arr.length;
    
    for(let i =0; i < len; i++){
        let ch = arr[i];
        if(map.hasOwnProperty(ch)){
            map[ch] +=1;
        }else{
            map[ch] = 1;
        }
        
    }
    console.log(Object.keys(map));
    
    for(let key in map){
        let val = map[key];
        
        if(val === 1){
            return key;
        }
    }
    
    return -1;
    
    
}

console.log(firstNonDup(['d','d','c','b','b','b','a']))


//a->b->c->d->null
//   x
  a->b
//   p
n <-a
//  null<-a<-b<-c<-d

//cur: a
//next= null
//prev c

function reverseSLL(node){
    let cur = node;
    let prev = node
    let next = null;
    
    while(prev){
        prev = cur.next;//b->c
        cur.next = next;//null->a
        //xt = prev;\
        next = cur; //a,b
        //ev = prev.next
        
    }
    return prev;
}


//correct:
function reverseLinkedList(head) {
	let prev=null;
	let current=head;
	
	while(current){
		const next=current.next;
		current.next=prev;
		prev=current;
		current=next;
	}
	return prev;
}
