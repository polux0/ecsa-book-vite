const revertTransactionInitiatedAnimation = function(tokenId) {
    const buttons = document.querySelectorAll(`.publishUnit${tokenId}`);
    buttons.forEach(function(button) {
        button.innerHTML = `publish unit #${tokenId}`;
    });
}
export {revertTransactionInitiatedAnimation}
