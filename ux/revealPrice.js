import { getColonizationLevel } from './getColonizationLevel.js';
import { getChosenPrice } from '../validation/getChosenPrice.js';

let colonizedPrice = 0.005;
let colonizedBookPrice = 0.035;
let imperialCorePrice = 0.01;
let imperialCoreBookPrice = 0.07;
function revealPrice(){

    // disable slider
    let slider = document.getElementById('colonizationSlider');
    if(slider){
        slider.disabled = true;
    }
    let colonisationLevel = getColonizationLevel();
    let bookSelected = getChosenPrice();
    let finalPrice;

    if(bookSelected){
        if(colonisationLevel >= 50){
            finalPrice = imperialCorePrice + imperialCoreBookPrice;
        }
        else{
            finalPrice = colonizedPrice + colonizedBookPrice;
        }
    }
    else{
        if(colonisationLevel >= 50){
            finalPrice = imperialCorePrice;
        }
        else{
            finalPrice = colonizedPrice;
        }
    }
    console.log("final price: ", finalPrice);

}
window.revealPrice = revealPrice;
export {revealPrice};
