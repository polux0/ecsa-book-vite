import { getBenefitBasedOnId } from "../util/getBenefitBasedOnId.js";
import { insertBenefitByIdAndOpenBenefitsOverlay } from "./insertBenefitByIdAndOpenBenefitsOverlay";
import { disableBlurAndEnableScroll } from "./blurAndPreventScrolling.js";

function closeCongratzAndOpenBenefitById(id) {
    let congratzOverlay = document.getElementById("congratzOverlay");
    if (congratzOverlay) {
        congratzOverlay.style.display = "none";
        disableBlurAndEnableScroll();
    }
    if (id) {
        insertBenefitByIdAndOpenBenefitsOverlay(getBenefitBasedOnId(id - 1));
    }
}

export { closeCongratzAndOpenBenefitById };