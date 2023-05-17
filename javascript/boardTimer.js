var timerElement = document.getElementById('timer');
var timeLeft = 120; // 2 minutes in seconds
var countdown;
var startTimerButton = document.getElementById('startTimer');
var audio = document.getElementById('audio'); 


function startTimer() {
    clearInterval(countdown);
    audio.play();

    var minutes, seconds;
    timeLeft = 120//if press start recount again from zero

    countdown = setInterval(function() {
    minutes = Math.floor(timeLeft / 60);
    seconds = timeLeft % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerElement.textContent = minutes + ':' + seconds;

    if (timeLeft > 0) {
        timeLeft--;
        
    } else {
        clearInterval(countdown);
        timerElement.textContent = "Time's up!";
        timerElement.style.backgroundColor = 'rgba(243, 101, 93, 0.8)';
        
    }if (timeLeft <=0) {
       setTimeout (function(){
        audio.pause();
       },1000)
       setTimeout(function(){
        alarm.play();
       },1000)

       }
    }, 1000); 
    timerElement.style.backgroundColor = ('rgba(157, 199, 5, 0.5)');
    
}

startTimerButton.addEventListener('click', startTimer);
