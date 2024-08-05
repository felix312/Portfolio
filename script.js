// This is a code for the dark-mode toggle
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Light Mode';
    } else {
        this.textContent = 'Dark Mode';
    }
});

// Show or hide the "Back to Top" button based on scroll position
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var button = document.getElementById("back-to-top");

    // Display the button when the user scrolls down 300 pixels
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 250) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Scroll to the top when the button is clicked
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

let link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/gh/felix312/Portfolio@main/custom.css';

document.querySelector('head').appendChild(link);
