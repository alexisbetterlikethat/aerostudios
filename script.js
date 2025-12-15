      document.addEventListener('DOMContentLoaded', function() {
            const phrases = [
                "Best Roblox Scripts",
                "Nice Community",
                "Content Creators",
                "Devs Mostly Active"
            ];
            const textElement = document.querySelector('.dynamic-text');
            const cursorElement = document.querySelector('.cursor');
            let phraseIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            const typingSpeed = 100; 
            const deletingSpeed = 50;
            const pauseTime = 1500; 
            const blinkInterval = 500;

            function toggleCursorFlash(isOn) {
                if (isOn) {
                    cursorElement.classList.remove('flashing');
                } else {
                    cursorElement.classList.add('flashing');
                }
            }
            
            let blinkTimer;

            function typeWriter() {
                const currentPhrase = phrases[phraseIndex];
                
                if (isDeleting) {
                    charIndex--;
                    textElement.textContent = currentPhrase.substring(0, charIndex);
                } else {
                    charIndex++;
                    textElement.textContent = currentPhrase.substring(0, charIndex);
                }
                
                toggleCursorFlash(!isDeleting); 
                
                let speed = isDeleting ? deletingSpeed : typingSpeed;

                if (!isDeleting && charIndex === currentPhrase.length) {
                    clearInterval(blinkTimer);
                    blinkTimer = setInterval(() => {
                        cursorElement.classList.toggle('flashing');
                    }, blinkInterval);
                    
                    isDeleting = true;
                    speed = pauseTime;
                } else if (isDeleting && charIndex === 0) {
                    clearInterval(blinkTimer);
                    toggleCursorFlash(true);
                    
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    speed = 300;
                }
                
                setTimeout(typeWriter, speed);
            }

            typeWriter();
        });
