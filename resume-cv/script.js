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
