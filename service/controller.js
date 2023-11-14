
import { Service } from "./Service.js";

const startController = function (array = []) {

    Service.init(array, "root");
    Service.render();
    window.next = Service.next;
    window.prev = Service.prev;
}

export { startController };