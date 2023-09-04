const revertMintingAnimation = async function(tokenId) {
const mintingError = document.getElementById('tiersErrorMessage');
const buttons = document.querySelectorAll(`#publishUnit${tokenId}`);
buttons.forEach(function(button) {
        if(button) {
            button.innerHTML = `publish unit #${tokenId}`;
        } else {
            console.warn(`Button with ID ${button} not found.`);
        }
    });

}
export {revertMintingAnimation} 