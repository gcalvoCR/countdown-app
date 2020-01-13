let t = false;

function checkTicking(app){
    if(!t){
        t = window.setInterval(function(){
            app.countDown();
            if (app.isOver()){
                clearTimeout(t);
            }
          }, 1000);
    } else{
        clearInterval(t);
        t=false;
    }
    return t;
}

function App(){
    this.min = 0;
    this.sec = 0;
    this.t= false;
    
    this.execute = function(pmin, psec){
        this.min = pmin;
        this.sec = psec;
        this.printCountDown();
    }

    this.isOver = function(){
        (this.min===0 && this.sec ===0) ? over=true: over=false;
        return over;
    }
    
    this.decreaseSeconds = function (){
        this.sec === 0 ? this.sec = 59 : this.sec --;
        return this.sec;
    }
    
    this.decreaseMinutes = function (){
        this.min === 0 ? this.min = 0 : this.min --;
        return this.min;
    }
    
    this.printCountDown = function(){
        if(this.min<10 && this.sec<10){
            $("#countdown").text("0"+this.min+":0"+this.sec);
        } 
        else if(this.min<10 && this.sec>10){
            $("#countdown").text("0"+this.min+":"+this.sec);
        }
        else if(this.min>10 && this.sec>10){
            $("#countdown").text(this.min+":"+this.sec);
        }    
    }
    
    this.countDown = function(){
        if (this.sec===0){
            this.decreaseMinutes();
        }
        this.decreaseSeconds();
        this.printCountDown();
    }
}

$(function() {
    let app = new App();
    
    $("#btn-1").click(function(){
        app.execute(1, 0);
        checkTicking(app);
        t ? $('#btn-1').text("Stop") : $('#btn-1').text("Start Over (1 min)")
    });
    $("#btn-2").click(function(){
        app.execute(2, 0);
        checkTicking(app);
        t ? $('#btn-2').text("Stop") : $('#btn-2').text("Start Over (2 min)")
    });

    $("#btn-5").click(function(){
        app.execute(5, 0);
        checkTicking(app);
        t ? $('#btn-5').text("Stop") : $('#btn-5').text("Start Over (5 min)")
    });
});
