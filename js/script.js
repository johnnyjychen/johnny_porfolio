document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.hamburger_menu');
    const navList = document.querySelector('.nav_list'); 
    menuButton.addEventListener('click', function(screen) {
        screen.stopPropagation();
        if (navList.style.right === '-800px') {
            navList.style.right = '0';
        } else {
            navList.style.right = '-800px';
        }
    });

    document.addEventListener('click', function(screen) {
        if (!navList.contains(screen.target) && screen.target !== menuButton) {
            navList.style.right = '-800px';}
    });
});