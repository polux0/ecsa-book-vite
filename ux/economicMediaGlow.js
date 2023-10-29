let hoverTimer; // This will store the timer
const delayDuration = 1000; // Set delay to 1000ms (1s)
function setEconomicMediaGlowListeners() {
    const containers = document.querySelectorAll('.available');
    const economicMediaButton = document.getElementById('bookOrbsButton');

    if(!economicMediaButton.classList.contains('activeButton')){
        containers.forEach(container => {
            container.addEventListener('mouseover', function(event) {
                if (event.target.tagName === 'P') {
                    // Clear any existing timer to reset the delay if another hover event is detected
                    clearTimeout(hoverTimer);
                    
                    // Start a new timer
                    hoverTimer = setTimeout(() => handleMouseOver(economicMediaButton), delayDuration);
                }
            });
      
            container.addEventListener('mouseout', function(event) {
                if (event.target.tagName === 'P') {
                    // Clear the timer to prevent hover effect if mouse is moved out before delay completes
                    clearTimeout(hoverTimer);
                    handleMouseOut(economicMediaButton);
                }
            });
        });
    }  
  }
  
  function handleMouseOver(element) {
    if (!element.classList.contains('activeButton')) {
        element.style.background = 'white';
        element.style.boxShadow = '0 0 100px white';
        element.style.transition = 'background 1.0s ease, box-shadow 1.0s ease';
    }
    else {
        console.log('element is already active', element);
    }
  }
  
  function handleMouseOut(element) {
    if (!element.classList.contains('activeButton')) {
        element.style.background = '';
        element.style.boxShadow = '';
    }
  }
  function removeEconomicMediaGlowListeners() {
    const containers = document.querySelectorAll('.available');
  
    containers.forEach(container => {
        container.removeEventListener('mouseover', handleMouseOver);
        container.removeEventListener('mouseout', handleMouseOut);
    });
  }

export {setEconomicMediaGlowListeners, removeEconomicMediaGlowListeners}