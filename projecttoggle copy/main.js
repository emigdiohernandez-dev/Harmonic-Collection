

let button = document.getElementById("swap-button");
let container = document.getElementById("container");
let counter = 0

button.addEventListener("click", function () {
    counter = counter + 1
    
    if (counter == 1) { //the first time they click
        container.classList.replace("field-pov", "dugout-pov");
        button.innerHTML = "Click to be on deck"
    } else if (counter == 2) {
        container.classList.replace("dugout-pov", "ondeck-pov");
        button.innerHTML = "Click to batter up"
    }
    else if (counter == 3) {
        container.classList.replace("ondeck-pov", "player-pov");
        button.innerHTML = "Click to see the field"

    } else if (counter == 4) {
        container.classList.replace("player-pov", "field-pov");
        button.innerHTML = "Click to go in the dugout"
        counter = 0
    }

});