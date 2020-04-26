function Stopwatch(){
    let startTime,endTime,running,duration = 0;
    this.start = function() {
        if(running)
            throw new Error("Stopwatch Already started");
        running = true;
        startTime = new Date();
        
    };
    this.stop = function(){
        if(!running)
            throw new Error("Stop watch not started yet");
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function(){
        startTime, endTime = null;
        running = false;
        duration = 0;
    };
    Object.defineProperty(this,'duration',{
        get: function(){
            return duration;
        }
    });
}


const stopwatch = new Stopwatch();
