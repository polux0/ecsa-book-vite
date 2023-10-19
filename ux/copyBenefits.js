function copyBenefits() {
    // Get contents of the elements
    let asciText = document.getElementById('asciProtocols')?.textContent || '';
    let text1 = document.getElementById('discourse-unit-on-open-sea-text')?.textContent || '';
    let link1 = document.getElementById('openSeaLink')?.textContent || '';
    let text2 = document.getElementById('discourse-node')?.textContent || '';
    let link2 = document.getElementById('discourse-node-link')?.textContent || '';
    let text3 = document.getElementById('invitation-link-text')?.textContent || '';
    let link3 = document.getElementById('invitation-link1')?.textContent || '';
    let text4 = document.getElementById('unique-pdf-link-text')?.textContent || '';
    let link4 = document.getElementById('ipfsBookDownloadLink')?.textContent || '';

    // Combine the contents
    let combinedLinks = `${asciText}\n${text1}\n${link1}\n${text2}\n${link2}\n${text3}\n${link3}\n${text4}\n${link4}`;

    // Copy the combined text to clipboard
    navigator.clipboard.writeText(combinedLinks);

    let copyButton = document.getElementById('copyButton');
    if (copyButton) {
        let originalHtml = copyButton.innerHTML;
        copyButton.innerHTML = "Copied";

        setTimeout(() => {
            copyButton.innerHTML = originalHtml;
        }, 5000);
    }
}
export {copyBenefits};
