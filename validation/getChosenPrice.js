function getChosenPrice() {
    const selectedTier = document.querySelector('#priceTiers input[type="radio"]:checked');
    if (selectedTier) {
        return selectedTier.value;
    }
    return null;
}
export {getChosenPrice}