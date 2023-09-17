import { closeOpenBenefitAndOpenCongratz } from "./closeOpenBenefitAndOpenCongratz.js";

const insertBenefitByIdAndOpenBenefitsOverlay = async function(content) {
    const benefitsOverlay = document.getElementById('benefit1Overlay');
    if(benefitsOverlay){
        benefitsOverlay.style.display = "flex";
    }
    const benefitsOverlayClose = document.getElementById('benefit1OverlayClose');
    if(benefitsOverlayClose){
        benefitsOverlayClose.style.display = "block";
    }
    const benefitsOverlayContent = document.getElementById('benefit1OverlayContent');
    if(benefitsOverlayContent){
        benefitsOverlayContent.innerHTML = content;
        benefitsOverlayContent.innerHTML += '<button class="aboutOverlayBack" id="benefitOverlayClose">← back</button>';
        let benefitOverlayClose = document.getElementById('benefitOverlayClose');
        if(benefitOverlayClose){
            console.log('benefitOverlayClose?', benefitOverlayClose);
            benefitOverlayClose.addEventListener('click', function(){
                closeOpenBenefitAndOpenCongratz();   
            });
        }
        benefitsOverlayContent.style.display = "flex";
    }
}
export {insertBenefitByIdAndOpenBenefitsOverlay} 