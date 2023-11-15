import { Service } from "./Service.js";
import { csharpArray } from "../cloud/home/technology/programming/csharp/csharp.js";


// ===================================
Service.start(csharpArray, "root")
Service.init(csharpArray, "root");
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