// Reusing the helper function from the previous optimization
function fetchContentById(id) {
    return document.getElementById(id)?.textContent || '';
}

function createDownloadableBlob(content, filename) {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const tempLink = document.createElement("a");
    tempLink.href = URL.createObjectURL(blob);
    tempLink.download = filename;
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
}

function downloadInvitations() {
    const invitationLink = fetchContentById('invitation-link1');
    createDownloadableBlob(invitationLink, 'invitation.txt');

    // Feedback mechanism (if you want to provide feedback to the user)
    // let downloadButton = document.getElementById('downloadButton');
    // let originalHtml = downloadButton.innerHTML;
    // downloadButton.innerHTML = "Downloaded";
    // setTimeout(() => {
    //     downloadButton.innerHTML = originalHtml;
    // }, 5000);
}

export { downloadInvitations };
