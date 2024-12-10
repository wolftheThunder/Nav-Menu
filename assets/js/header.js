
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const contentItems = document.querySelectorAll('.content-item');
  const megaDropdown = document.querySelector('.mega-dropdown');
  const closeDropdown = document.getElementById('closeDropdown');

  // Sidebar Hover Functionality
  sidebarLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      const targetId = link.getAttribute('data-target');
      contentItems.forEach(item => {
        item.classList.remove('active');
      });
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Show Mega Dropdown when hovering over Services
  const servicesLink = document.getElementById('servicesLink');
  servicesLink.addEventListener('mouseenter', () => {
    megaDropdown.style.display = 'block';
  });

  // Close Mega Dropdown on Clicking Close Icon
  closeDropdown.addEventListener('click', () => {
    megaDropdown.style.display = 'none';
  });

  // Close Mega Dropdown when clicking anywhere outside it
  document.addEventListener('click', (e) => {
    if (!megaDropdown.contains(e.target) && !servicesLink.contains(e.target)) {
      megaDropdown.style.display = 'none';
    }
  });

  // Prevent dropdown from closing when scrolling
  window.addEventListener('scroll', (e) => {
    if (megaDropdown.style.display === 'block') {
      megaDropdown.style.position = 'fixed';
    }
  });
  const secteursLink = document.getElementById('secteursLink');
  secteursLink.addEventListener('mouseenter', () => {
    document.getElementById('secteursDropdown').style.display = 'block';
  });

  // Close Mega Dropdown on Clicking Close Icon
  const closeSecteursDropdown = document.getElementById('closeSecteursDropdown');
  closeSecteursDropdown.addEventListener('click', () => {
    document.getElementById('secteursDropdown').style.display = 'none';
  });

  // Close Mega Dropdown when clicking anywhere outside it
  document.addEventListener('click', (e) => {
    if (!document.getElementById('secteursDropdown').contains(e.target) && !secteursLink.contains(e.target)) {
      document.getElementById('secteursDropdown').style.display = 'none';
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Toggle dropdown menu on icon click
    menuIcon.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        menuIcon.classList.toggle('active'); // Change icon color and background
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
            menuIcon.classList.remove('active'); // Reset icon color and background
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
        const searchIcon = document.getElementById('searchIcon');
        const searchOverlay = document.getElementById('searchOverlay');

        // Show the full-page search overlay when the search icon is clicked
        searchIcon.addEventListener('click', function() {
            searchOverlay.style.display = 'block'; // Show the overlay
        });

        // Close the search overlay when the close button is clicked
        document.getElementById('closeSearchBar').addEventListener('click', function() {
            searchOverlay.style.display = 'none'; // Hide the overlay
        });

        // Close the search overlay when clicking outside of it
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none'; // Hide the overlay if clicked outside
            }
        });
    });
