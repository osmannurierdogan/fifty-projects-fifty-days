// Elements Selector

const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const toggleElement = document.querySelector(".toggle");
const html = document.querySelector("html");

// Time & Date Arrays

const days = [
    "Monday",
    "Sunday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

// Event Listeners

toggleElement.addEventListener("click", (parameter) => {
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        parameter.target.innerHTML = "Dark Mode";
    } else {
        html.classList.add("dark");
        parameter.target.innerHTML = "Light Mode";
    }
});

// Functions

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(
        hoursForClock,
        0,
        11,
        0,
        360
    )}deg)`;
    minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(
        minutes,
        0,
        59,
        0,
        360
    )}deg)`;
    secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(
        seconds,
        0,
        59,
        0,
        360
    )}deg)`;

    timeElement.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${
        minutes < 10 ? `0${minutes}` : minutes
    } : ${seconds < 10 ? `0${seconds}` : seconds}`;

    dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setInterval(setTime, 1000);
