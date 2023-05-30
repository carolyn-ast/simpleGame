var time = 2500;
var bug = document.getElementById("bug");
var resetScore = document.getElementById("resetscore");
var resetSpeed = document.getElementById("resetspeed");
var showScore = document.getElementById("score");
var score = 0;

resetScore.addEventListener("click", function () {
    showScore.innerText = 0;
    resetSpeed.click();//while reseting the score, reset the speed as well
    bug.style.top = 0 + "px";
    bug.style.left = 0 + "px";
})
resetSpeed.addEventListener("click", function () {
    time = 2500;
})

bug.addEventListener("click", function () {
    clearInterval(timer);
    score++;
    showScore.innerText = score;
    bug.style.top = Math.random() * 500 + "px";
    bug.style.left = Math.random() * 500 + "px";
    time--;
    timer = setInterval(function () {
        bug.style.top = Math.random() * 500 + "px";
        bug.style.left = Math.random() * 500 + "px";
    }, time)
})
var timer = setInterval(function () {
    bug.style.top = Math.random() * 500 + "px";
    bug.style.left = Math.random() * 500 + "px";
}, time)




