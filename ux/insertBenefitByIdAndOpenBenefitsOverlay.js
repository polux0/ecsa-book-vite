import { closeOpenBenefitAndOpenCongratz } from "./closeOpenBenefitAndOpenCongratz.js";
import { copyInvitations } from "./copyInvitations";
import { downloadInvitations } from "./downloadInvitations";
import { insertOrder } from "../db/orders.js";
import { validateOrders } from "../validation/validateOrders.js";
// import { downloadBook } from "./downloadBook.js";

// technical debt - code should be modularized!
const insertBenefitByIdAndOpenBenefitsOverlay = async function(content) {
    const benefitsOverlay = document.getElementById('benefit1Overlay');
    if(benefitsOverlay){
        benefitsOverlay.style.display = "flex";
    }
    const benefitsOverlayClose = document.getElementById('benefit1OverlayClose');
    if(benefitsOverlayClose){
        benefitsOverlayClose.addEventListener('click', function(){
            closeOpenBenefitAndOpenCongratz();   
        });
        benefitsOverlayClose.style.display = "block";
    }
    const benefitsOverlayContent = document.getElementById('benefit1OverlayContent');
    if(benefitsOverlayContent){
        benefitsOverlayContent.innerHTML = content;
        benefitsOverlayContent.innerHTML += '<button class="aboutOverlayBack" id="benefitOverlayClose">← back</button>';

        let backButton = document.getElementById('benefitOverlayClose');
        if(backButton){
            backButton.addEventListener('click', function(){
                closeOpenBenefitAndOpenCongratz();   
            });
        }
        let copyButton = document.getElementById("copyButton");
        let downloadButton = document.getElementById("downloadButton");
        if(copyButton){
            copyButton.addEventListener("click", function (event) {
                copyInvitations();
            });
        }
        if(downloadButton){
            downloadButton.addEventListener("click", function (event) {
                downloadInvitations();
            });
        }
        // downloadBook
        // let downloadBook = document.getElementById('downloadGeneratedPdfsButton')
        // if(downloadBook){
        //     downloadBook.addEventListener("click", function (event) {
        //         downloadBook();
        //     });
        // }

        let sendButton = document.getElementById("postDeliveryDetails");

        let deliveryName = document.getElementById("name");
        let deliveryMailing = document.getElementById("mailingAddress");
        let deliveryPhoneNumber = document.getElementById("phoneNumber");
        let deliveryError = document.getElementById("detailsError");
        
        let isSendClicked = false; // flag to check if the send button is clicked

        if(sendButton){
            sendButton.addEventListener("click", function (event) {

                if (isSendClicked) {
                    // Exit the function to prevent additional sending of orders
                    return;
                }
        
                deliveryError.style.display = "none";
                validateOrders();
                insertOrder(deliveryName.value.trim(), deliveryMailing.value.trim(), deliveryPhoneNumber.value.trim());
                //disable button `send` function
                //possibly disable deliveryName, deliveryMailing, deliveryPhoneNumber
                if(deliveryError){
                    if(deliveryError.style.display !== "block"){
                        sendButton.textContent = "Thanks!";
                        isSendClicked = true; // Set the flag to true
                        return;
                    }
                }
                // else{
                //     sendButton.textContent = "Send ➹";
                // }

                // }
            });
        }
            // invitations related
            let invitationLinkElement = document.getElementById(`invitation-link1`);
            let invitation = localStorage.getItem('invitation');
            console.log("invitation: ", invitation);
            if(invitation && invitationLinkElement){
                invitationLinkElement.innerHTML = invitation;
            }
            let tokenId = localStorage.getItem('tokenId');
            // fetch element that holds OpenSea link: 
            let elementContainingOpenSeaLink = document.getElementById('openSeaLink');

            if(elementContainingOpenSeaLink && tokenId){
                // get token id from local storage so we can generate opensea link
                let url = import.meta.env.VITE_NETWORK == 'sepolia' ? 'testnets.opensea.io' : 'opensea.io'; 
                const final = `https://${url}/assets/${import.meta.env.VITE_NETWORK}/${import.meta.env.VITE_NFT_CONTRACT_ADDRESS}/${tokenId}`;
                elementContainingOpenSeaLink.innerHTML = final;
            }
            // fetch element that holds Pinnata / IPFS link:
            let ipfsBookDownloadLink = document.getElementById('ipfsBookDownloadLink');
            let pinnataGateway = import.meta.env.VITE_PINATA_GATEWAY;
            let resourceName = `book_with_cover_${tokenId}.pdf/`;
            let accessToken = `?pinataGatewayToken=${import.meta.env.VITE_PINATA_ACCESS_TOKEN}`;
            let downloadURL = pinnataGateway + resourceName + accessToken;

            if(tokenId && ipfsBookDownloadLink){
                ipfsBookDownloadLink.innerHTML = downloadURL;
            }


            let dl = document.getElementById('dl');
            console.log("This happened: ", dl);
            if(tokenId && dl){
                dl.href = downloadURL;
            }

        benefitsOverlayContent.style.display = "flex";
    }


    // delivery details related


}
export {insertBenefitByIdAndOpenBenefitsOverlay} 