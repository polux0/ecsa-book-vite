function validateOrders() {
    let deliveryName = document.getElementById("name");
    let deliveryMailing = document.getElementById("mailingAddress");
    let deliveryPhoneNumber = document.getElementById("phoneNumber");

    let deliveryError = document.getElementById("detailsError");

    if (!deliveryName.value.trim()) {
        console.error("Name field is empty");
        deliveryError.style.display = "block";
    }
    
    if (!deliveryMailing.value.trim()) {
        console.error("Mailing Address field is empty");
        deliveryError.style.display = "block";
    }
    
    if (!deliveryPhoneNumber.value.trim()) {
        console.error("Phone Number field is empty");
        deliveryError.style.display = "block";
    }
}
export {validateOrders}