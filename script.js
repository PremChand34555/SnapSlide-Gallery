document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const autoplaySpeed = 3000; // milliseconds between slides
    
    // Image data - replace with your own images
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
            alt: 'Beautiful mountain landscape with a lake',
            title: 'Mountain Vista'
        },
        {
            url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
            alt: 'Sunset over the ocean',
            title: 'Ocean Sunset'
        },
        {
            url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
            alt: 'Forest with sunlight streaming through trees',
            title: 'Enchanted Forest'
        },
        {
            url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d',
            alt: 'Desert landscape with rock formations',
            title: 'Desert Wonders'
        },
        {
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
            alt: 'Tropical beach with palm trees',
            title: 'Tropical Paradise'
        }
    ];
    
    // DOM Elements
    const sliderContainer = document.getElementById('slider');
    const indicatorsContainer = document.getElementById('indicators');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseText = document.getElementById('playPauseText');
    const playPauseIcon = playPauseBtn.querySelector('i');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    
    // State
    let currentSlide = 0;
    let isPlaying = true;
    let slideInterval;
    
    // Initialize slider
    function initSlider() {
        // Create slides
        slides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.classList.add('slide');
            if (index === 0) slideElement.classList.add('active');
            
            // Create image with lazy loading
            const img = document.createElement('img');
            img.src = slide.url;
            img.alt = slide.alt;
            img.classList.add('w-full', 'h-full', 'object-cover');
            img.loading = 'lazy';
            
            // Create caption
            const caption = document.createElement('div');
            caption.classList.add('absolute', 'bottom-0', 'left-0', 'right-0', 'bg-black/50', 'text-white', 'p-3');
            caption.innerHTML = `<h3 class="text-lg font-semibold">${slide.title}</h3>`;
            
            // Append to slide
            slideElement.appendChild(img);
            slideElement.appendChild(caption);
            sliderContainer.appendChild(slideElement);
            
            // Create indicator
            const indicator = document.createElement('button');
            indicator.classList.add('w-3', 'h-3', 'rounded-full', 'bg-white/50');
            if (index === 0) indicator.classList.add('bg-white');
            indicator.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(indicator);
        });
        
        // Start autoplay
        startAutoplay();
    }
    
    // Navigation functions
    function goToSlide(index) {
        // Remove active class from current slide and indicator
        document.querySelectorAll('.slide')[currentSlide].classList.remove('active');
        document.querySelectorAll('#indicators button')[currentSlide].classList.remove('bg-white');
        document.querySelectorAll('#indicators button')[currentSlide].classList.add('bg-white/50');
        
        // Update current slide
        currentSlide = index;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        if (currentSlide >= slides.length) currentSlide = 0;
        
        // Add active class to new slide and indicator
        document.querySelectorAll('.slide')[currentSlide].classList.add('active');
        document.querySelectorAll('#indicators button')[currentSlide].classList.remove('bg-white/50');
        document.querySelectorAll('#indicators button')[currentSlide].classList.add('bg-white');
    }
    
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Autoplay functions
    function startAutoplay() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, autoplaySpeed);
        isPlaying = true;
        updatePlayPauseButton();
    }
    
    function stopAutoplay() {
        if (slideInterval) clearInterval(slideInterval);
        isPlaying = false;
        updatePlayPauseButton();
    }
    
    function toggleAutoplay() {
        if (isPlaying) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    }
    
    function updatePlayPauseButton() {
        if (isPlaying) {
            playPauseText.textContent = 'Pause';
            playPauseIcon.classList.remove('fa-play');
            playPauseIcon.classList.add('fa-pause');
        } else {
            playPauseText.textContent = 'Play';
            playPauseIcon.classList.remove('fa-pause');
            playPauseIcon.classList.add('fa-play');
        }
    }
    
    // Fullscreen function
    function toggleFullscreen() {
        const sliderElement = document.querySelector('.slider-container');
        
        if (!document.fullscreenElement) {
            if (sliderElement.requestFullscreen) {
                sliderElement.requestFullscreen();
            } else if (sliderElement.mozRequestFullScreen) { // Firefox
                sliderElement.mozRequestFullScreen();
            } else if (sliderElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
                sliderElement.webkitRequestFullscreen();
            } else if (sliderElement.msRequestFullscreen) { // IE/Edge
                sliderElement.msRequestFullscreen();
            }
            fullscreenBtn.querySelector('i').classList.remove('fa-expand');
            fullscreenBtn.querySelector('i').classList.add('fa-compress');
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            fullscreenBtn.querySelector('i').classList.remove('fa-compress');
            fullscreenBtn.querySelector('i').classList.add('fa-expand');
        }
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        if (isPlaying) {
            stopAutoplay();
            startAutoplay();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        if (isPlaying) {
            stopAutoplay();
            startAutoplay();
        }
    });
    
    playPauseBtn.addEventListener('click', toggleAutoplay);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            if (isPlaying) {
                stopAutoplay();
                startAutoplay();
            }
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            if (isPlaying) {
                stopAutoplay();
                startAutoplay();
            }
        } else if (e.key === ' ') { // Space bar
            toggleAutoplay();
        }
    });
    
    // Handle fullscreen change
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            fullscreenBtn.querySelector('i').classList.remove('fa-compress');
            fullscreenBtn.querySelector('i').classList.add('fa-expand');
        }
    });
    
    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left
            nextSlide();
            if (isPlaying) {
                stopAutoplay();
                startAutoplay();
            }
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right
            prevSlide();
            if (isPlaying) {
                stopAutoplay();
                startAutoplay();
            }
        }
    }
    
    // Initialize the slider
    initSlider();
});
