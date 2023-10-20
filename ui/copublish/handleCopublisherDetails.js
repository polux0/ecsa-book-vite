import { validateCopublisher } from "../../validation/validateCopublisher";
import { insertCoPublisher, getCopublisherByWallet, updateCopublisher } from "../../db/copublishers.js";
import { updateCopublishers } from "../../ui/displayCopublishers.js";

const handleCopublisherDetails = async () => {
    const getWallet = () => localStorage.getItem("wallet");
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
export {handleCopublisherDetails}