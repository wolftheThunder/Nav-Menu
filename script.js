const servicesLink = document.getElementById('servicesLink');
const megaDropdown = document.getElementById('megaDropdown');
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const contentItems = document.querySelectorAll('.content-item');

// Show dropdown on hover
servicesLink.addEventListener('mouseenter', () => {
  megaDropdown.classList.add('show');
});

servicesLink.addEventListener('mouseleave', () => {
  setTimeout(() => {
    megaDropdown.classList.remove('show');
  }, 300);
});

megaDropdown.addEventListener('mouseenter', () => {
  megaDropdown.classList.add('show');
});

megaDropdown.addEventListener('mouseleave', () => {
  megaDropdown.classList.remove('show');
});

// Sidebar link hover logic
sidebarLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const targetId = link.getAttribute('data-target');

    contentItems.forEach(item => {
      item.classList.remove('active');
    });

    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  });
});
