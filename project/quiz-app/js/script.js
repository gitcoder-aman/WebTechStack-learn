const questions = [
  {
    ques: "Which of the following Markup Language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    ques: "Which year was javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none",
    correct: "b",
  },
  {
    ques: "What does CSS stand for?",
    a: "Hyper text markup language",
    b: "Cascading style sheet",
    c: "Json object notation",
    d: "none",
    correct: "b",
  }
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionsInputs = document.querySelectorAll(".options")
const loadQuestion = ()=>{
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1}) ${data.ques}`;
    optionsInputs[0].nextElementSibling.innerText = data.a
    optionsInputs[1].nextElementSibling.innerText = data.b
    optionsInputs[2].nextElementSibling.innerText = data.c
    optionsInputs[3].nextElementSibling.innerText = data.d

    console.log(data);
}
const submitQuiz = ()=>{
    const data = questions[index];
    const ans = getAnswer();
    if(ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return
}
const getAnswer=()=>{
    let answer;
    optionsInputs.forEach((input)=>{
        if(input.checked){
            console.log(input.value)
            answer = input.value
        } 
    })
    return answer;
}
const reset=()=>{
    optionsInputs.forEach((input)=>{
        input.checked = false
    })
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3> Thank you for the playing quiz</h3>
    <h2> ${right} / ${total} are correct</h2>
    </div>`
}
//initial call
loadQuestion();