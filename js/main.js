document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('darkModeToggle');

  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
