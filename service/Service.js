import { Expn } from "../local/js/expn.js";
class Service {

    static start(arrayData = [], rootElement) {
        Service.index = 0;
        Service.data = arrayData[Service.index];
        Service.arrayLength = arrayData.length;
        Service.root = document.getElementById(rootElement)
    }

    static init(arrayData = [], rootElement = "") {
        Service.array = arrayData;
        Service.data = arrayData[Service.index];
        Service.arrayLength = arrayData.length;
        Service.root = document.getElementById(rootElement)
    }
    //=====================
    static addHeading(data) {
        Service.root.innerHTML += `<h1>${data}</h1>`;

    }

    static addParagraph(data) {
        Service.root.innerHTML += `<p>${data}</p>`;
    }

    static addObject(data) {
        for (let index in data) {
            Service.root.innerHTML += `<p>${data[index]}</p>`;
        }
    }

    static addImage(data) {
        Service.root.innerHTML += `<img src="${data}" class="expn-image" />`;
    }

    static addElement(data = {}) {
        console.log("element");
    }

    // =====================

    static render() {

        Service.init(Service.array, "root"); // root 
        Service.root.innerHTML = ""; // clear previous content

        for (let index in Service.data) {
            Service.addHeading(Service.data[index]["title"]);

            if (
                Service.data[index]["type"] !== "object" &&
                Service.data[index]["type"] !== "image" ||
                Service.data[index]["type"] === undefined
            ) {
                Service.addParagraph(Service.data[index]["content"]);
            } else if (Service.data[index]["type"] === "object") {
                Service.addObject(Service.data[index]["content"]);
            } else if (Service.data[index]["type"] === "image") {
                Service.addImage(Service.data[index]["url"]);
            }
            else if (Service.data[index]["type"] === "element") {
                console.log(Service.data[index]["content"])
                Service.addElement(Service.data[index]["content"]);
            }
        }
    }

    // next and previous
    static next() {

        if (Service.index < Service.arrayLength - 1) {
            ++Service.index;
        } else {
            Service.index = 0;
        }
        Service.render();
    }

    static prev() {

        if (Service.index > 0) {
            --Service.index;
        } else {
            Service.index = Service.arrayLength - 1;
        }
        Service.render()
    }
}



export { Service };