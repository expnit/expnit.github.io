class Service {

    static init(arrayData = [], rootElement = "") {
        this.index = 0;
        this.data = arrayData[this.index];
        this.arrayLength = arrayData.length;
        this.root = document.getElementById(rootElement)
    }

    //=====================
    static addHeading(data) {
        this.root.innerHTML += `<h1>${data}</h1>`;
    }

    static addParagraph(data) {
        this.root.innerHTML += `<p>${data}</p>`;
    }

    static addObject(data) {
        for (let index in data) {
            this.root.innerHTML += `<p>${data[index]}</p>`;
        }
    }

    static addImage(data) {
        this.root.innerHTML += `<img src="${data}" class="expn-image" />`;
    }

    // =====================

    static render() {
        for (let index in this.data) {
            this.addHeading(this.data[index]["title"]);

            if (
                this.data[index]["type"] !== "object" &&
                this.data[index]["type"] !== "image" ||
                this.data[index]["type"] === undefined
            ) {
                this.addParagraph(this.data[index]["content"]);
            } else if (this.data[index]["type"] === "object") {
                this.addObject(this.data[index]["content"]);
            } else if (this.data[index]["type"] === "image") {
                this.addImage(this.data[index]["url"]);
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


export { Service };