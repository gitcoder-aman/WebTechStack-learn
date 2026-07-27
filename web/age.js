// console.log(window)

// console.log(document.body)

// alert("Enter the value of a:")
// let a = prompt("Enter a here")
// a = Number.parseInt(a)
// alert("You entered a of type :" + (typeof a))

// let write = confirm("Do you want to write it to the page")
// if(write){
// document.write(a)
// }else{
// document.write("Please allow me to write")
// }

const canDrive = (age) => {
  return age >= 18 ? true : false;
};

let runAgain = true;
while (runAgain) {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);

  if(age < 0){
    console.error("Please enter a valid age:")
    break;
  }
  if (canDrive(age)) {
    alert("You can drive");
  } else {
    alert("You cann't drive");
  }
  runAgain = confirm("Do you want to Run again:");
}
