import { getBenefitBasedOnId } from "../benefits/getBenefitBasedOnId.js";
import { insertBenefitByIdAndOpenBenefitsOverlay } from "../benefits/insertBenefitByIdAndOpenBenefitsOverlay.js";
import { disableBlurAndEnableScroll } from "../../ux/blurAndPreventScrolling.js";

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