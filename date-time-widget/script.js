let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function formatTime(time){
    return time < 10 ? "0" + time : time; // This is for add a 0 before the hour if it's applicable
}

function updateClock(){
    const today = new Date();

    let date = today.getDate();
    let day = weekdays[today.getDay()];
    let month = monthNames[today.getMonth()];
    let year = today.getFullYear()

    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());
    console.log({today, date, day, month, hours, minutes, seconds});

    dateContainer.innerHTML = `
        <p>${day}</p>
        <p><span>${month} ${date}</span></p>
        <p>${year}</p>
    `;

    hoursContainer.textContent = `${hours} :`;
    minutesContainer.textContent = `${minutes} :`;
    secondsContainer.textContent = seconds;
}

updateClock();

setInterval(updateClock,1000);