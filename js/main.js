let x=0;
let displayTime=document.getElementById('displayTime')
let timer=null;
let[hour,minute,second]=[0,0,0];
function stopWatch(){
    second++;
    if(second ==60){
        minute++
        second=0;
        if(minute==60){
            hour++;
            minute=0;
        }
    }
 let m  =  minute <10 ? "0"+minute:minute;
 let h  =  hour <10 ? "0"+hour:hour;
 let s  =  second <10 ? "0"+second:second;
    displayTime.innerHTML=h+":"+m+":"+s
}
function watchStart(){
if(timer !== null){
    clearInterval(timer)
}
timer=setInterval(stopWatch,1000)
}
function watchStop(){
    if(timer !== null){
        clearInterval(timer)
    }  
}
function watchReset(){
    if(timer !== null){
        clearInterval(timer)
        hour=0
        minute=0
        second=0
        displayTime.innerHTML="00:00:00"
    }   
}