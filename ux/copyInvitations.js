function copyInvitations() {
    // Get the contents of the three elements
    var link1 = document.getElementById("invitation-link1").textContent;
    // var link2 = document.getElementById("invitation-link2").textContent;
    // var link3 = document.getElementById("invitation-link3").textContent;

    // Combine the links
    // var combinedLinks = link1 + "\n" + link2 + "\n" + link3;
    var combinedLinks = link1 + "\n";

    // Use the Clipboard API to copy the combined text
    navigator.clipboard.writeText(combinedLinks);

    let copyButton = document.getElementById('copyButton');

    // Store the current innerHTML so we can revert it later
    let originalHtml = copyButton.innerHTML;

    // Change the innerHTML
    copyButton.innerHTML = "Coppied";

    // Set a timeout to revert the innerHTML after 3 seconds
    setTimeout(() => {
        copyButton.innerHTML = originalHtml;
    }, 5000);  // 5000 milliseconds = 5 seconds

}
export {copyInvitations}