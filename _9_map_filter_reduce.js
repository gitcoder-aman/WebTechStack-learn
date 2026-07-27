let arr = [43,23,21]

console.log(arr)

//Array map method
let a = arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value + 1
})
console.log(a)

//Array filter method
let arr1 = [34,54,2,32,5]
let a1 = arr1.filter((value)=>{
    return value < 40
})
console.log(a1)

//Array reduce method

let arr2 = [32,12,12,32,23]
let a2 = arr2.reduce((value1,value2)=>{

    return value1 + value2
})
console.log(a2)

