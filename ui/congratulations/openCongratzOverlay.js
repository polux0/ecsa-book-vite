import { modifyBenefits } from '../benefits/modifyBenefits';
import { blurAndPreventScroll } from "../../ux/blurAndPreventScrolling.js";

const openCongratzOverlay = (physicalBookIncluded) => {
    // Determine if modifications are needed
    checkAndModifyBenefits(physicalBookIncluded);
    // Display the congratz overlay
    displayOverlayElements();
};

const checkAndModifyBenefits = (physicalBookIncluded) => {
    const pbiFromLocalStorage = localStorage.getItem('pbi');

    if (physicalBookIncluded == false || pbiFromLocalStorage == false) {
        console.log('physicalBookIncluded:', physicalBookIncluded);
        console.log('pbi:', pbiFromLocalStorage);
        modifyBenefits();
    } else {
        console.log("Physical book is included:", physicalBookIncluded);
    }
};

const displayOverlayElements = () => {
    const congratzOverlay = document.getElementById('congratzOverlay');
    if (congratzOverlay) {
        congratzOverlay.style.display = "block";
        blurAndPreventScroll();
    }

    const congratzOverlayClose = document.getElementById('congratzOverlayClose');
    if (congratzOverlayClose) {
        congratzOverlayClose.style.display = "block";
    }

    const congratzOverlayContent = document.getElementById('congratzContent');
    if (congratzOverlayContent) {
        congratzOverlayContent.style.display = "flex";
    }

    const congratzMessage = document.getElementById('congratzMessage');
    if (congratzMessage) {
        congratzMessage.style.display = "block";
    }
};

export { openCongratzOverlay };
