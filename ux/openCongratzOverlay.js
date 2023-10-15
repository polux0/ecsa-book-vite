import {modifyBenefits} from './modifyBenefits';
import { blurAndPreventScroll, disableBlurAndEnableScroll } from "./blurAndPreventScrolling.js";

const openCongratzOverlay = async function(physicalBookIncluded) {
    if (physicalBookIncluded == false || localStorage.getItem('pbi') == false){
        console.log('physicalBookIncluded: ', physicalBookIncluded);
        console.log('pbi: ', localStorage.getItem('pbi'));
        modifyBenefits(); 
    }
    else{
        console.log("physicalBook is included! : ", physicalBookIncluded);
    }
    const congratzOverlay = document.getElementById('congratzOverlay');
    if(congratzOverlay){
        congratzOverlay.style.display = "block";
        blurAndPreventScroll();
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