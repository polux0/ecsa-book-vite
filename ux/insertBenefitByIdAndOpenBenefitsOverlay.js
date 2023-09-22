import { closeOpenBenefitAndOpenCongratz } from "./closeOpenBenefitAndOpenCongratz.js";
import { copyInvitations } from "./copyInvitations";
import { downloadInvitations } from "./downloadInvitations";
import { insertOrder } from "../db/orders.js";
import { validateOrders } from "../validation/validateOrders.js";

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

        benefitsOverlayContent.style.display = "flex";
    }

    // delivery details related
    let deliveryName = document.getElementById("name");
    let deliveryMailing = document.getElementById("mailingAddress");
    let deliveryPhoneNumber = document.getElementById("phoneNumber");

    
    let deliveryError = document.getElementById("detailsError");



    let sendButton = document.getElementById("postDeliveryDetails");

}
export {insertBenefitByIdAndOpenBenefitsOverlay} 