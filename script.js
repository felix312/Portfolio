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
link.href = 'https://github.com/felix312/Portfolio/blob/main/custom.css?raw=true';

document.querySelector('head').appendChild(link);

