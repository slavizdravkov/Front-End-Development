function timer() {
    let secondsElement = $('#seconds');
    let minutesElement = $('#minutes');
    let hoursElement = $('#hours');

    $('#start-timer').on('click', function () {
        timer = setInterval(step, 1000);
    });

    $('#stop-timer').on('click', function () {
        clearInterval(timer);
    });

    function step() {
        let seconds = Number(secondsElement.text());
        let minutes = Number(minutesElement.text());
        let hours = Number(hoursElement.text());

        seconds++;

        if (seconds > 59) {
            minutes++;
            seconds = 0;
        }

        if (minutes > 59) {
            hours++;
            minutes = 0;
        }

        secondsElement.text(("0" + seconds).slice(-2));
        minutesElement.text(("0" + minutes).slice(-2));
        hoursElement.text(("0" + hours).slice(-2));
    }
}
