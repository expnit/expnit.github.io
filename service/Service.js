class Service {

    static init(arrayData = [], rootElement = "") {
        Service.index = 0;
        Service.data = arrayData[Service.index];
        Service.arrayLength = arrayData.length;
        Service.root = document.getElementById(rootElement)
    }

    static reset() {

        Service.index = 0;
        Service.data = null;
        Service.arrayLength = 0;
        Service.root = null;
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

    // =====================

    static render() {

        Service.root.innerHTML = ""; // clear previous content
        for (let index in this.data) {
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
        }
    }

    // next and previous
    static next() {

        console.log("next")

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

// set global function

window.next = Service.next;
window.prev = Service.prev;


export { Service };