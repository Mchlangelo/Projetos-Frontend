let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

//seleção dos elementos do DOM
const cron = document.getElementById("cron");
const startBn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");


//função para formatar o tempo como 00:00:00
function formatTime(unit){
    return unit < 10 ? "0" + unit : unit;

}

//função principal do cronômetro
function updateTime(){
    seconds++;

    if (seconds === 60){
        seconds = 0;
        minutes++;
    }

    if (minutes === 60){
        minutes = 0;
        hours++;
    }

    cron.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}


//eventos

//evento do botão start
startBn.addEventListener("click", () =>{
    if (!isRunning){
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
});


//evento do botão pause
pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
});


//evento do botão stop
stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    cron.textContent = "00:00:00";
});