function getAboutBasedOnId(id){
    const about = [
        `Welcome to <b>'Protocols for Postcapitalist Expression'</b>. <br>
        Co-publishing is a new format for economic media that lets you take part in the publishing process.This book is divided into collectible paragraphs which visitors can individually choose to co-publish through a symbolic financial contribution. <br>
        <br><br>
        At the beginning, all content is obscured. Through your participation, this text will gradually be made public, one unit at a time. <br>
        <br><br>`,
        `By acquiring a unit of this text you join a discursive community reflecting upon agency, finance and sociality in the new economic space. <br>
        <br>
        When browsing through the book, you will encounter blurred units of text which signals they are available for co-publishing. Click the "co-publish" button at the end of each unit, and follow the instructions from there. <br>
        <br>`,
    ];
    return benefitsHigherTier[id];
}
export {getBenefitBasedOnId}