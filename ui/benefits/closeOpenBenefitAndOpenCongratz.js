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
    if (localStorage.getItem('pbi') == false) {
        console.log('this should not modify benefits!');
        modifyBenefits();
    }   
    hideElementAndEnableScroll("benefit1Overlay");
    hideElementAndEnableScroll("benefit1OverlayClose");
    hideElementAndEnableScroll("benefit1OverlayContent");
    openCongratzOverlay();
}

export { closeOpenBenefitAndOpenCongratz };
