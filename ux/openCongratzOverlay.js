import {modifyBenefits} from './modifyBenefits';

const openCongratzOverlay = async function(physicalBookIncluded) {
    if (!physicalBookIncluded){
        modifyBenefits(); 
    }
    const congratzOverlay = document.getElementById('congratzOverlay');
    if(congratzOverlay){
        congratzOverlay.style.display = "block";
    }
    const congratzOverlayClose = document.getElementById('congratzOverlayClose');
    if(congratzOverlayClose){
        congratzOverlayClose.style.display = "block";
    }
    const congratzOverlayContent = document.getElementById('congratzContent');
    if(congratzOverlayContent){
        congratzOverlayContent.style.display = "flex";
    }
    const congratzMessage = document.getElementById('congratzMessage');
    if(congratzMessage){
        // enable message to be seen
        congratzMessage.style.display = "block";   
    }
}
export {openCongratzOverlay} 