window.addEventListener('load', function() {
  const anchorElems = document.querySelectorAll('.smooth-scroll');

  anchorElems.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      const href = elem.getAttribute('href');
      const targetedElem = document.querySelector(href);

      if (elem.classList.contains('smooth-scroll__nav')) {
        const navElem = document.querySelector('nav');
        
        if (!navElem.classList.contains('hidden')) {
          navElem.classList.add('animate-reverse-slide-from-top');
    
          setTimeout(function() {
            navElem.classList.add('hidden');
            navElem.classList.remove('animate-reverse-slide-from-top');
          }, 700);
        }
      }

      scrollTo({
        top: href === '#' ? 0 : targetedElem.offsetTop,
        behavior: 'smooth',
      });
    });
  });
});