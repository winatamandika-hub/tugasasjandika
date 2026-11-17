(function () {
  const savedTheme = localStorage.getItem('badmintonhub-theme');
  const preferredTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  const theme = savedTheme || preferredTheme;

  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  const button = document.createElement('button');
  button.id = 'theme-toggle';
  button.type = 'button';
  button.className = 'theme-toggle';
  button.setAttribute('aria-label', 'Ganti tema');
  button.innerHTML = '<span class="theme-toggle-icon" aria-hidden="true"></span><span class="theme-toggle-label"></span>';

  function applyTheme(nextTheme) {
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem('badmintonhub-theme', nextTheme);
    button.setAttribute('aria-pressed', String(nextTheme === 'light'));
    button.querySelector('.theme-toggle-label').textContent = nextTheme === 'light' ? 'Terang' : 'Gelap';
    button.querySelector('.theme-toggle-icon').textContent = nextTheme === 'light' ? '☀' : '☾';
    button.title = 'Ganti ke tema ' + (nextTheme === 'light' ? 'gelap' : 'terang');
  }

  applyTheme(theme);
  button.addEventListener('click', function () {
    applyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
  });

  const nav = document.querySelector('#top-navbar nav');
  if (nav) nav.appendChild(button);
}());
