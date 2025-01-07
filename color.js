// Get the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode was previously set
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Add an event listener to toggle dark mode
darkModeToggle.addEventListener('click', () => {
    // Toggle the dark mode class on the body
    document.body.classList.toggle('dark-mode');

    // Save the current dark mode status in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});
