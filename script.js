// ----------------------------
// Variables
// ----------------------------

// Tracks whether dark mode is on or off
let darkModeIsOn = false;

// ----------------------------
// Functions
// ----------------------------

// Switches between light and dark mode
function togglePageColors() {

    // If the page is currently light
    if (darkModeIsOn === false) {

        // Turn on dark mode
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        // Remember that dark mode is now on
        darkModeIsOn = true;

    } else {

        // Turn off dark mode (go back to light)
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        // Remember that dark mode is now off
        darkModeIsOn = false;
    }
}
