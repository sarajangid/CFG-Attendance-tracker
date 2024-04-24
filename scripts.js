document.addEventListener('DOMContentLoaded', function() {
    // Function to animate letters
    function animateLetters(element) {
        const text = element.textContent;
        element.textContent = ''; // Clear the existing text
        let delay = 0;

        for (let letter of text) {
            let span = document.createElement('span');
            span.textContent = letter;
            span.style.opacity = 0;
            span.style.animation = `fadeInUp 0.5s ${delay}s forwards ease`;
            element.appendChild(span);
            delay += 0.05; // Increase delay for each letter to create a staggered effect
        }
    }

    // WIP
    const headers = document.querySelectorAll('.animate-letters');
    headers.forEach(header => {
        animateLetters(header);
    });
});
