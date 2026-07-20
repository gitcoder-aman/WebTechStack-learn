const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}

// let ctitle = document.getElementsByClassName("card-title")[0]

let ctitle = document.getElementById("firstcardtitle") 
ctitle.style.color = "red"

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "cyan"
ctitles[2].style.color = "green"

console.log(ctitle)

document.querySelector(".this").style.color = "red"
document.querySelector(".this").style.background = "black"

console.log(document.getElementsByTagName("a"))

console.log(document.querySelector(".card").getElementsByTagName("a"))

console.log(document.getElementsByName("search"))

console.log(document.getElementById(""))