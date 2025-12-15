document.addEventListener('DOMContentLoaded', function() {
    // Array of phrases to cycle through
    const phrases = [
        "Best Roblox Scripts",
        "Nice Community",
        "Content Creators",
        "Devs Mostly Active"
    ];

    const textElement = document.querySelector('.dynamic-text');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // milliseconds per character
    const deletingSpeed = 50;
    const pauseTime = 1500; // Time to wait at the end of a phrase

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            // DELETING MODE: Remove characters
            charIndex--;
            textElement.textContent = currentPhrase.substring(0, charIndex);
        } else {
            // TYPING MODE: Add characters
            charIndex++;
            textElement.textContent = currentPhrase.substring(0, charIndex);
        }

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Finished typing the phrase, start deleting after a pause
            speed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting the phrase, move to the next one
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 500; // Short pause before starting to type the next phrase
        }

        setTimeout(typeWriter, speed);
    }

    // Initialize the typing effect after a short delay
    setTimeout(typeWriter, 500);
});
