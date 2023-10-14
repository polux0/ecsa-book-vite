function downloadBenefits() {
    // Get the content of asci
    let asciText = document.getElementById('asciProtocols').textContent;
    // Get the contents of the three elements
    let text1 = document.getElementById('discourse-unit-on-open-sea-text').textContent;
    var link1 = document.getElementById('openSeaLink').textContent;
    let text2 = document.getElementById('discourse-node').textContent;
    let link2 = document.getElementById('discourse-node-link').textContent;
    let text3 = document.getElementById('invitation-link-text').textContent;
    var link3 = document.getElementById('invitation-link1').textContent;
    let text4 = document.getElementById('unique-pdf-link-text').textContent;
    var link4 = document.getElementById('ipfsBookDownloadLink').textContent;

    // Combine the links
    var combinedLinks = asciText + "\n" + text1 + "\n" + link1 + "\n" + text2 + "\n" + link2 + "\n" + text3 + "\n" + link3 + "\n" + text4 + "\n" + link4;
    // var combinedLinks = link1 + "\n";

    // Create a blob from the combined links
    var blob = new Blob([combinedLinks], { type: "text/plain;charset=utf-8" });

    // Create a temporary anchor element
    var tempLink = document.createElement("a");
    tempLink.href = URL.createObjectURL(blob);
    tempLink.download = "benefits.txt"; // suggest a filename for the download

    // Append the anchor to the body, trigger a click, and then remove it
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);

    // Assuming you want a similar feedback mechanism as the copy function
    // let downloadButton = document.getElementById('downloadButton');
    // let originalHtml = downloadButton.innerHTML;
    // downloadButton.innerHTML = "Downloaded";
    // setTimeout(() => {
    //     downloadButton.innerHTML = originalHtml;
    // }, 5000);  // 5000 milliseconds = 5 seconds
}

export { downloadBenefits };
