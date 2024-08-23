document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs-wrap .tab');
    const menuTabs = document.querySelectorAll('.menu-tab');
    const header = document.querySelector('header');
    const firstButton = document.getElementById('first-button');
    const navButton = document.getElementById('nav-button');
    const alertElements = document.querySelectorAll('.alert');
    const videoSource = document.getElementById('videoSource');

    const showTab = (index) => {
        tabs.forEach((tab, i) => {
            tab.classList.toggle('active', i === index);
        });
        menuTabs.forEach((menuTab, i) => {
            menuTab.classList.toggle('active', i === index);
        });
    };

    menuTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            showTab(index);
        });
    });

    showTab(0);

    const handleScroll = () => {
        if (firstButton) {
            const rect = firstButton.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.top < window.innerHeight;

            if (isVisible) {
                if (navButton) {
                    navButton.style.display = 'none';
                }
                alertElements.forEach(el => el.style.display = 'flex');
            } else {
                if (navButton) {
                    navButton.style.display = 'block';
                }
                alertElements.forEach(el => el.style.display = 'none');
            }
        }

        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    const updateVideoSource = () => {
        if (window.innerWidth <= 479 && /Mobi/.test(navigator.userAgent)) {
            videoSource.src = 'sabri-mobile.mp4';
        } else {
            videoSource.src = 'sabri.mp4';
        }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateVideoSource);
    handleScroll();
    updateVideoSource();
});