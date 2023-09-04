function copyInvitations() {
    // Get the contents of the three elements
    var link1 = document.getElementById("invitation-link1").textContent;
    var link2 = document.getElementById("invitation-link2").textContent;
    var link3 = document.getElementById("invitation-link3").textContent;

    // Combine the links
    var combinedLinks = link1 + "\n" + link2 + "\n" + link3;

    // Use the Clipboard API to copy the combined text
    navigator.clipboard.writeText(combinedLinks);

    // Alert the copied text
    alert("Copied the invitations:\n" + combinedLinks);
}
export {copyInvitations}