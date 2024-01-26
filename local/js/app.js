import { load, index, technology } from "../../data/home/home.js";


let isLive = true;

const startIndex = function () {

    if (isLive === true) {
        isLive = false;
        console.log("stopped");
        document.querySelector(".startStopButton").innerHTML = "Start";
        document.querySelector(".startStopButton").style.backgroundColor = "crimson";

    }
    else {
        isLive = true;
        document.querySelector(".startStopButton").innerHTML = "Stop";
        document.querySelector(".startStopButton").style.backgroundColor = "lime";
        console.log("Started");

    }

}

setInterval(function () {
    if (isLive === true) {
        load(index, technology)
    }
}, 1000);


window.startIndex = startIndex;