function alternatingCharacters(s) {
    const arr = s.split('')
    let deleted = 0
    let last = arr[0]
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] === last) deleted++
        else last = arr[i]
    }
    return deleted


}