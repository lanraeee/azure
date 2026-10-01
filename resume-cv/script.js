(async () => {
  const API = 'https://belloite-func-f8g5bmbcdyducvfd.germanywestcentral-01.azurewebsites.net/api/visitorcounter';
  try {
    const res = await fetch(API);
    if (!res.ok) return;
    const { count } = await res.json();
    document.getElementById('visitor-count').textContent = count.toLocaleString();
    document.getElementById('visitor-counter').style.display = 'flex';
  } catch (_) {}
})();

(() => {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;
  const toggle = () => btn.classList.toggle('visible', window.scrollY > 300);
  window.addEventListener('scroll', toggle, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  toggle();
})();
