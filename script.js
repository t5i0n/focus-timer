let minutes = 25;
let seconds = 0;
let timerInterval;
let sessionsCompleted = 0;

const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const sessionsEl = document.getElementById("sessions");

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timerInterval);
                sessionsCompleted++;
                sessionsEl.textContent = sessionsCompleted;
                alert("Session Complete! 🎉");
                resetTimer();
                return;
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        updateTimerDisplay();
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    minutes = 25;
    seconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
}

// Task List
const addTaskBtn = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const delBtn = document.createElement("button");
    delBtn.textContent = "x";
    delBtn.addEventListener("click", () => li.remove());

    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});