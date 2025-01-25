document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu li');
  const sections = document.querySelectorAll('.section');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove the 'active' class from all sections
      sections.forEach(section => section.classList.remove('active'));

      // Add the 'active' class to the corresponding section
      const target = item.getAttribute('data-target');
      const targetSection = document.getElementById(target);
      if (targetSection) {
        targetSection.classList.add('active');
      }

      // Update active menu item styling
      menuItems.forEach(menu => menu.classList.remove('active'));
      item.classList.add('active');
    });
  });
});
