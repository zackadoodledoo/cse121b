/* LESSON 3 - Programming Tasks */

/* Profile Object  */




/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


/* LESSON 3 - Programming Tasks */

/* Profile Object  */


/* Populate Profile Object with placesLive objects */

/* DOM Manipulation - Output */

/* Name */
info['name'] = "Zackary Sinclair";

/* Photo with attributes */

info['photo'] = "images/Mexico.jpg";

let info = {
    name: "Zackary Sinclair",
    photo: "images/Mexico.jpg",
    favoriteFoods:[" Burritos", "Sushi", "Tacos", "Burgers"],
    hobbies: ["Go hiking", "Go swimming", "Play games"],
    placesLived: [{
        place: "Sacramento",
        timeLived: 30
    },
    {
        place: "Rexburg",
        timeLived: 2
    }
]
}
/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */



// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
name_out = document.getElementById("name");
name_out.innerHTML = info.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photo_out = document.getElementById("photo");
photo_out.setAttribute("src", info.photo);
photo_out.width = 240;
photo_out.height = 300;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
foodList = info.favoriteFoods;

for (let i = 0; i < foodList.length; i++) {
    let list = document.createElement('li');
    list.innerText = foodList[i];
    document.querySelector('#favorite-foods').appendChild(list);
}

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
hobbiesList = info.hobbies;

for (let i = 0; i < hobbiesList.length; i++) {
    let list = document.createElement('li');
    list.innerText = hobbiesList[i];
    document.querySelector('#hobbies').appendChild(list);
}

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
let placesOut = "";
place = info.placesLived
place.forEach(countPlaces)

document.getElementById("places-lived").innerHTML = placesOut;

function countPlaces(place) {
    placesOut += "<dt>" + place.place + "</dt>" + "<dd>" + place.timeLived + " years" + "</dt>";
}