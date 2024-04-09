document.addEventListener('DOMContentLoaded', function() {
    // mobile device hamburger button
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

    // img hover
    document.querySelectorAll('.nav_link').forEach(link => {
        const home = link.querySelector('.home_hover');
        link.addEventListener('mouseover', function() {
            const hoverSrc = home.getAttribute('data-hover');
            if (hoverSrc) home.src = hoverSrc;
        });
        link.addEventListener('mouseout', function() {
            const originalSrc = home.getAttribute('data-original');
            if (originalSrc) home.src = originalSrc;
        });
    });

    document.querySelectorAll('.nav_link').forEach(link => {
        const work = link.querySelector('.work_hover');
        link.addEventListener('mouseover', function() {
            const hoverSrc = work.getAttribute('data-hover');
            if (hoverSrc) work.src = hoverSrc;
        });
        link.addEventListener('mouseout', function() {
            const originalSrc = work.getAttribute('data-original');
            if (originalSrc) work.src = originalSrc;
        });
    });

    document.querySelectorAll('.nav_link').forEach(link => {
        const about = link.querySelector('.about_hover');
        link.addEventListener('mouseover', function() {
            const hoverSrc = about.getAttribute('data-hover');
            if (hoverSrc) about.src = hoverSrc;
        });
        link.addEventListener('mouseout', function() {
            const originalSrc = about.getAttribute('data-original');
            if (originalSrc) about.src = originalSrc;
        });
    });

    document.querySelector('.linkedin_icon').addEventListener('mouseover', function(){
        this.src = './images/linkedin_highlight.png'
    })
    document.querySelector('.linkedin_icon').addEventListener('mouseout', function(){
        this.src = './images/linkedin.png'
    })

    document.querySelector('.email_icon').addEventListener('mouseover', function(){
        this.src = './images/email_highlight.png'
    })
    document.querySelector('.email_icon').addEventListener('mouseout', function(){
        this.src = './images/email.png'
    })

    const contents = document.querySelectorAll('.content');

    const revealOnScroll = () => {
        for (let i = 0; i < contents.length; i++) {
            const windowHeight = window.innerHeight;
            const contentTop = contents[i].getBoundingClientRect().top;
            const contentVisible = 250;

            if (contentTop < windowHeight - contentVisible) {
                contents[i].classList.add('visible');
            } else {
                contents[i].classList.remove('visible');
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
