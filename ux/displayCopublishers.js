import { getAllCopublishers, getCopublisherByWalletAndName } from "../db/copublishers.js";
function createCoPublisherDiv(copublisher) {
    const coPublisherDiv = document.createElement("div");
    coPublisherDiv.classList.add("coPublisher");

    const coPublisherName = document.createElement("b");
    coPublisherName.classList.add("coPublisherName");
    coPublisherName.textContent = copublisher.name ? copublisher.name : "Anonymous";

    const coPublisherAddress = document.createElement("span");
    coPublisherAddress.classList.add("coPublisherAddress");
    coPublisherAddress.textContent = copublisher.wallet;

    const coPublisherUnit = document.createElement("a");
    coPublisherUnit.classList.add("coPublisherUnit");
    coPublisherUnit.textContent = "Unit " + copublisher.token_id;
    coPublisherUnit.href = "#u" + copublisher.token_id;

    coPublisherDiv.appendChild(coPublisherName);
    coPublisherDiv.appendChild(document.createElement("br"));
    coPublisherDiv.appendChild(coPublisherAddress);
    coPublisherDiv.appendChild(document.createElement("br"));
    coPublisherDiv.appendChild(coPublisherUnit);

    return coPublisherDiv;
}

async function displayCopublishers() {
    let copublishers = await getAllCopublishers();
    const coPublishersList = document.getElementById("coPublishersList");
    if (coPublishersList) {
        copublishers.forEach(copublisher => {
            const coPublisherDiv = createCoPublisherDiv(copublisher);
            coPublishersList.appendChild(coPublisherDiv);
        });
    }
}

async function updateCopublishers(wallet, name) {
    let latest = await getCopublisherByWalletAndName(wallet, name);
    const coPublishersList = document.getElementById("coPublishersList");
    if (coPublishersList) {
        const coPublisherDiv = createCoPublisherDiv(latest);
        coPublishersList.appendChild(coPublisherDiv);
    }
}

export { displayCopublishers, updateCopublishers }
