import { blurAndPreventScroll, disableBlurAndEnableScroll } from "./blurAndPreventScrolling.js";

function toggleContentVisibility(currentId, nextId) {
    let currentElement = document.getElementById(currentId);
    if (currentElement) {
        currentElement.style.display = "none";
        disableBlurAndEnableScroll();

        let nextElement = document.getElementById(nextId);
        if (nextElement) {
            nextElement.style.display = "block";
            blurAndPreventScroll();
        }
    }
}

function setButtonListener(buttonId, currentContentId, nextContentId) {
    let button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener("click", function() {
            toggleContentVisibility(currentContentId, nextContentId);
        });
    }
}

function initiateAboutOverlayLogic() {
    // Initialize next buttons
    for (let i = 1; i <= 3; i++) {
        setButtonListener(`aboutOverlayNext${i}`, `aboutContent${i}`, `aboutContent${i+1}`);
    }

    // Initialize previous buttons
    for (let i = 2; i <= 4; i++) {
        setButtonListener(`aboutOverlayPrevious${i}`, `aboutContent${i}`, `aboutContent${i-1}`);
    }

    // Special handling for "Let's Go" button
    let letsGoButton = document.getElementById("aboutOverlayLetsGo");
    if (letsGoButton) {
        letsGoButton.addEventListener("click", function() {
            let aboutOverlayContent = document.getElementById("aboutOverlay");
            if (aboutOverlayContent) {
                aboutOverlayContent.style.display = "none";
                disableBlurAndEnableScroll();
            }
        });
    }
}

export { initiateAboutOverlayLogic };
