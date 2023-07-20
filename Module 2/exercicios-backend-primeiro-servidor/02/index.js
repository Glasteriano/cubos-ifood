const express = require("express");
const app     = express();
const port    = 8000;
//========================================================================

const time = {
    minutes : 0,
    seconds : 0
};

let timeOn = undefined;
//========================================================================

function addSeconds(){
    time.seconds++;

    if (time.seconds >= 60){
        time.seconds = 0;
        time.minutes++;
    };
};
//_________________________________________________________

function startTime(){
    timeOn = setInterval(addSeconds, 1_000);
};
//_________________________________________________________

function pauseTime(){
    clearInterval(timeOn);
};
//========================================================================

app.get('/', (req, res) => {
    const minute = (time.minutes === 1) ? "minute" : "minutes";
    const second = (time.seconds === 1) ? "second" : "seconds";

    const showMinutes = String(time.minutes);
    const showSeconds = String(time.seconds);

    res.send(`Current time: ${showMinutes.padStart(2, "0")} ${minute} and ${showSeconds.padStart(2, "0")} ${second}`);
});
//_________________________________________________________

app.get('/start', (req, res) => {
    res.send(`Chronometer started!`);
    startTime();
});
//_________________________________________________________

app.get('/pause', (req, res) => {
    res.send(`Chronometer paused!`);
    pauseTime();
});
//_________________________________________________________

app.get('/keep-on', (req, res) => {
    res.send(`Chronometer is keeping on!`);
    startTime();
});
//_________________________________________________________

app.get('/stop', (req, res) => {
    res.send(`Chronometer stopped!`);
    pauseTime();

    time.minutes = 0;
    time.seconds = 0;
});
//========================================================================

app.listen(port, () => console.log(`Listening on port: ${port}`));
