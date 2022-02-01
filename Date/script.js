//show the date
function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const year = date.getFullYear();

    return `${hours} : ${minutes}` + ` ${year}`;
}

//show the day of the week
function getDay() {
    const date = new Date();
    const day = date.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
}


const time = getTime();
const day = getDay();


const btn = document.querySelector("button")

btn.addEventListener("click", function () {

    document.querySelector("#time").innerHTML = time;
    document.getElementById("day").innerText = day;

})