var timerElement = document.getElementById('timer');
    var timeLeft = 120; // 2 minutes in seconds
    var countdown;

    function startTimer() {
      clearInterval(countdown);

      var minutes, seconds;
 

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
        }
      }, 1000);
    }