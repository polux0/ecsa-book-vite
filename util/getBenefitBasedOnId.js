function getBenefitBasedOnId(id){
    const benefitsHigherTier = [
        `<b>1. Creditation as a Co-Publisher (an acknowledgement that you have played for the commons)</b>When all the units have been published, the book transforms into an open access publication that anybody can read, listen and circulate. As a thank you, your wallet address will be listed as a Co-Publisher of the book at the book website and in the next PDF version of the book.
        <br>
        <br>
        Thank you for co-publishing the book!`,
        
        `<b>2. Access to the ECSA token whitelist</b>
        Your unit grants you access to the ECSA token presale whitelist (target date: November, TBC). A certain number of ECSA tokens -- which are the project’s capital market facing governance tokens – will be allocated to an option pool divided among all the unit holders. The unit thus functions as a call option to buy a certain amount of ECSA tokens at presale price. All wallets holding a Unit of Discourse will be whitelisted when the presale starts. Please follow our messaging at the ECSA Telegram, ECSA Twitter, and Discourse Development Discord.`,

        `<b>3. Participation in the discourse development and IRL meets</b>Your unit gives you the right to access the Discourse Development Discord, i.e., to participate in the development of the discourse by sharing your insights and engaging in the dialogue. This allows you to shape the discourse and contribute to the co-publishing of the book. We have curated public discussions with interesting guests and a Discord channel where we developed the discourse. You can also just hangaround. We also organise IRL meets. The next one is going to be in New York City in early December. Please follow notifications in the ECSA Telegram, ECSA Twitter, and in the Discourse Discord.<br>`,

        `<b>4. Invites to enrich the discourse</b>
        As a holder of a unit of postcapitalist discourse your next task is to expand and enrich the discourse. Your unit makes you a curator of this project. The aim is to turn the book-object into alive spoken discourse on postcapitalist expression. It is about creating a more expressive economic language — than we currently have — to express, measure and communicate value. The three first people using your invitations will have the opportunity to participate in co-publishing the remaining units and become core members of the discourse’s development.

        <br>
        <br>
        Your invites are here (you will also receive them in your wallet as a message):
        <br>
        <br>
        <div class="invitation-container">
        <p class="invitation-link" id="invitation-link1">https://ecsa-book.vercel.app/?invitationId=HWjaYEr24AcMLzdhN4ycnKnhPvtRn4QNJKMuzu4BXexBHm6tsKmCQCUxqBudsxmK</p><br>
        <button class="copy-button" id="copyButton">Copy ❑</button>
        <button class="download-button" id="downloadButton">Download ↓</button>
        </div>
        <br>
        <br>
        Choose friends who you believe will be interested in the postcapitalist discourse and whose participation will increase its value. How does the value of a discourse increase? It increases if it gets spoken, shared, adopted, repeated; imitated and copied; that multiple ways of using it are invented, that it is used creatively; that different interpretations - which are always different subjective investments - are made of it. This is what we are after. Postcapital is a different paradigm of value creation. In this paradigm value is created with opening, sharing and inventing multiple uses (VS. restricting use by proprietary ownership); with many interpretations, iterations, variations (VS. hiding the source code); with collective self-organization, self-governance and the right to fork (VS. external organization and management). This is what we are organizing for.
        <br>
        <br>
        [After all the units have been published, the people with invitations who didn't manage to get their own unit at this point, will have an access to the Discord where we develop the discourse.]`,

        `<b>5. The book PDF with a custom generative cover</b>
        The unit gives you the right to download the book PDF with a unique generative cover. It will allow you to understand your unit of discourse’s meaning and relevance as part of the whole book. It assists you in determining the value of the token you hold.
        <br>
        <br>
        Please download it here!
        <br>
        <br>
        <button class="download-button" id="downloadGeneratedPdfsButton">Download ↓</button>`,

        `<b>6. The print book published by Minor Compositions / Autonomedia (Colchester / New York / Port Watson, 2023)</b>
        If you have so selected, your unit offers you also a print copy of the book delivered to your door.
        <br>
        <br>
        Please leave here your name and address where you would like it be delivered:
        <br>
        <br>
        Name:
        <input type="text" placeholder="Walter Gibson..." spellcheck="false" id="name">
        <br>
        Mailing address:
        <br>
        <input type="text" placeholder="Rue Saint-Honoré 13/1..." spellcheck="false" id="mailingAddress">
        <br>
        Phone number (required by the delivery service):
        <br>
        <input type="text" placeholder="+386258472..." spellcheck="false" id="phoneNumber">
        <p class="detailsError" id="detailsError">Please fill all the fields</p>
        <br>
        <button class="postDeliveryDetails" id="postDeliveryDetails">Send ➹</button>
        Please notice that depending on your country, you might need to clear the customs before receiving the book.`,

        `<b>7. Ability to explore economic communication</b>
        You can next publish your NFT in one or more markets. This allows you to start communicating and messaging about the discourse economically. You can also fractionalize it, gift it, acquire more tokens in it. This allows you to spread the discourse, contributing to its valuation and the broader discourse on economic media.`,
        
        `<b>8. Participation in the discourse development and IRL meets</b>
        Your unit gives you the right to access the Discourse Development Discord, i.e. to participate in the development of the discourse by sharing your insights and engaging in the dialogue. This allows you to shape the discourse and contribute to the co-publishing of the book. We have curated public discussions with interesting guests and a Discord channel where we developed the discourse. You can also just hangaround. We also organize IRL meets. The next one is going to be in New York City in early December. Please follow notifications in the ECSA Telegram, ECSA Twitter, and unit holders’ Discord.`
    ];
    return benefitsHigherTier[id];

}

// const benefitsHigherTier = [
//     `<b>1. The title of Co-Publisher (an acknowledgement that you have played for the commons)</b>
//     When all the units have been published, the book transforms into an open access publication that anybody can read, listen and circulate. As a thank you, your name / alias / wallet address will be listed as a Co-Publisher of the book at the book website and in the next PDF version of the book.
//     <br>
//     <br>
//     We will use the wallet address as the default name for the list.
//     <br>
//     <br>
//     If you would prefer your name/alias to be listed instead, please indicate it here:
//     <br>
//     <br>
//     The name you would like to be listed as a co-publisher:
//     <br>
//     <br>
//     <input type="text" placeholder="nonlinear economic space agent..." spellcheck="false" id="copublisherName">
//     <br>
//     <button class="post-publisher-button" id="postPublisherButton">Post ➹</button>
//     <br>
//     Thank you for co-publishing the book!`,
//     `<b>2. By holding this NFT, you will be eligible to invest in the ECSA token.</b>
//     Your unit grants you access to the ECSA token presale whitelist (target date: November, TBC). A certain number of ECSA tokens -- which are the project’s capital market facing governance tokens – will be allocated to an option pool divided among all the unit holders. The unit thus functions as a call option to buy a certain amount of ECSA tokens at presale price. All wallets holding a Unit of Discourse will be whitelisted when the presale starts. Please follow our messaging at the ECSA Telegram, ECSA Twitter, and unit holders’ Discord.`,
//     `<b>3. Three invites to enrich the discourse</b>
//     As a holder of a unit of postcapitalist discourse, your next task is to expand and enrich the discourse. The project is about creating a more expressive economic language — than we currently have — to express, measure and communicate value. A discourse for postcapitalist expression. Your unit gives you the right to invite three people to join the discourse. 
//     <br>
//     <br>
//     Your invites are here (you will also receive them in your wallet as a message):
//     <br>
//     <br>
//     <div class="invitation-container">
//     <p class="invitation-link" id="invitation-link1">https://ecsa-book.vercel.app/?invitationId=HWjaYEr24AcMLzdhN4ycnKnhPvtRn4QNJKMuzu4BXexBHm6tsKmCQCUxqBudsxmK</p><br>
//     <p class="invitation-link" id="invitation-link2">https://ecsa-book.vercel.app/?invitationId=kQmCwci1M5JalYUS6qERTSeTBEmkikwcK7PXZCEIxcHyzJeUpxUgbtGvVdhEoRWb</p><br>
//     <p class="invitation-link" id="invitation-link3">https://ecsa-book.vercel.app/?invitationId=LQW6hmNXikOhsNPaP9v1BUBOdMqC28V7bdCBbL1MNrtPYMSx7WpdHjYCXQ0zGdsi</p><br>
//     <button class="copy-button" id="copyButton">Copy ❑</button>
//     <button class="download-button" id="downloadButton">Download ↓</button>
//     </div>
//     <br>
//     <br>
//     Choose friends who you believe will be interested in the postcapitalist discourse and whose participation will increase its value. How does the value of a discourse increase? It increases if it gets spoken, shared, adopted, repeated; imitated and copied; that multiple ways of using it are invented, that it is used creatively; that different interpretations - which are always different subjective investments - are made of it. This is what we are after. Postcapital is a different paradigm of value creation. It is based on opening, sharing and inventing multiple uses (VS. restricting use by proprietary ownership); it is based on many interpretations, iterations, variations (VS. hiding the source code); it is based on collective self-organization, self-governance and right to fork (VS. external organization and control). This is now what we are organizing for.
//     <br>
//     <br>
//     [After all the units have been published, the people with invitations who didn't manage to get their own unit at this point, will have an access to the Discord where we develop the discourse.]`,
//     `<b>4. The book PDF with a custom generative cover</b>
//     The unit gives you the right to download the book PDF with a unique generative cover. It will allow you to understand your unit of discourse’s meaning and relevance as part of the whole book. It assists you in determining the value of the token you hold.
//     <br>
//     <br>
//     Please download it here!
//     <br>
//     <br>
//     <button class="download-button" id="downloadGeneratedPdfsButton">Download ↓</button>`,
//     `<b>5. The print book published by Minor Compositions / Autonomedia (Colchester / New York / Port Watson, 2023)</b>
//     If you have chosen the Tier 2 (higher price), your unit offers you also a print copy of the book delivered to your door.
//     <br>
//     <br>
//     Please leave here your name and address where you would like it be delivered:
//     <br>
//     <br>
//     Name:
//     <input type="text" placeholder="Walter Gibson..." spellcheck="false" id="name">
//     <br>
//     Mailing address:
//     <br>
//     <input type="text" placeholder="Rue Saint-Honoré 13/1..." spellcheck="false" id="mailingAddress">
//     <br>
//     Phone number (required by the delivery service):
//     <br>
//     <input type="text" placeholder="+386258472..." spellcheck="false" id="phoneNumber">
//     <p class="detailsError" id="detailsError">Please fill all the fields</p>
//     <br>
//     <button class="postDeliveryDetails" id="postDeliveryDetails">Send ➹</button>
//     <br>
//     The publisher will deliver the book to you immediately.
//     <br>
//     Please notice that depending on your country, you might need to clear the customs before receiving the book.`,
//     `<b>6. Ability to communicate economically / Stake in the discourse’s future</b>
//     You can next publish your NFT in one or more markets. This allows you to start communicating and messaging about the discourse economically. You can also fractionalize it, gift it, acquire more tokens in it (in its account – yes, it is a 6551!). This allows you to spread the discourse, contributing to its valuation and the broader discourse on economic media. In addition, when all the units have been published and the entire book is revealed for everybody to read, the entire book will also be released as a separate singular fractional NFT. Every unit will receive a fraction. As a holder of a unit of discourse, you become a stakeholder of the discourse’s value as an informational asset.`,
//     `<b>7. Participation in the discourse development and IRL meets</b>
//     Your unit gives you the right to access the Discourse Development Discord, i.e. to participate in the development of the discourse by sharing your insights and engaging in the dialogue. This allows you to shape the discourse and contribute to the co-publishing of the book. We have curated public discussions with interesting guests and a Discord channel where we developed the discourse. You can also just hangaround. We also organize IRL meets. The next one is going to be in New York City in early December. Please follow notifications in the ECSA Telegram, ECSA Twitter, and unit holders’ Discord.`
// ];
export {getBenefitBasedOnId}