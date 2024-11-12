window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('loadedmetadata', function() {
    var video = document.getElementById('background-video');
    video.play();
});

document.addEventListener('click', function() {
    var video = document.getElementById('background-video');
    if (video.paused) {
        video.play();
    }
});

function scrollToLeft() {
    console.log("Scroll left button clicked"); // Debugging line
    document.querySelector('.services-slider').scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollToRight() {
    console.log("Scroll right button clicked"); // Debugging line
    document.querySelector('.services-slider').scrollBy({ left: 300, behavior: 'smooth' });
}

