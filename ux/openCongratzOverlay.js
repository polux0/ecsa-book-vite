const openCongratzOverlay = async function() {
    const congratzOverlay = document.getElementById('congratzOverlay');
    if(congratzOverlay){
        congratzOverlay.style.display = "block";
    }
    const congratzOverlayClose = document.getElementById('congratzOverlayClose');
    if(congratzOverlayClose){
        congratzOverlayClose.style.display = "block";
    }
    const congratzOverlayContent = document.getElementById('congratzOverlayContent');
    if(congratzOverlayContent){
        congratzOverlayContent.style.display = "block";
    }
    const congratzMessage = document.getElementById('congratzMessage');
    if(congratzMessage){
        // enable message to be seen
        congratzMessage.style.display = "block";   
    }
}
export {openCongratzOverlay} 