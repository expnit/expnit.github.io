import { Service } from "./Service.js";
import { csharpArray } from "../cloud/home/technology/programming/csharp/csharp.js";

Service.main(csharpArray,"root");

const startController = function (array = []) {
    Service.init(array, "root")
    Service.render();
}
// set global function
window.next = Service.next;
window.prev = Service.prev;


export { startController };