function blurAndPreventScroll(){
    let bookContentSection = document.getElementById('bookContent');
    if(bookContentSection){
        bookContentSection.style.filter = `blur(5px)`;
        bookContentSection.style.overflow = 'hidden';
    }
    else{
        console.warn('could not find element with id `bookContent`');
    }
}
function disableBlurAndEnableScroll(){
    let bookContentSection = document.getElementById('bookContent');
    if(bookContentSection){
        bookContentSection.style.filter = 'none';
        bookContentSection.style.overflow = 'auto';
    }
    else{
        console.warn('could not find element with id `bookContent`');
    }
}
export {blurAndPreventScroll, disableBlurAndEnableScroll}