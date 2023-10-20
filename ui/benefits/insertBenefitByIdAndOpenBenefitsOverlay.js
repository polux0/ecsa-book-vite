import { closeOpenBenefitAndOpenCongratz } from "./closeOpenBenefitAndOpenCongratz.js";
import { copyInvitation } from "./copyInvitation.js";
import { downloadInvitations } from "./downloadInvitations";
import { modifyBenefits } from "./modifyBenefits.js";
import { blurAndPreventScroll } from "../../ux/blurAndPreventScrolling.js";
import { handleCopublisherDetails } from "../copublish/handleCopublisherDetails.js";
import { handleOrderDetails } from "./handleOrderDetails.js";

const handleOverlayDisplay = () => {
    const overlay = document.getElementById('benefit1Overlay');
    if (overlay) {
        overlay.style.display = "flex";
    }
}

const setupCloseAndBackButtons = () => {
    const closeButton = document.getElementById('benefit1OverlayClose');
    const backButton = document.getElementById('benefitOverlayClose');

    const clickHandler = () => closeOpenBenefitAndOpenCongratz();

    if (closeButton) {
        closeButton.addEventListener('click', clickHandler);
        closeButton.style.display = "block";
    }

    if (backButton) {
        backButton.addEventListener('click', clickHandler);
    }
}

const setupInvitationButtons = () => {
    const copyButton = document.getElementById("copyButton");
    const downloadButton = document.getElementById("downloadButton");

    if (copyButton) copyButton.addEventListener("click", copyInvitation);
    if (downloadButton) downloadButton.addEventListener("click", downloadInvitations);
}


const setupBenefitsLinks = () => {
    const invitationLinkElement = document.getElementById(`invitation-link1`);
    const invitation = localStorage.getItem('invitation');
    const tokenId = localStorage.getItem('tokenId');
    const elementContainingOpenSeaLink = document.getElementById('openSeaLink');
    // const ipfsBookDownloadLink = document.getElementById('ipfsBookDownloadLink');
    const dl = document.getElementById('dl');

    if (invitation && invitationLinkElement) {
        invitationLinkElement.innerHTML = invitation;
    }

    if (elementContainingOpenSeaLink && tokenId) {
        const url = import.meta.env.VITE_NETWORK == 'sepolia' ? 'testnets.opensea.io' : 'opensea.io'; 
        const finalUrl = `https://${url}/assets/${import.meta.env.VITE_NETWORK}/${import.meta.env.VITE_NFT_CONTRACT_ADDRESS}/${tokenId}`;
        elementContainingOpenSeaLink.innerHTML = finalUrl;
    }

    if (tokenId) {
        const pinnataGateway = import.meta.env.VITE_PINATA_GATEWAY;
        const resourceName = `protocols-for-postcapitalist-expression_digital-edition_${tokenId}.pdf/`;
        const accessToken = `?pinataGatewayToken=${import.meta.env.VITE_PINATA_ACCESS_TOKEN}`;
        const downloadURL = pinnataGateway + resourceName + accessToken;
        // ipfsBookDownloadLink.innerHTML = downloadURL;
        if (dl) {
            dl.href = downloadURL;
        }
    }
}

const insertBenefitByIdAndOpenBenefitsOverlay = async (content) => {
    handleOverlayDisplay();

    const benefitsOverlayContent = document.getElementById('benefit1OverlayContent');
    if (benefitsOverlayContent) {
        benefitsOverlayContent.innerHTML = content + '<button class="aboutOverlayBack" id="benefitOverlayClose">← back</button>';
        benefitsOverlayContent.style.display = "block";
        setupCloseAndBackButtons();
        blurAndPreventScroll();
    }

    setupInvitationButtons();
    if(content.includes('6. The print book published by Minor Compositions')){
        try {
            await handleOrderDetails();    
        } catch (error) {
            console.log('Could not find order details...');
        }
        
    }
    await handleCopublisherDetails();
    setupBenefitsLinks();

    if (localStorage.getItem('pbi') == false) {
        modifyBenefits();
    }
}

export { insertBenefitByIdAndOpenBenefitsOverlay };
