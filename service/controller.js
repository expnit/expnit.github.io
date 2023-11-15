import { Service } from "./Service.js";
import { homeArray } from "../cloud/home/home/home.js";


// ===================================
Service.start(homeArray, "root")
Service.init(homeArray, "root");
Service.render();
// =====================================


const startController = function (array = []) {
    Service.init(array, "root")
    Service.render();
}
// set global function
window.next = Service.next;
window.prev = Service.prev;


export { startController };