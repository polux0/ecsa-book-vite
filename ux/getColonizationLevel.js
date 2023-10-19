function getColonizationLevel() {
    const slider = document.getElementById('colonizationSlider');

    if (!slider) {
        console.warn("Could not find slider");
        return;
    }

    return slider.value;
}

export { getColonizationLevel };
