export function ScrollToTop() {
  const button = document.createElement('button');
  button.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  button.className = 'fixed bottom-4 right-4 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 opacity-0';
  button.setAttribute('aria-label', 'Voltar ao topo');
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
    </svg>
  `;

  // Show/hide scroll button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      button.classList.remove('opacity-0');
      button.classList.add('opacity-100');
    } else {
      button.classList.remove('opacity-100');
      button.classList.add('opacity-0');
    }
  });

  return button;
}



