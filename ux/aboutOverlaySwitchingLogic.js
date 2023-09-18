function initiateAboutOverlayLogic(){
    // next buttons
    let aboutOverlayNext1Button = document.getElementById("aboutOverlayNext1");
    if(aboutOverlayNext1Button){
        aboutOverlayNext1Button.addEventListener("click", function(){
            let aboutOverlayContent1 = document.getElementById("aboutContent1");
            if(aboutOverlayContent1){
                aboutOverlayContent1.style.display = "none";
                let aboutOverlayContent2 = document.getElementById("aboutContent2");
                if(aboutOverlayContent2){
                    aboutOverlayContent2.style.display = "flex";
                }
            }
        });
    }
    let aboutOverlayNext2Button = document.getElementById("aboutOverlayNext2");
    if(aboutOverlayNext2Button){
        aboutOverlayNext2Button.addEventListener("click", function(){
            let aboutOverlayContent2 = document.getElementById("aboutContent2");
            if(aboutOverlayContent2){
                aboutOverlayContent2.style.display = "none";
                let aboutOverlayContent3 = document.getElementById("aboutContent3");
                if(aboutOverlayContent3){
                    aboutOverlayContent3.style.display = "block";
                }
            }
        });
    }
    let aboutOverlayNext3Button = document.getElementById("aboutOverlayNext3");
    if(aboutOverlayNext3Button){
        aboutOverlayNext3Button.addEventListener("click", function(){
            let aboutOverlayContent3 = document.getElementById("aboutContent3");
            if(aboutOverlayContent3){
                aboutOverlayContent3.style.display = "none";
                let aboutOverlayContent4 = document.getElementById("aboutContent4");
                if(aboutOverlayContent4){
                    aboutOverlayContent4.style.display = "block";
                }
            }
        });
    }
    // previous buttons
    let aboutOverlayPrevious2Button = document.getElementById("aboutOverlayPrevious2");
    if(aboutOverlayPrevious2Button){
        aboutOverlayPrevious2Button.addEventListener("click", function(){
            let aboutOverlayContent2 = document.getElementById("aboutContent2");
            if(aboutOverlayContent2){
                aboutOverlayContent2.style.display = "none";
                let aboutOverlayContent1 = document.getElementById("aboutContent1");
                if(aboutOverlayContent1){
                    aboutOverlayContent1.style.display = "flex";
                }
            }
        });
    }
    let aboutOverlayPrevious3Button = document.getElementById("aboutOverlayPrevious3");
    if(aboutOverlayPrevious3Button){
        aboutOverlayPrevious3Button.addEventListener("click", function(){
            let aboutOverlayContent3 = document.getElementById("aboutContent3");
            if(aboutOverlayContent3){
                aboutOverlayContent3.style.display = "none";
                let aboutOverlayContent2 = document.getElementById("aboutContent2");
                if(aboutOverlayContent2){
                    aboutOverlayContent2.style.display = "block";
                }
            }
        });
    }
    let aboutOverlayPrevious4Button = document.getElementById("aboutOverlayPrevious4");
    if(aboutOverlayPrevious4Button){
        aboutOverlayPrevious4Button.addEventListener("click", function(){
            let aboutOverlayContent4 = document.getElementById("aboutContent4");
            if(aboutOverlayContent4){
                aboutOverlayContent4.style.display = "none";
                let aboutOverlayContent3 = document.getElementById("aboutContent3");
                if(aboutOverlayContent3){
                    aboutOverlayContent3.style.display = "block";
                }
            }
        });
    }
}
export {initiateAboutOverlayLogic}