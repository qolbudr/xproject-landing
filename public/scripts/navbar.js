window.addEventListener('load', function() {
  const navElem = document.querySelector('nav');
  
  const hamburgerBtn = document.getElementById('menu__hamburger');
  hamburgerBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    if (navElem.classList.contains('hidden')) {
      navElem.classList.remove('hidden');
    }
  });

  const closeMenuBtn = document.getElementById('menu__close');
  closeMenuBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    if (!navElem.classList.contains('hidden')) {
      navElem.classList.add('animate-reverse-slide-from-top');

      setTimeout(function() {
        navElem.classList.add('hidden');
        navElem.classList.remove('animate-reverse-slide-from-top');
      }, 700);
    }
  });
});