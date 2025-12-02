
let backgroundInput = document.getElementById("bg-color");
let fontColorInput = document.getElementById("fg-color");
let fontInput = document.getElementById("font");
let fontSizeInput = document.getElementById("font-size");
let fontStretchInput = document.getElementById("font-stretch");
let imageInput = document.getElementById("image");
let textInput = document.getElementById("text");
let button = document.getElementById("print");


let poster = document.getElementById("poster");
let posterText = document.getElementById("poster-text");
let posterImage = document.getElementById("poster-image");

// background color changes
backgroundInput.addEventListener("input", function () {
    let color = this.value;
    poster.style.backgroundColor = color;
});

// text color changes
fontColorInput.addEventListener("input", function () {
    let color = this.value;
    posterText.style.color = color;
});

// font family changes
fontInput.addEventListener("change", function () {
    let selectedFont = this.value;

    if (selectedFont) {
        posterText.style.fontFamily = `"${selectedFont}", system-ui, sans-serif`;
    } else {
        posterText.style.fontFamily = `"Codystar", system-ui, sans-serif`;
    }
});

// font sizes changes
fontSizeInput.addEventListener("input", function () {
    let size = this.value || 32;
    posterText.style.fontSize = size + "px";
});


fontStretchInput.addEventListener("input", function () {
    let stretch = this.value || 1;
    posterText.style.transform = "scaleX(" + stretch + ")";
});


imageInput.addEventListener("change", function () {
    let img = this.value;

    if (img === "") {
        
        return;
    }

    posterImage.src = img; // change image source
});

// when the text input changes, update the poster text
textInput.addEventListener("input", function () {
    let text = this.value.trim();

    if (text === "") {
        posterText.textContent = "Baseball Harmonic Poster";
    } else {
        posterText.textContent = text;
    }
});

// when the button is clicked, print the page
button.addEventListener("click", function () {
    window.print();
});
