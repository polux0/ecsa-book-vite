import { getColonizationLevel } from './getColonizationLevel.js';
import { getChosenPrice } from '../validation/getChosenPrice.js';

// this should become enviornment variables
let colonizedPrice = 0.005;
let colonizedBookPrice = 0.035;
let imperialCorePrice = 0.01;
let imperialCoreBookPrice = 0.07;
function calculateRevealPrice(){

    disableSlider();
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
    return finalPrice;

}
function replaceRevealPriceButtonWithActualPrice(revealedPrice){
    let revealPriceDiv = document.getElementById('revealPriceDiv');
    let revealPriceButton = document.getElementById('revealPriceButton');
    if(revealPriceDiv){
        if(revealPriceButton){
            revealPriceDiv.removeChild(revealPriceButton);
            revealPriceDiv.innerHTML = `<p class="revealedPriceParagraph">Price: ${revealedPrice}</p>`;
        }
    }
}
function replaceRevealPriceButtonWithActualPriceReverse(){
    let revealPriceButton = '<button class="revealPrice" id="revealPriceButton" onclick="revealPrice()">Reveal price</button>';
    let revealPriceDiv = document.getElementById('revealPriceDiv');
    if(revealPriceDiv){
        revealPriceDiv.innerHTML = revealPriceButton;
    }
}
function disableSlider(){
    let slider = document.getElementById('colonizationSlider');
    if(slider){
        slider.disabled = true;
    }
}
function enableSlider(){
    let slider = document.getElementById('colonizationSlider');
    if(slider){
        slider.disabled = false;
    }
}

function revealPrice(){
    let price = calculateRevealPrice();
    replaceRevealPriceButtonWithActualPrice(price);
}

window.revealPrice = revealPrice;
export {revealPrice, enableSlider, replaceRevealPriceButtonWithActualPriceReverse};
