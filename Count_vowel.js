function getCount(str) {
    const letters = ['a','e','i','o','u']
    let count = 0
    let arr = []
    for (let i=0; i<str.length;i++){
        arr.push(str[i])
    }
    arr.forEach((i)=>{
        if(letters.includes(i)){
            count++
        }
    })
    
    return count
}
console.log(getCount('apple'))
