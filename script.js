(function () {
  var pages = Array.prototype.slice.call(document.querySelectorAll('[data-page]'));
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var nav = document.getElementById('site-nav');
  var menuBtn = document.querySelector('.menu-btn');
  var first = true;

  function closeMenu() {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  function route() {
    var id = (location.hash || '#home').slice(1);
    if (id === 'reports') id = 'policies';
    var page = pages.filter(function (p) { return p.getAttribute('data-page') === id; })[0];
    if (!page) { id = 'home'; page = pages[0]; }
    pages.forEach(function (p) { p.hidden = (p !== page); });
    links.forEach(function (a) {
      if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    document.title = (id === 'home' ? '' : page.getAttribute('data-title') + ' | ') + 'Tiger Strategies Fund – I';
    closeMenu();
    window.scrollTo(0, 0);
    if (!first) {
      var h = page.querySelector('h1');
      if (h) h.focus({ preventScroll: true });
    }
    first = false;
  }
  window.addEventListener('hashchange', route);
  route();
})();
