
import { Service } from "./Service.js";

const startController = function (array = []) {
    Service.init(array, "root");
    Service.render();
}


export { startController };