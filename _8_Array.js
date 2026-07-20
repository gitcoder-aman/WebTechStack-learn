let marks_class_12 = [91,82,63,84, null,false,"Not Present"]
console.log(marks_class_12)
marks_class_12[8] = 89
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])


console.log(marks_class_12[8])

console.log(typeof marks_class_12)

console.log(marks_class_12.toString())

let c = marks_class_12.join("_")
console.log(c)

let r = marks_class_12.pop()
console.log(r)
console.log(marks_class_12)
marks_class_12.push(34);
console.log(marks_class_12);

let s = marks_class_12.shift() // original array changed by this method
console.log(s,marks_class_12)

//delete
let num = [1,2,3,4,5,6,7,433,8,0]
console.log(num)
delete num[0]
console.log(num.length)
console.log(num)

//concat method
let num_more = [11,12,13,14,15,16,17,18,19]
let newArray = num.concat(num_more)
console.log(newArray)

//sort method

let compare=(a,b)=>{
    return a - b;
}
num.sort(compare)
console.log(num)

console.log("for each")
//for each
num.forEach((element)=>{
    console.log(element*element)
})

//Array from
let name = "Aman"
let arr = Array.from(name);
console.log(arr);


let number = [10,20,30,40,50,60,70,80,90]
//for of
for(let i of number){ //it is returning number
    console.log(i)
}

//for in
for(let i in number){ // it is return index
    console.log(i)
}


