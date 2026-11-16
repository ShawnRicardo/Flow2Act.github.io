(() => {
  const root = document.documentElement;
  const button = document.getElementById('toggleTheme');
  const hint = document.getElementById('themeHint');
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const modes = ['auto', 'light', 'dark'];
  const labels = { auto: 'Auto', light: 'Light', dark: 'Night' };
  let mode = 'auto';
  try {
    const saved = localStorage.getItem('flow2act-theme');
    if (modes.includes(saved)) mode = saved;
  } catch { /* Local file previews may restrict storage. */ }
  function applyTheme() {
    const resolved = mode === 'auto' ? (media.matches ? 'dark' : 'light') : mode;
    root.dataset.theme = resolved;
    hint.textContent = labels[mode];
    button.setAttribute('aria-label', `Color theme: ${labels[mode]}. Switch to ${labels[modes[(modes.indexOf(mode) + 1) % modes.length]]}.`);
    document.querySelector('meta[name="theme-color"]').content = resolved === 'dark' ? '#0b0e14' : '#f7f7fb';
  }
  button.addEventListener('click', () => {
    mode = modes[(modes.indexOf(mode) + 1) % modes.length];
    try { localStorage.setItem('flow2act-theme', mode); } catch { /* Theme still works without persistence. */ }
    applyTheme();
  });
  media.addEventListener('change', applyTheme);
  applyTheme();
  document.getElementById('mainVideo').addEventListener('error', () => {
    document.getElementById('videoError').hidden = false;
  });
})();
