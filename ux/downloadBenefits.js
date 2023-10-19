function fetchContentById(id) {
    return document.getElementById(id)?.textContent || '';
}

function createDownloadableBlob(content) {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const tempLink = document.createElement("a");
    tempLink.href = URL.createObjectURL(blob);
    tempLink.download = "benefits.txt";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
}

function downloadBenefits() {
    const contents = [
        'asciProtocols',
        'discourse-unit-on-open-sea-text',
        'openSeaLink',
        'discourse-node',
        'discourse-node-link',
        'invitation-link-text',
        'invitation-link1',
        'unique-pdf-link-text',
        'ipfsBookDownloadLink'
    ].map(fetchContentById);

    const combinedContent = contents.join('\n');
    createDownloadableBlob(combinedContent);
}

export { downloadBenefits };
