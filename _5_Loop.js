let obj = {
    harry:90,
    subh:45,
    shivika:56,
    ritika:57,
    shiv:23
}
for(let a in obj){
    console.log(a)
}
for(let a in obj){
    console.log("Mark of "+ a + " are " + obj[a])
}

for (let index = 0; index < Object.keys(obj).length; index++) {
    console.log("The marks of "+ Object.keys(obj)[index] + " are " + obj[Object.keys(obj)[index]])
    
}
