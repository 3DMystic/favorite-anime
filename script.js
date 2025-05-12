//new list items//
const uL = document.querySelector(".list");
const itemName = ["Suzume", "Weathering With You", "Death Note", "Fruits Basket", "Stranger By the Shore", "Edge Runners"];

function createListItem() {
    for (let item = 1; item < itemName.length; item++) {
        let li = document.createElement("li");
        li.textContent = itemName[item];
        uL.appendChild(li);
    };
};
//createListItem();

//event listeners//
const listItems = document.getElementsByTagName("li");

for (let item of listItems) {
    item.addEventListener("click", function() {
        item.style.backgroundColor = "blue";
        item.style.color = "red";
        item.textContent = "Watched";
    });
};
//add new list item//
const addButton = document.querySelector(".add-btn");
const inputField = document.querySelector(".input");

let maxClicks = 5;
let clickCount = 0;

addButton.addEventListener("click", function() {
    if (inputField.value.length < 1) {
        window.alert("Please enter a movie name.");
        return;
    } else if (clickCount < maxClicks) {
    let li = document.createElement("li");
    li.textContent = inputField.value;
    uL.appendChild(li);
    inputField.value = "";
        
    li.addEventListener("click", function() {
        li.style.backgroundColor = "blue";
        li.style.color = "red";
        li.textContent = "Watched";
    });
    clickCount++;
    //alert("You have " + (maxClicks - clickCount) + " clicks left.");  
    } else {
        window.alert("You have reached the maximum number of clicks.");
        addButton.disabled = true;
    }
});