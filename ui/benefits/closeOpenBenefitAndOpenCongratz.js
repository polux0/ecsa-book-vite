import { openCongratzOverlay } from "../congratulations/openCongratzOverlay";
import { disableBlurAndEnableScroll } from "../../ux/blurAndPreventScrolling.js";
import { modifyBenefits } from "./modifyBenefits.js";
function hideElementAndEnableScroll(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = "none";
        disableBlurAndEnableScroll();
    }
}
// transitionFromBenefitToCongratz ( should become )
function closeOpenBenefitAndOpenCongratz() {
    console.log("backButton should have been clicked!");
    if (localStorage.getItem('pbi') == false) {
        modifyBenefits();
    }   
    hideElementAndEnableScroll("benefit1Overlay");
    hideElementAndEnableScroll("benefit1OverlayClose");
    hideElementAndEnableScroll("benefit1OverlayContent");
    openCongratzOverlay();
}

export { closeOpenBenefitAndOpenCongratz };
