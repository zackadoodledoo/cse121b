
let temples = [];


function output(temples) {
    let divContainer = document.getElementById("temples")

    temples.forEach(temple => {
        let article = document.createElement("article");

        let header3 = document.createElement("h3")
        header3.innerHTML = temple.templeName;

        let header4 = document.createElement("h4")
        header4.innerHTML = temple.location;

        let header42 = document.createElement("h4")
        header42.innerHTML = temple.dedicated;

        let templeImage = document.createElement("img")
        templeImage.setAttribute("src", temple.imageUrl)
        templeImage.setAttribute("alt", temple.templeName)


        article.appendChild(header3);
        article.appendChild(header4);
        article.appendChild(header42);
        article.appendChild(templeImage);

        divContainer.appendChild(article)

    });


}


// getTemples();

let getTemples = async () => {
    let response = await fetch(
        "https://byui-cse.github.io/cse121b-course/week05/temples.json"
    );
    data = await response.json();
    output(data);
};
getTemples();



function reset() {
    document.getElementById("temples").innerHTML = "";
}

let sortBy = () => {
    reset();

    let templeFilter = document.getElementById("sortBy").value;

    switch (templeFilter) {
        case "templeNameAscending":
            output(
                data.sort((t1, t2) => {
                    let temple1 = t1.templeName;
                    let temple2 = t2.templeName;
                    if (temple1 < temple2) return -1;
                    else if (temple1 > temple2) return 1;
                    else return 0;
                })
            );
            break;
        case "templeNameDescending":
            output(
                data.sort((t1, t2) => {
                    let temple1 = t1.templeName;
                    let temple2 = t2.templeName;
                    if (temple1 > temple2) return -1;
                    else if (temple1 < temple2) return 1;
                    else return 0;
                })
            );
            break;

    }
};
document.querySelector("#sortBy").addEventListener("change", sortBy);