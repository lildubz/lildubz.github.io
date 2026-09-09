(function () {
  var btn = document.getElementById('themeToggle');
  if (!btn) return;
  var root = document.documentElement;

  btn.addEventListener('click', function () {
    var isLight = root.getAttribute('data-theme') === 'light';
    if (isLight) {
      root.removeAttribute('data-theme');
      localStorage.setItem('orbit-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('orbit-theme', 'light');
    }
  });
})();
