document.addEventListener("DOMContentLoaded",()=>{

const bgm=document.getElementById("bgm");
const soundBtn=document.getElementById("soundBtn");

if(!bgm || !soundBtn) return;

let playing = localStorage.getItem("bgmPlaying")==="true";

if(playing){
  bgm.volume=0.6;
  bgm.play().catch(()=>{});
  soundBtn.src="img/blacksound.png";
}else{
  soundBtn.src="img/blacknosound.png";
}

soundBtn.addEventListener("click",()=>{

  if(!playing){

    bgm.play().catch(()=>{});
    soundBtn.src="img/blacksound.png";
    localStorage.setItem("bgmPlaying","true");
    playing=true;

  }else{

    bgm.pause();
    soundBtn.src="img/blacknosound.png";
    localStorage.setItem("bgmPlaying","false");
    playing=false;

  }

});

});
