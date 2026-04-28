document.addEventListener("DOMContentLoaded",()=>{

const bgm=document.getElementById("bgm");
if(!bgm) return;

let savedTime = localStorage.getItem("bgmTime");
let playing = localStorage.getItem("bgmPlaying")==="true";

if(savedTime){
  bgm.currentTime = savedTime;
}

if(playing){
  bgm.play().catch(()=>{});
}

setInterval(()=>{
  if(!bgm.paused){
    localStorage.setItem("bgmTime", bgm.currentTime);
  }
},1000);

});
