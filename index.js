
const elHour=document.getElementById("Hours");
const elMinutes=document.getElementById("Minutes");
const elSeconds=document.getElementById("Seconds");
const elampm=document.getElementById("ampm");

function dynamic_clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = "AM";

    if (h > 12){
        ampm = "PM";
        h = h - 12;
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    elHour.innerText = h;
    elMinutes.innerText = m;
    elSeconds.innerText = s;
    elampm.innerText = ampm;
  
    setTimeout(()=>{
        dynamic_clock()
    },1000)
}
dynamic_clock()