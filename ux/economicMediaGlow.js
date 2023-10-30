let hoverTimer; // This will store the timer for delay
let glowDurationTimer; // This will store the timer for glow duration
let lastGlowTime = 0; // To store the last time the glow effect occurred
const delayDuration = 3000; // Set delay to 3000ms (5s)

function setEconomicMediaGlowListeners() {
    const containers = document.querySelectorAll('.available');
    const economicMediaButton = document.getElementById('bookOrbsButton');

    if (!economicMediaButton.classList.contains('activeButton')) {
        containers.forEach(container => {
            container.addEventListener('mouseover', function(event) {
                if (event.target.tagName === 'P') {
                    // Check if the last glow was more than 3 seconds ago
                    const currentTime = new Date().getTime();
                    if (currentTime - lastGlowTime < delayDuration) return;

                    // Clear any existing timers
                    clearTimeout(hoverTimer);
                    clearTimeout(glowDurationTimer);

                    // Start a new timer for delay
                    hoverTimer = setTimeout(() => {
                        handleMouseOver(economicMediaButton);
                        lastGlowTime = new Date().getTime(); // Update the last glow time

                        // Start the glow duration timer
                        glowDurationTimer = setTimeout(() => {
                            handleMouseOut(economicMediaButton);
                        }, 500); // 0.5s glow duration

                    }, delayDuration);
                }
            });

            container.addEventListener('mouseout', function(event) {
                if (event.target.tagName === 'P') {
                    // Clear the timers
                    clearTimeout(hoverTimer);
                    clearTimeout(glowDurationTimer);
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
        element.style.transition = 'background 0.5s ease, box-shadow 0.5s ease';
    } else {
        console.log('element is already active', element);
    }
}

function handleMouseOut(element) {
    // Clear the glow duration timer
    clearTimeout(glowDurationTimer);

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

export { setEconomicMediaGlowListeners, removeEconomicMediaGlowListeners }
