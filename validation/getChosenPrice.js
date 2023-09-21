function getChosenPrice() {
    const checkbox = document.querySelector('#priceTiers input[type="checkbox"]:checked');
    if (checkbox) {
        if(checkbox.checked){
            return true;
        }
        else{
            return false;
        }
    } else {
        console.log('Checkbox is not selected.');
        return false;
    }
}
export {getChosenPrice}