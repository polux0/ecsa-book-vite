import { getBenefitBasedOnId } from "../util/getBenefitBasedOnId.js";
import { insertBenefitByIdAndOpenBenefitsOverlay } from "./insertBenefitByIdAndOpenBenefitsOverlay";

function closeCongratzAndOpenBenefitById(id) {
    
    let congratzOverlayClose = document.getElementById("congratzOverlayClose");
    if(congratzOverlayClose){
        congratzOverlayClose.click();
    }
    if(id){
        insertBenefitByIdAndOpenBenefitsOverlay(getBenefitBasedOnId(id-1));
    }

}
export {closeCongratzAndOpenBenefitById}