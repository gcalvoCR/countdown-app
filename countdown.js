
let min = 0;
let sec = 0;

$(function() {
    $("#btn-1").click(function(){
        execute(1, 0);
    });
    $("#btn-2").click(function(){
        execute(2, 0);
    });
    $("#btn-5").click(function(){
        execute(5, 0);
    });
});

function execute(pmin, psec){
    min = pmin;
    sec = psec;
    clearTimeout(t);
    t = window.setInterval(function(){
        countDown();
        if (isOver()){
            console.log("over");
            clearTimeout(t);
        }
      }, 1000);
}

function isOver(){
    (min===0 && sec ===0) ? over=true: over=false;
    return over;
}

function decreaseSeconds(){
    sec === 0 ? sec = 59 : sec --;
    return sec;
}

function decreaseMinutes(){
    min === 0 ? min = 0 : min --;
    return min;
}

function printCountDown(){
    if(min<10 && sec<10){
        $("#countdown").text("0"+min+":0"+sec);
    } 
    else if(min<10 && sec>10){
        $("#countdown").text("0"+min+":"+sec);
    }
    else if(min>10 && sec>10){
        $("#countdown").text(min+":"+sec);
    }    
}

function countDown(){
    if (sec===0){
        decreaseMinutes();
    }
    decreaseSeconds();
    printCountDown();
}

  


