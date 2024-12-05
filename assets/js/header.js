document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const servicesLink = document.querySelector('.services-link');

    // Show sidebar on hover
    servicesLink.addEventListener('mouseenter', function() {
        sidebar.style.display = 'block';
    });

    // Hide sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !servicesLink.contains(event.target)) {
            sidebar.style.display = 'none';
        }
    });
});