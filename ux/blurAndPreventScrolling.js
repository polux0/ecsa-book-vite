// Utility function to apply styles to an element
function applyStylesToElement(elementId, styles) {
    let element = document.getElementById(elementId);
    if (element) {
        for (let style in styles) {
            element.style[style] = styles[style];
        }
    } else {
        console.warn(`could not find element with id ${elementId}`);
    }
}

function blurAndPreventScroll() {
    applyStylesToElement('bookContent', {
        filter: 'blur(5px)',
        overflow: 'hidden'
    });
    applyStylesToElement('bookIndex', {
        filter: 'blur(5px)'
    });
    applyStylesToElement('footNotesAndAudiobook', {
        filter: 'blur(5px)'
    });
}

function disableBlurAndEnableScroll() {
    applyStylesToElement('bookContent', {
        filter: '',
        overflow: ''
    });
    applyStylesToElement('bookIndex', {
        filter: ''
    });
    applyStylesToElement('footNotesAndAudiobook', {
        filter: 'none'
    });
}

export { blurAndPreventScroll, disableBlurAndEnableScroll };
