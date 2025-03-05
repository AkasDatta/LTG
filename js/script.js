document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleMenu');
    const menu = document.getElementById('navbar-sticky');
    const barsIcon = toggleButton.querySelector('.fa-bars');
    const xmarkIcon = toggleButton.querySelector('.fa-xmark');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('hidden'); // Show/hide the menu
        barsIcon.classList.toggle('hidden'); // Toggle bars icon
        xmarkIcon.classList.toggle('hidden'); // Toggle x-mark icon
    });

    // Initially hide the x-mark icon
    xmarkIcon.classList.add('hidden');
});


// Testimonial 