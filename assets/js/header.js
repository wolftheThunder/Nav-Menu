document.addEventListener('DOMContentLoaded', function() {
    const megaMenu = document.getElementById('megaMenu');
    const closeButton = document.getElementById('closeButton');
    const servicesLink = document.querySelector('.services-link');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Show mega menu on hover
    servicesLink.addEventListener('mouseenter', function() {
        megaMenu.style.display = 'block';
    });

    // Hide mega menu when clicking the close button
    closeButton.addEventListener('click', function() {
        megaMenu.style.display = 'none';
    });

    // Hide mega menu when navigating to another nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Check if the clicked link is not the services link
            if (this !== servicesLink) {
                megaMenu.style.display = 'none';
            }
        });
    });

    // Prevent closing the mega menu when mouse leaves the services link
    servicesLink.addEventListener('mouseleave', function() {
        // Do nothing to keep the menu open
    });

    // Optional: Keep the mega menu open when hovering over it
    megaMenu.addEventListener('mouseenter', function() {
        megaMenu.style.display = 'block'; // Keep it open
    });

    megaMenu.addEventListener('mouseleave', function() {
        // Optionally, you can close it when the mouse leaves the mega menu
        // megaMenu.style.display = 'none';
    });

    // Handle submenu items
    document.querySelectorAll('.submenu-item').forEach(item => {
        item.addEventListener('mouseover', function() {
            // Hide all submenu contents
            document.querySelectorAll('.submenu-content').forEach(content => {
                content.style.display = 'none';
            });
            // Show the corresponding submenu content
            const contentId = this.getAttribute('data-content');
            document.getElementById(contentId).style.display = 'block';
        });
    });
});