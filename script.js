/* --------------- Dynamic Greetings  --------------------- */
let greetings = document.querySelector("#greetings");

let liveTime = new Date().getHours();
let greeting = liveTime >= 5 && liveTime < 12 ? "Good Morning!" : 
liveTime >= 12 && liveTime < 18 ? "Good Afternoon!" :
liveTime >= 18 && liveTime < 21 ? "Good Evening!" : "Good Night!";

greetings.innerHTML = greeting;
/* --------------- End Dynamic Greetings  --------------------- */
/* --------------- clock  --------------------- */
const deg = 6;
const ho = document.querySelector('#hh');
const mi = document.querySelector('#mm');
const se = document.querySelector('#ss');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    ho.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mi.style.transform = `rotateZ(${mm}deg)`;
    se.style.transform = `rotateZ(${ss}deg)`;
})
/* --------------- End clock  --------------------- */
/* --------------- Date Time  --------------------- */
function liveClock(){
    var liveDate = new Date();
    var showDay = liveDate.getDay(),
        showMonth = liveDate.getMonth(),
        showDate = liveDate.getDate(),
        showYear = liveDate.getFullYear(),
        showHours = liveDate.getHours(),
        showMinutes = liveDate.getMinutes(),
        showSeconds = liveDate.getSeconds(),
        showPeriod = "AM";

        if(showHours == 0){
            showHours = 12;
        }
        if(showHours > 12){
            showHours = showHours - 12;
            showPeriod = "PM";
        }

        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }


        var months = ["January", "February", "March", "April", "May", "June", "July",
                       "Augest", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        var idNames = ["day", "month", "date", "year", "hour", "minutes", 
                       "seconds", "period"];
        
        var valueNames = [week[showDay], months[showMonth], showDate.pad(2), showYear, showHours.pad(2), showMinutes.pad(2), 
                       showSeconds.pad(2), showPeriod];

        for(var i = 0; i < idNames.length; i++)
        document.getElementById(idNames[i]).firstChild.nodeValue = valueNames[i];               
}

function initliveClock(){
    liveClock();
    window.setInterval("liveClock()", 1);
}
/* --------------- End Date Time  --------------------- */
/* --------------- Quote  --------------------- */
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
window.setInterval("getQuote()", 20000);
/* --------------- End Quote  --------------------- */
