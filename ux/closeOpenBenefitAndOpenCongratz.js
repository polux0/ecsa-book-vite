import { openCongratzOverlay } from "./openCongratzOverlay";
function closeOpenBenefitAndOpenCongratz() {
    let benefit1Overlay = document.getElementById("benefit1Overlay");
    let benefit1OverlayClose = document.getElementById("benefit1OverlayClose");
    let benefit1OverlayContent = document.getElementById("benefit1OverlayContent");
    if(benefit1Overlay){
        benefit1Overlay.style.display = "none";
    }
    if(benefit1OverlayClose){
        benefit1OverlayClose.style.display = "none";
    }
    if(benefit1OverlayContent){
        benefit1OverlayContent.style.display = "none";
    }
    openCongratzOverlay();
}
export {closeOpenBenefitAndOpenCongratz}