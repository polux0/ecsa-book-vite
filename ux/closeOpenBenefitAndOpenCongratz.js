import { openCongratzOverlay } from "./openCongratzOverlay";
import { disableBlurAndEnableScroll } from "./blurAndPreventScrolling.js";
import { modifyBenefits} from "./modifyBenefits.js";
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
        modifyBenefits();  // Ensure you have imported or defined this function
    }   
    hideElementAndEnableScroll("benefit1Overlay");
    hideElementAndEnableScroll("benefit1OverlayClose");
    hideElementAndEnableScroll("benefit1OverlayContent");
    openCongratzOverlay();
}

export { closeOpenBenefitAndOpenCongratz };
