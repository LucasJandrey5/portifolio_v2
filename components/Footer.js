import { i18n } from '../utils/i18n.js';

export function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'bg-gray-100 dark:bg-gray-900 py-6 text-center text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200';

  function render() {
    footer.innerHTML = `
      <span>&copy; 2025 | </span><span>${i18n.t('footer.text')}</span>
    `;
  }

  render();
  window.addEventListener('languageChanged', render);

  return footer;
}

