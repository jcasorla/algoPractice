static void separateNumbers(String s) {

	String subString = "";
	boolean isValid = false;
	for (int i = 1; i <= s.length() / 2; i++) {
		subString = s.substring(0, i);
		Long num = Long.parseLong(subString);
		String validString = subString;
		while (validString.length() < s.length()) {
			validString += Long.toString(++num);
		}
		if (s.equals(validString)) {
			isValid = true;
			break;
		}

	}
	System.out.println(isValid ? "YES " + subString : "NO");

}


function separateNumbers(s) {
    let min = Infinity
    let left = 0
    let right = 1
    let start = true
    while(true){
        let current = s.slice(left,right)
        //check if current + 1 exist right behind current 
        if(s.slice(right).indexOf((BigInt(current)+ BigInt(1)).toString()) === 0){
            if(Number(current) < Number(min)) min = current //update min
            if(right + `${Number(current)+1}`.length === s.length) { //check it's the end
                console.log(`YES ${min}`)
                return
            }
            left += current.length
            right += `${Number(current)+1}`.length
            start = false
        }else if(start && right < s.length){ //move right boundary
            right += 1
        }else if(right - left < s.length/2){ /* matched but then no matches found - reset everything except for right boundary*/
            min = Infinity
            left = 0
            start = true
        }else{
            console.log("NO")
            return
        }
    }
}

function separateNumbers(s) {
    let i=1;let count=0;
    while(i<=s.length/2)
    {
        let check=true;
        let j=i;
        let left=BigInt(s.substring(0,j));
        let nextRange=(left+1n).toString().length;
        
        while(j+nextRange<=s.length)
        {
            let right=BigInt(s.substring(j,j+nextRange));
            if(left===right-1n){
                left=right;
                j+=nextRange;
                nextRange=(left+1n).toString().length;
                count=j;
                
            }
            else{
                check=false;
                break;
            }
        }    
    if(check===true && count===s.length){
        console.log('YES ' +s.substring(0,i));
        return;
        }
    i++;
    }   
    console.log('NO');
}

0|


function separateNumbers(s) {
    var subStr = '';
    var isValid = false;
    for (let i = 1; i <= (s.length) / 2; i++) {
        subStr = s.slice(0, i);
        var num = BigInt(subStr);
        var validStr = subStr;
        while (validStr.length < s.length) {
            validStr += String(++num);
        }
        if (new String(s).valueOf() === new String(validStr).valueOf()) {
            isValid = true;
            break;
        }
    }
    console.log(isValid === true ? `YES ${subStr}` : 'No');
}



    Check every possible number up to the halfway point in the string (because once you pass that you'll break the first rule).
    Set the number you're currently on as the first element of your b eautiful sequence.
    Save your first element so you can use it later.'
    Set that same element as a new string.
    Increment the first element and add it to the string you just created.
    You'll start building a string like "9", "910", "91011".
    Stop doing this once your string is of equal length or greater than the initial string. 8.If the string you created is equal to the initial string, it is beautiful. If not, start back at step 2 and try with a new base number that's one digit longer.


int main()
{
    string s;
    cin>>s;
    int n=s.length();
    int flag=0;
    for(int i=1;i<=n/2;i++)
    {
      string str=s.substr(0,i);
      int no=atoi(str.c_str());
      int k=no;
      string new_string;
      new_string=s.substr(0,i);
      while(new_string.length()!=s.length())
      {
       new_string = new_string + to_string(++no);
      }
      if (s.compare(new_string)== 0)
      {
       cout << "YES "<<k;
       flag=1;
      }
    }
 if(flag==0)
  cout<<"NO";

    return 0;
}


function separateNumbers(s) {
    let half = Math.floor(s.length / 2);
    let seq = "";
    let sequences = [];
		//starting number going to be before or on the half the string
    for (let i = 0; i < half; i++) {
        seq += s[i];
				//BigNumber, as regular number fail for bigger numbers;
        if (s.slice(i + 1).startsWith((BigInt(seq) + 1n) + "")) {
            sequences.push(seq);
        }
    }
    let hasSequence = false;
    sequences.forEach(x => {
        let t = s, i = 1;
        let replace = x;
        while (t.match(new RegExp("^" + replace, "")) && t.length) {
            t = t.replace(new RegExp("^" + replace, ""), "");
            replace = (BigInt(replace) + 1n) + "";
        }
        if (t.length == 0) hasSequence = x;
    });
    return console.log(hasSequence ? "YES " + hasSequence : "NO");
}