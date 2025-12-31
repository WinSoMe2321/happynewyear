
let beats=document.querySelectorAll('.beat');
let i=0;
let a=new Audio('audio/heartbeat.mp3');
a.loop=true;a.play();
setInterval(()=>{if(i<beats.length){beats[i].classList.add('show');i++;}},1500);
