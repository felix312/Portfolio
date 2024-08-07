document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Rounded button
//const btn = document.querySelector(".button");

//btn.classList.toggle("button--loading");

// Show or hide the "Back to Top" button
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

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

let link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/gh/felix312/Portfolio@main/custom.css';

document.querySelector('head').appendChild(link);
