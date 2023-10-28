import { getFinalPrice } from '../ux/revealPrice';
function initiateListenersForSliderAndBookIncluded (){
    console.log('this happened');
    let slider = document.getElementById('colonizationSlider');
    let checkbox = document.getElementById('physicalBookCheckbox');

    slider.addEventListener('input', function(){
        let finalPrice = getFinalPrice();
        let revealPriceButton = document.getElementById('revealPriceButton');
        if(revealPriceButton){
            revealPriceButton.innerHTML = `Price: ${finalPrice} ETH`;
        }
    });
    checkbox.addEventListener('change', function(){
        let finalPrice = getFinalPrice();
        let revealPriceButton = document.getElementById('revealPriceButton');
        if(revealPriceButton){
            revealPriceButton.innerHTML = `Price: ${finalPrice} ETH`;
        }
    });

}
export {initiateListenersForSliderAndBookIncluded}