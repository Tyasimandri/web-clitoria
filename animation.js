document.addEventListener("DOMContentLoaded", function() {
    // --- Scroll Reveal Animations (Add 'is-visible' class when in viewport) ---
    const animatedElements = document.querySelectorAll(".animated-element");
    const options = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.2 // elemen 20% terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target); // Hentikan observasi setelah terlihat
            }
        });
    }, options);

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});