
function getColonizationLevel(){
    let slider = document.getElementById('colonizationSlider');
    if(slider){
        console.log('logging colonization level:', slider.value);
        return slider.value;
    }
    else{
        console.warn("Could not find colonization slider");
    }
}
export { getColonizationLevel};