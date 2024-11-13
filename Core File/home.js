// JavaScript for auto-scrolling and button-controlled scrolling
const gallery = document.getElementById('imageGallery');
const images = gallery.querySelectorAll('.gallery-image');
const buttonsContainer = document.getElementById('navButtons');
let currentIndex = 0;
const delayBetweenLoops = 2000; // 2 seconds delay at the end

// Hide all images initially except the first one
images.forEach((img, index) => {
    img.classList.remove('visible');
    img.style.display = index === 0 ? 'block' : 'none';
});

// Create navigation buttons dynamically based on the number of images
images.forEach((_, index) => {
    const button = document.createElement('button');
    button.onclick = () => scrollToImage(index);
    if (index === 0) button.classList.add('active');
    buttonsContainer.appendChild(button);
});

const buttons = buttonsContainer.children;

function scrollToImage(index) {
    // Hide all images except the selected one
    images.forEach((img, idx) => {
        img.classList.remove('visible'); // Remove the visible class
        img.style.display = idx === index ? 'block' : 'none';
    });

    // Add the visible class to the selected image
    images[index].classList.add('visible');

    // Update active button
    Array.from(buttons).forEach((button, idx) => {
        button.classList.toggle('active', idx === index);
    });

    currentIndex = index;
}

function autoScroll() {
    currentIndex = (currentIndex + 1) % images.length;
    scrollToImage(currentIndex);
}

// Start auto-scrolling every 3 seconds
setInterval(autoScroll, 3000);