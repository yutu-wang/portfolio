document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for fade-up animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Trigger animations for elements with .fade-up
    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });
    
    // Trigger animations immediately for hero section if already in viewport
    setTimeout(() => {
        document.querySelectorAll('.hero .fade-up').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);

    // Interactive hero background slices
    const interactiveBg = document.querySelector('.interactive-bg');
    if (interactiveBg) {
        const slices = Array.from(interactiveBg.querySelectorAll('.slice'));
        const hero = document.querySelector('.hero');
        const bgImageUrl = "images/about.jpg";

        slices.forEach(slice => {
            slice.style.backgroundImage = `url('${bgImageUrl}')`;
        });

        if (hero && slices.length > 0) {
            hero.addEventListener('mousemove', (event) => {
                const rect = hero.getBoundingClientRect();
                const xRatio = (event.clientX - rect.left) / rect.width - 0.5;
                const yRatio = (event.clientY - rect.top) / rect.height - 0.5;

                slices.forEach((slice, index) => {
                    const depth = (index + 1) * 3;
                    const offsetX = xRatio * depth;
                    const offsetY = yRatio * depth;
                    slice.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                });
            });

            hero.addEventListener('mouseleave', () => {
                slices.forEach(slice => {
                    slice.style.transform = '';
                });
            });
        }
    }

    // Journey carousel
    const carousel = document.querySelector('.journey-carousel');
    if (carousel) {
        const slides = Array.from(carousel.querySelectorAll('.journey-slide'));
        const prevBtn = carousel.querySelector('.journey-carousel-btn.prev');
        const nextBtn = carousel.querySelector('.journey-carousel-btn.next');
        const dotsWrap = carousel.querySelector('.journey-carousel-dots');
        const intervalMs = Number(carousel.dataset.carouselInterval) || 3500;
        let activeIndex = 0;
        let autoplayTimer = null;

        const dots = slides.map((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'journey-dot';
            dot.type = 'button';
            dot.setAttribute('aria-label', `切換到第 ${index + 1} 張`);
            dot.addEventListener('click', () => {
                goTo(index);
                restartAutoplay();
            });
            dotsWrap.appendChild(dot);
            return dot;
        });

        const goTo = (nextIndex) => {
            activeIndex = (nextIndex + slides.length) % slides.length;
            slides.forEach((slide, index) => {
                slide.classList.toggle('is-active', index === activeIndex);
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle('is-active', index === activeIndex);
            });
        };

        const goNext = () => goTo(activeIndex + 1);
        const goPrev = () => goTo(activeIndex - 1);

        const startAutoplay = () => {
            autoplayTimer = setInterval(goNext, intervalMs);
        };

        const restartAutoplay = () => {
            clearInterval(autoplayTimer);
            startAutoplay();
        };

        prevBtn.addEventListener('click', () => {
            goPrev();
            restartAutoplay();
        });

        nextBtn.addEventListener('click', () => {
            goNext();
            restartAutoplay();
        });

        carousel.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
        carousel.addEventListener('mouseleave', startAutoplay);

        goTo(0);
        startAutoplay();
    }
});
