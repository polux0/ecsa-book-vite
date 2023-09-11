const waitingForTransactionToInitiate = async function() {
    const tiersSubmitButton = document.getElementById('tiersSubmitButton');
    if(tiersSubmitButton){
        tiersSubmitButton.innerHTML = '<i class="fa fa-cog fa-spin"></i>';
    }
}
const revertWaitingForTransactionToInitiate = async function() {
    const tiersSubmitButton = document.getElementById('tiersSubmitButton');
    if(tiersSubmitButton){
        tiersSubmitButton.innerHTML = 'Mint';
    }
}
export {waitingForTransactionToInitiate, revertWaitingForTransactionToInitiate};
