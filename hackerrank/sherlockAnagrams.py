dict={}

count=0

for i in range(len(s)):

    for j in range(i+1,len(s)+1):

        list1= list(s[i:j].strip())

        list1.sort()

        transf=''.join(list1)

        if transf in dict: 

            count+=dict[transf]

            dict[transf]=dict[transf]+1

        else: dict[transf]=1       

return count    

def sherlockAndAnagrams(s):
    anagram_dict = {}
    count = 0
    for i in range(1, len(s)):
        for j in range(len(s)-i+1):
            current_sorted = str(sorted(s[j:j+i]))
            if (current_sorted not in anagram_dict):
                anagram_dict[current_sorted] = 1
            else:
                count += anagram_dict[current_sorted]
                anagram_dict[current_sorted] += 1
    return count