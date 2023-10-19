import { getColonizationLevel } from './getColonizationLevel.js';
import { getPhysicalBookIncluded } from '../validation/getPhysicalBookIncluded.js';

const PERIPHERY = import.meta.env.VITE_PERIPHERY_PRICE;
const PERIPHERY_BOOK_PRICE = import.meta.env.VITE_PERIPHERY_BOOK_PRICE;
const IMPERIAL_CORE_PRICE = import.meta.env.VITE_IMPERIAL_CORE_PRICE;
const IMPERIAL_CORE_BOOK_PRICE = import.meta.env.VITE_IMPERIAL_CORE_BOOK_PRICE;

const calculatePrice = () => {
    let colonisationLevel = getColonizationLevel();
    let bookSelected = getPhysicalBookIncluded();

    if (bookSelected) {
        if (colonisationLevel >= 50) {
            return Number(IMPERIAL_CORE_PRICE) + Number(IMPERIAL_CORE_BOOK_PRICE);
        } else {
            return Number((Number(PERIPHERY) + Number(PERIPHERY_BOOK_PRICE)).toFixed(4));
        }
    } else {
        return colonisationLevel >= 50 ? Number(IMPERIAL_CORE_PRICE) : Number(PERIPHERY);
    }
};

const replaceRevealPriceButtonWithActualPrice = (revealedPrice) => {
    let button = document.getElementById('revealPriceButton');
    if (button) {
        button.innerHTML = `Price: ${revealedPrice} ETH`;
    }
};
function replaceRevealPriceButtonWithActualPriceReverse(){
    let revealPriceButton = '<button class="revealPrice" id="revealPriceButton" onclick="revealPrice()">Reveal price</button>';
    let revealPriceDiv = document.getElementById('revealPriceDiv');
    if(revealPriceDiv){
        revealPriceDiv.innerHTML = revealPriceButton;
    }
}
const toggleElementState = (elementId, state) => {
    let elem = document.getElementById(elementId);
    if (elem) {
        elem.disabled = !state;
    }
};

const revealPrice = () => {
    let price = calculatePrice();
    replaceRevealPriceButtonWithActualPrice(price);
};

// Attaching the function to the window object (keep this if required by other scripts outside the module)
window.revealPrice = revealPrice;

export {
    revealPrice,
    calculatePrice as getFinalPrice,  // Renamed to keep the previous functionality intact
    toggleElementState as enableSlider,  // Use true as second argument
    toggleElementState as enableCheckbox, // Use true as second argument
    replaceRevealPriceButtonWithActualPriceReverse // No changes made
};
