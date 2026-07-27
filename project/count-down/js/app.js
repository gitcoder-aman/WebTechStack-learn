const endDate = "06 July 2026 10:00 PM"
document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    console.log(end,now);

    const diff = (end - now)/1000;
    console.log(diff);

    if(diff < 0) return;  // if time is gone then return

    //convert into days
    const days = diff / 3600 /24;
    inputs[0].value = Math.floor(days);
    console.log(Math.floor(days));
    const hours = (diff/360)%24;
    inputs[1].value = Math.floor(hours);
    console.log(Math.floor(hours));

    const minutes = (diff/60)%60;
    inputs[2].value = Math.floor(minutes);
    console.log(Math.floor(minutes));

    const seconds = diff%60;
    inputs[3].value = Math.floor(seconds);
    console.log(Math.floor(seconds));
}
clock()


setInterval(
    ()=>{
        clock()
    },1000
)