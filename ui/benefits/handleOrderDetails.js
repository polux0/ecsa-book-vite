import { insertOrder, getOrderByWallet, updateOrderByWallet } from "../db/orders.js";
import { validateOrders } from "../validation/validateOrders.js";

const getWallet = () => localStorage.getItem("wallet");
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
export {handleOrderDetails}