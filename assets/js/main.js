(() => {
  const root = document.documentElement;
  const button = document.getElementById('toggleTheme');
  const hint = document.getElementById('themeHint');
  const themeColor = document.querySelector('meta[name="theme-color"]');

  button.addEventListener('click', () => {
    const isNight = root.dataset.theme !== 'dark';
    root.dataset.theme = isNight ? 'dark' : 'light';
    hint.textContent = isNight ? 'Night' : 'Light';
    button.setAttribute('aria-label', isNight ? 'Switch to Light theme' : 'Switch to Night theme');
    themeColor.content = isNight ? '#0b0e14' : '#ffffff';
  });

  document.getElementById('mainVideo').addEventListener('error', () => {
    document.getElementById('videoError').hidden = false;
  });
})();
