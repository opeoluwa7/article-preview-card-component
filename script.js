let button = document.getElementById("shareBtn");
let buttonSvgPath = button.querySelector("path");
let profileInfo = document.getElementById("profileInfo");
let info = document.querySelector("#info");
let shareContainer = document.getElementById("shareContainer")
let socialIcons = document.getElementById("socialIcons");
const defaultBg = window.getComputedStyle(button).getPropertyValue("background-color");
const newBg = "rgb(109,127,151)";
const veryDb = "rgb(72,85,106)";
const fillColor = "rgb(110,128,152)";
buttonSvgPath.setAttribute("fill", fillColor);

const largerScreen = window.matchMedia("(min-width: 40rem)");

button.addEventListener("click", handleButtonToggle);

function handleButtonToggle() {
    if (largerScreen.matches) {
        largerScreenToggle();
    } else {
        handleMobileToggle();
    }
}

function handleMobileToggle() {
    if (button.style.backgroundColor === defaultBg) {
        button.style.backgroundColor = newBg;
        buttonSvgPath.setAttribute("fill", "white");
        profileInfo.classList.add("active");
        info.style.display = "none";
        shareContainer.classList.add("active2");
        socialIcons.style.display = "flex";

    } else {
        button.style.backgroundColor = defaultBg;
        buttonSvgPath.setAttribute("fill", fillColor);
        profileInfo.classList.remove("active");
        info.style.display = "flex";
        shareContainer.classList.remove("active2");
        socialIcons.style.display = "none";
    }
}

function largerScreenToggle() {
    if (button.style.backgroundColor === defaultBg) {
        button.style.backgroundColor = newBg;
        buttonSvgPath.setAttribute("fill", "white");
        profileInfo.classList.add("active");
        shareContainer.classList.add("active2");
        socialIcons.style.display = "flex";
        socialIcons.classList.add("active3");
    } else {
        button.style.backgroundColor = defaultBg;
        buttonSvgPath.setAttribute("fill", fillColor);
        profileInfo.classList.remove("active");
        shareContainer.classList.remove("active2");
        socialIcons.style.display = "none";
        socialIcons.classList.remove("active3");
    }
}