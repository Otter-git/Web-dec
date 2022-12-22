import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

const timerForm = document.getElementById("timer");
const timerResult = document.getElementById("timer__result");
const timerStop = document.getElementById("timer__stop");

const btnCalc = document.getElementById("calcbtn");
const btnTimer = document.getElementById("timerbtn");

btnCalc.addEventListener("click", function () {
    dateCalcForm.style.display = 'block';
    timerForm.style.display = 'none';
})

btnTimer.addEventListener("click", function () {
    timerForm.style.display = 'block';
    dateCalcForm.style.display = 'none';
})

dateCalcForm.addEventListener("submit", handleCalcDates);
function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

timerForm.addEventListener("submit", handleTimer);

let mainTimer;
let currentTime;
let timerData;

const sound = new Howl({
    src: ['src/sound.mp3']
});

function handleTimer(event) {
    timerResult.innerHTML = "";
    event.preventDefault();

    if (currentTime) {
        timerData = currentTime;
    } else {
        timerData = +event.target.timerData.value * 60;
    }

    mainTimer = setInterval(function () {
        let seconds = timerData % 60;
        let minutes = timerData / 60 % 60;
        let hours = timerData / 60 / 60 % 60;

        if (timerData <= 0) {
            clearInterval(mainTimer);
            sound.play();
            timerResult.innerText = 'completed';
        } else {
            timerResult.innerText = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${seconds}`;
        }
        currentTime = timerData;
        --timerData;
    }, 1000)
}

timerStop.addEventListener("click", function () {
    clearInterval(mainTimer);
});
