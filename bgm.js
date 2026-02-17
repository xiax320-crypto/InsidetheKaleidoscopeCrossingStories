document.addEventListener("DOMContentLoaded",()=>{

const bgm=document.getElementById("bgm");
if(!bgm) return;

// 读取之前时间，如果有保存时间，跳到那个位置，如果之前在播放，自动播放
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
