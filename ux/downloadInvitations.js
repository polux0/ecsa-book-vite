function downloadInvitations() {
    // Get the contents of the three elements
    var link1 = document.getElementById("invitation-link1").textContent;
    var link2 = document.getElementById("invitation-link2").textContent;
    var link3 = document.getElementById("invitation-link3").textContent;

    // Combine the links
    var combinedLinks = link1 + "\n" + link2 + "\n" + link3;

    // Create a blob from the combined links
    var blob = new Blob([combinedLinks], { type: "text/plain;charset=utf-8" });

    // Create a temporary anchor element
    var tempLink = document.createElement("a");
    tempLink.href = URL.createObjectURL(blob);
    tempLink.download = "invitations.txt"; // suggest a filename for the download

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

export { downloadInvitations };
