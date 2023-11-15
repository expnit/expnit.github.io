/**
 * @license MIT
 *
 * Copyright 2023 ExpnIT
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @author Chauhan Pruthviraj <expnit@outlook.com>
 * @version 1.0.0
 * @description This is a JavaScript library for creating, manipulating, and rendering HTML elements.
 */


"use-strict"

class Expn {


    // static methods 

    /**
     * 
     * @param {elementName} elementName is a name that you want to crete for example div 
     * @returns {element} returns created element
     */

    static create(elementName = "div") {
        let element = document.createElement(elementName);

        // properties for element
        element.expnElement = document.createElement(elementName);
        element.expnRoot = null;
        element.expnData = null;
        element.expnStyle = {};
        element.expnAttributes = {};
        element.expnEvents = {};
        return element;
    }

    /**
     * 
     * @param {element} element an element in which you want to add Style 
     * @param {style} style style in object for example {height:"100px",width:"200px"}
     */

    static addStyle(element = Expn, style = {}) {
        for (let index in style) {
            element.style[index] = style[index];
            element.expnStyle[index] = style[index];
        }
    }

    /**
     * 
     * @param {element} element an element in which you want to add data 
     * @param {data} data . this data will be added in element as its data.
     * data must be in String format
     */

    static addData(element = Expn, data = "") {
        element.innerHTML = data;
        element.expnData = data;
    }
    /**
     * 
     * @param {element} element . add element in which you want to add attributes 
     * @param {attributes} attributes . add attributes in object with value that you want to give to attribte
     */
    static addAttributes(element = Expn, attributes = {}) {
        for (const attribute in attributes) {
            element.setAttribute(attribute, attributes[attribute]);

            element.expnAttributes[attribute] = attributes[attribute];
        }
    }

    static addEvent(element = Expn, event, runFunction) {
        element.addEventListener(event, runFunction);
        element.expnEvents[event] = runFunction;
    }


    /**
    * 
    * @param {element} element. write the name of element in which you want to run script 
    * @param {filePath} filePath. add relative path where your script js file is located 
    */

    static addScript(element, filePath) {
        let script = document.createElement("script");
        script.src = filePath;
        element.append(script);

        script.setAttribute("class", "removable-element")
        let remove = document.querySelector(".removable-element");
        remove.parentNode.removeChild(remove)

    }


    /**
    * 
    * @param {element} element. write the name of element in which you want to run script 
    * @param {filePath} filePath. add relative path where your script js file is located 
    * this function will import the data and run functions which is written in import file
    */


    static runScript(element, filePath) {
        let script = document.createElement("script");
        element.appendChild(script);
        script.setAttribute("type", "module");
        script.setAttribute("src", filePath);
        script.setAttribute("class", "removable-import-element")

        // to remove element from dom
        let remove = document.querySelector(".removable-import-element");
        remove.parentNode.removeChild(remove)
    }

    /**
     * 
     * @param {element} element. add element which you want to insert into root element
     * @param {rootElement} rootElement . choose root element's id 
     */

    static renderInto(element = Expn, parentElement = Expn) {
        parentElement.append(element);
        element.expnRoot = parentElement;
    }

    /**
     * 
     * @param {element} element. add element which you want to insert into root element
     * @param {rootElement} rootElement . choose root element's id 
     */

    static render(element = Expn, rootElement) {
        let root = document.getElementById(rootElement);
        element.expnRoot = root;
        root.append(element);
    }

    static info(element) {
        console.log(element);
        console.log("Style ", element.expnStyle);
        console.log("Data : ", element.expnData);
        console.log("Root : ", element.expnRoot);
        console.log("Attribute : ", element.expnAttributes);
    }
}

export { Expn };