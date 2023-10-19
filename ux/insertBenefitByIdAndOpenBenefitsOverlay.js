import { closeOpenBenefitAndOpenCongratz } from "./closeOpenBenefitAndOpenCongratz.js";
import { copyInvitations } from "./copyInvitations.js";
import { downloadInvitations } from "./downloadInvitations";
import { insertOrder, getOrderByWallet, updateOrderByWallet } from "../db/orders.js";
import { validateOrders } from "../validation/validateOrders.js";
import { validateCopublisher } from "../validation/validateCopublisher";
import { modifyBenefits } from "./modifyBenefits.js";
import { insertCoPublisher, getCopublisherByWallet, updateCopublisher } from "../db/copublishers.js";
import { blurAndPreventScroll } from "./blurAndPreventScrolling.js";
import { updateCopublishers } from "./displayCopublishers.js";

const getWallet = () => localStorage.getItem("wallet");

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

    if (copyButton) copyButton.addEventListener("click", copyInvitations);
    if (downloadButton) downloadButton.addEventListener("click", downloadInvitations);
}

const handleOrderDetails = async () => {
    const wallet = getWallet();
    const existingOrder = await getOrderByWallet(wallet);
    const sendButton = document.getElementById("postDeliveryDetails");
    const deliveryName = document.getElementById("name");
    const deliveryMailing = document.getElementById("mailingAddress");
    const deliveryPhoneNumber = document.getElementById("phoneNumber");
    const deliveryContact = document.getElementById("contact");
    const deliveryError = document.getElementById("detailsError");
    
    if (sendButton) {
        if (existingOrder) {
            sendButton.textContent = "Update ➹";
            deliveryName.value = existingOrder.name;
            deliveryMailing.value = existingOrder.mailing_address;
            deliveryPhoneNumber.value = existingOrder.phone_number;
            deliveryContact.value = existingOrder.contact;
        }
        
        sendButton.addEventListener("click", async (event) => {
            deliveryError.style.display = "none";
            validateOrders();

            let result;
            if (existingOrder) {
                result = await updateOrderByWallet(
                    deliveryName.value.trim(),
                    deliveryMailing.value.trim(),
                    deliveryPhoneNumber.value.trim(),
                    deliveryContact.value.trim(),
                    wallet
                );
            } else {
                result = await insertOrder(
                    deliveryName.value.trim(),
                    deliveryMailing.value.trim(),
                    deliveryPhoneNumber.value.trim(),
                    deliveryContact.value.trim(),
                    wallet
                );
            }

            if (result == null) {
                sendButton.textContent = "Updated!";
            } else {
                deliveryError.innerHTML = "It seems there is an issue with the delivery, please contact us!";
                deliveryError.style.display = "block";
            }
        });
    }
}

const handleCopublisherDetails = async () => {
    const wallet = getWallet();
    const existingCopublisher = await getCopublisherByWallet(wallet);
    const postPublisherButton = document.getElementById("postPublisherButton");
    const copublisherName = document.getElementById("copublisherName");
    const copublisherError = document.getElementById("copublisherError");

    if (postPublisherButton) {
        if (existingCopublisher) {
            postPublisherButton.innerHTML = "Update ➹";
            copublisherName.value = existingCopublisher.name;
        } else {
            postPublisherButton.innerHTML = "Send ➹";
        }

        postPublisherButton.addEventListener("click", async (event) => {
            copublisherError.style.display = "none";
            validateCopublisher();
            let name = copublisherName.value;

            let result;
            if (existingCopublisher) {
                result = await updateCopublisher(wallet, name);
                if (result == null) {
                    postPublisherButton.innerHTML = "Updated!";
                    updateCopublishers(wallet, name);
                }
            } else {
                result = await insertCoPublisher(wallet, name);
            }

            if (result !== null) {
                copublisherError.innerHTML = "It seems there is an issue with updating copublisher name, please contact us!";
                copublisherError.style.display = "block";
            }
        });
    }
}

const setupBenefitsLinks = () => {
    const invitationLinkElement = document.getElementById(`invitation-link1`);
    const invitation = localStorage.getItem('invitation');
    const tokenId = localStorage.getItem('tokenId');
    const elementContainingOpenSeaLink = document.getElementById('openSeaLink');
    const ipfsBookDownloadLink = document.getElementById('ipfsBookDownloadLink');
    const dl = document.getElementById('dl');

    if (invitation && invitationLinkElement) {
        invitationLinkElement.innerHTML = invitation;
    }

    if (elementContainingOpenSeaLink && tokenId) {
        const url = import.meta.env.VITE_NETWORK == 'sepolia' ? 'testnets.opensea.io' : 'opensea.io'; 
        const finalUrl = `https://${url}/assets/${import.meta.env.VITE_NETWORK}/${import.meta.env.VITE_NFT_CONTRACT_ADDRESS}/${tokenId}`;
        elementContainingOpenSeaLink.innerHTML = finalUrl;
    }

    if (tokenId && ipfsBookDownloadLink) {
        const pinnataGateway = import.meta.env.VITE_PINATA_GATEWAY;
        const resourceName = `protocols-for-postcapitalist-expression_digital-edition_${tokenId}.pdf/`;
        const accessToken = `?pinataGatewayToken=${import.meta.env.VITE_PINATA_ACCESS_TOKEN}`;
        const downloadURL = pinnataGateway + resourceName + accessToken;
        ipfsBookDownloadLink.innerHTML = downloadURL;
        if (dl) {
            dl.href = downloadURL;
        }
    }
}

const insertBenefitByIdAndOpenBenefitsOverlay = async (content) => {
    handleOverlayDisplay();
    setupCloseAndBackButtons();

    const benefitsOverlayContent = document.getElementById('benefit1OverlayContent');
    if (benefitsOverlayContent) {
        benefitsOverlayContent.innerHTML = content + '<button class="aboutOverlayBack" id="benefitOverlayClose">← back</button>';
        benefitsOverlayContent.style.display = "block";
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
