function getPhysicalBookIncluded() {
    const checkbox = document.querySelector('#priceTiers input[type="checkbox"]:checked');
    if (checkbox) {
        if(checkbox.checked){
            console.log('1');
            return true;
        }
        else{
            console.log('2');
            return false;
        }
    } else {
        console.log('Checkbox is not selected.');
        return false;
    }
}
export {getPhysicalBookIncluded}