const toggleButton = document.getElementById('toggle-btn');

if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } 
    else {
        localStorage.removeItem('dark-mode');
    }
});