export function DarkModeToggle() {
  const container = document.createElement('button');
  container.onclick = toggleDarkMode;
  container.className = 'fixed lg:top-20 top-16 lg:right-24 right-6 z-50 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200';
  
  container.innerHTML = `
    <span class="block dark:hidden">☀️</span>
    <span class="hidden dark:block">🌙</span>
  `;

  return container;
}

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
}



