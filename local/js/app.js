import { startController } from "../../service/controller.js";
import { render } from "./arrays.js";



const init = function (data) {
    console.log("data : ", data);
    startController(render[data]);
}


window.init = init;