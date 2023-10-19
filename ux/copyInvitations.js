function copyInvitations() {
    // Get content of the element
    let link2 = document.getElementById('invitation-link1')?.textContent || '';

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(link2);

    let copyButton = document.getElementById('copyButton');
    if (copyButton) {
        let originalHtml = copyButton.innerHTML;
        copyButton.innerHTML = "Copied";

        setTimeout(() => {
            copyButton.innerHTML = originalHtml;
        }, 5000);  // 5 seconds
    }
}
export {copyInvitations};