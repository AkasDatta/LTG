document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleMenu');
    const menu = document.getElementById('navbar-sticky');
    const plusIcon = toggleButton.querySelector('.fa-plus');
    const xmarkIcon = toggleButton.querySelector('.fa-xmark');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('hidden'); // Show/hide the menu
        plusIcon.classList.toggle('hidden'); // Toggle plus icon
        xmarkIcon.classList.toggle('hidden'); // Toggle x-mark icon
    });

    // Initially hide the x-mark icon
    xmarkIcon.classList.add('hidden');
});