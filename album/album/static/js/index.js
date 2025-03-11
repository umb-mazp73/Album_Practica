function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const button = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-theme')) {
      button.innerHTML = '🌞';
    } else {
      button.innerHTML = '🌙';
    }
  }