const technology = [
    {
        title: "Linux",
        "data": "As the digital landscape hurtles towards new horizons, Linux remains at the forefront of innovation. Its adaptability and the relentless drive of its community make it well-positioned to tackle the challenges of tomorrow, from artificial intelligence and the Internet of Things to the exploration of new frontiers in quantum computing and beyond.",
    },
    {
        "title": "Programming",
        "data": "So, programming is not just about clicking buttons or dragging icons. It's about speaking the language of machines, crafting instructions that dance within their silicon minds. It's about wielding the power of logic and abstraction to shape the digital world to our will. As the bridge between human and machine, programming languages empower us to push the boundaries of what's possible, one line of code at a time."
    },
    {
        "title": "Artificial Intelligence",
        "data": "Artificial intelligence (AI) has transcended its sci-fi origins to become a transformative force shaping our world. It's no longer just about sentient robots; it's about algorithms mimicking human intelligence to solve complex problems in diverse fields."
    },
    {
        "title": "Frameworks",
        "data": "Imagine building a house. Bricks and mortar alone won't suffice; you need a framework, a pre-existing structure that guides construction, ensures stability, and accelerates the process. In the realm of software development, frameworks fulfill a similar role."
    }
];


const sanatan = [
    {
        title: "Explore Sanatan",
        "data": "Explore Sanatana"
    },
    {
        title: "Scientific Study of Sanatan",
    },
    {
        title: "inspirational Sanatan",
    }
];

const news = [
    {
        title: "International",
    },
    {
        title: "National",
    },
    {
        title: "Premium",
    }
];

// ==========================

// =========== various index for various field

let technologyIndex = 0;

let sanatanIndex = 0;


let index = 0;

const load = function (currentIndex = 0, arrayData = []) {

    // document.querySelector(".container-slide").innerHTML = arrayData[index]["image"];

    document.querySelector(".container-text").innerHTML = arrayData[index]["data"];

    if (index < arrayData.length - 1) {
        index++;
    }
    else {
        index = 0;
    }

}


    
export { technology, sanatan, index, load }