// Hamburger Menu - Open and Close
document.addEventListener('DOMContentLoaded', function () {
  var menuIcon = document.getElementById('menu-icon');
  var navMenu = document.querySelector('nav ul');

  menuIcon.addEventListener('click', function () {
    navMenu.classList.toggle('show');
  });
});

// Navigation Bar Menu Buttons - Click and Scroll
document.addEventListener('DOMContentLoaded', function () {
  // Function to scroll to a section
  function scrollToSection(sectionClass) {
    var section = document.querySelector(sectionClass);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Function to attach click event listener to a button
  function attachClickListener(buttonClass, sectionClass) {
    var button = document.querySelector(buttonClass);
    if (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection(sectionClass);
      });
    }
  }

  // Attach click listeners for each button and section
  attachClickListener('.home-btn', '.hero');
  attachClickListener('.about-btn', '.about-us');
  attachClickListener('.classes-btn', '.classes');
  attachClickListener('.contact-btn', '.contact');
});