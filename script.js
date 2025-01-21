
const profileBox = document.getElementById("profile-info");
const profile = document.getElementById("profile");
const share = document.getElementById("share");
const shareBtn = document.getElementById("share-button");
const socialIcons = document.getElementById("social-icons");
const shareIcon = document.getElementById("share-icon").querySelector("path");
const newBg = 'rgb(72,85,106)';
const defaultBg = 'transparent';
const lightGb = 'rgb(236,242,248)';
const desaturatedDb = 'rgb(109,127,151)';
const shareIconColor = 'rgb(110,128,152)';
const white = 'rgb(255,255,255)';

let isBgToggled = false;




// Media Queries
const smallScreenQuery = window.matchMedia("(max-width: 600px)");
const mediumScreenQuery = window.matchMedia("(min-width: 601px) and (max-width: 1024px)");
const largeScreenQuery = window.matchMedia("(min-width: 1025px) and (max-width: 1500px)");
const veryLargeScreenQuery = window.matchMedia("(min-width: 1501px)");


// Add event listeners for media query changes
smallScreenQuery.addEventListener("change", handleScreenChanges);
mediumScreenQuery.addEventListener("change", handleScreenChanges);
largeScreenQuery.addEventListener("change", handleScreenChanges);
veryLargeScreenQuery.addEventListener("change", handleScreenChanges);


// Handle changes in screen size and apply specific toggle functions
function handleScreenChanges() {

    // Remove any existing event listener to prevent multiple bindings
    shareBtn.removeEventListener("click", smallScreenToggle);
    shareBtn.removeEventListener("click", mediumScreenToggle);
    shareBtn.removeEventListener("click", largeScreenToggle);
    shareBtn.removeEventListener("click", veryLargeScreenToggle);

    if (smallScreenQuery.matches) {

        profileBox.style.width = "100%";
        shareBtn.style.position = "relative";
        shareBtn.style.right = "20px";
        share.style.marginLeft = "35px";
        shareBtn.addEventListener("click", smallScreenToggle);


    } else if (mediumScreenQuery.matches) {
        shareBtn.addEventListener("click", mediumScreenToggle);
    } else if (largeScreenQuery.matches) {
        shareBtn.addEventListener("click", largeScreenToggle);
    } else if (veryLargeScreenQuery.matches) {
        shareBtn.addEventListener("click", veryLargeScreenToggle);
    }
}


// Function to toggle for small screens
function smallScreenToggle() {
    if (isBgToggled) {
        profileBox.style.backgroundColor = defaultBg;
        profile.style.display = "flex";
        socialIcons.style.display = "none";
        shareBtn.style.backgroundColor = lightGb;
        shareIcon.setAttribute("fill", shareIconColor);
        shareBtn.style.position = "relative";
        shareBtn.style.left = "";
        shareBtn.style.right = "20px";
    } else {
        profileBox.style.backgroundColor = newBg;
        profile.style.display = "none";
        share.style.maxWidth = "100%";
        socialIcons.style.display = "flex";
        profileBox.style.borderBottomLeftRadius = "10px";
        profileBox.style.borderBottomRightRadius = "10px";
        shareBtn.style.backgroundColor = desaturatedDb;
        shareIcon.setAttribute("fill", white);
        shareBtn.style.position = "fixed";
        shareBtn.style.right = "70px";
    }
    isBgToggled = !isBgToggled;
}

//Function to toggle for tablet and medium screens
function mediumScreenToggle() {
    if (isBgToggled) {
        profileBox.style.backgroundColor = defaultBg;
        profile.style.display = "flex";
        socialIcons.style.display = "none";
        shareBtn.style.backgroundColor = lightGb;
        shareIcon.setAttribute("fill", shareIconColor);
        shareBtn.style.position = "relative";
        shareBtn.style.left = "";
        shareBtn.style.right = "";
        shareBtn.style.bottom = "";
        share.style.display = 'flex';
        share.style.alignItems = 'center';
        share.style.marginLeft = "";
    } else {
        profileBox.style.backgroundColor = newBg;
        profile.style.display = "none";
        socialIcons.style.display = "flex";
        profileBox.style.borderBottomRightRadius = "10px";
        shareBtn.style.backgroundColor = desaturatedDb;
        shareIcon.setAttribute("fill", white);
        shareBtn.style.position = "fixed";
        shareBtn.style.right = "160px";
        share.style.display = 'flex';
        share.style.alignItems = 'center';
        share.style.marginLeft = "5px";
    }
    isBgToggled = !isBgToggled;
}

//Function to toggle for desktop and larger screens
function largeScreenToggle() {
    if (isBgToggled) {
        profileBox.style.backgroundColor = defaultBg;
        profile.style.display = "flex";
        socialIcons.style.display = "none";
        shareBtn.style.backgroundColor = lightGb;
        shareIcon.setAttribute("fill", shareIconColor);
        shareBtn.style.position = "relative";
        shareBtn.style.left = "";
        shareBtn.style.right = "";
        shareBtn.style.bottom = "";
        share.style.display = 'flex';
        share.style.alignItems = 'center';
        share.style.marginLeft = "";
    } else {
        socialIcons.style.backgroundColor = newBg;
        profile.style.display = "flex";
        socialIcons.style.display = "flex";
        profileBox.style.borderBottomRightRadius = "10px";
        shareBtn.style.backgroundColor = desaturatedDb;
        shareIcon.setAttribute("fill", white);
        shareBtn.style.position = "fixed";
        shareBtn.style.right = "170px";
        share.style.display = 'flex';
        share.style.alignItems = 'center';
        share.style.marginLeft = "5px";
        socialIcons.style.marginBottom = '150px';
        socialIcons.style.paddingTop = '15px';
        socialIcons.style.paddingBottom = '15px';
        socialIcons.style.paddingLeft = '50px';
        socialIcons.style.paddingRight = '50px';
        socialIcons.style.position = 'fixed'
        socialIcons.style.right = "70px";
        socialIcons.style.borderRadius = '10px';
        socialIcons.style.gap = '20px';
    }
    isBgToggled = !isBgToggled;
}

//Function for very large screens
function veryLargeScreenToggle() {
    if (isBgToggled) {
        profileBox.style.backgroundColor = defaultBg;
        profile.style.display = "flex";
        socialIcons.style.display = "none";
        shareBtn.style.backgroundColor = lightGb;
        shareIcon.setAttribute("fill", shareIconColor);
        shareBtn.style.position = "relative";
        shareBtn.style.left = "";
        shareBtn.style.right = "";
        shareBtn.style.bottom = "";
        share.style.display = 'flex';
        share.style.alignItems = 'center';
        share.style.marginLeft = "";
    } else {
        socialIcons.style.backgroundColor = newBg;
        profile.style.display = "flex";
        socialIcons.style.display = "flex";
        profileBox.style.borderBottomRightRadius = "10px";
        shareBtn.style.backgroundColor = desaturatedDb;
        shareIcon.setAttribute("fill", white);
        shareBtn.style.position = "fixed";
        shareBtn.style.right = "200px";
        share.style.display = 'flex';
        share.style.position = "relative";
        share.style.alignItems = 'center';
        share.style.marginLeft = "5px";
        socialIcons.style.marginBottom = '150px';
        socialIcons.style.paddingTop = '15px';
        socialIcons.style.paddingBottom = '15px';
        socialIcons.style.paddingLeft = '50px';
        socialIcons.style.paddingRight = '50px';
        socialIcons.style.position = 'fixed'
        socialIcons.style.right = "70px";
        socialIcons.style.borderRadius = '10px';
        socialIcons.style.gap = '20px';
    }
    isBgToggled = !isBgToggled;
}

// Initial check to set up the correct toggle function
handleScreenChanges();