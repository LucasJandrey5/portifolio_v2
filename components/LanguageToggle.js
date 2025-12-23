import { i18n } from '../utils/i18n.js';

export function LanguageToggle() {
  const container = document.createElement('button');
  container.id = 'lang-toggle';
  container.onclick = () => {
    i18n.toggleLanguage();
    window.dispatchEvent(new Event('languageChanged'));
    updateButton();
  };
  container.className = 'fixed lg:top-20 top-4 lg:right-4 right-6 z-50 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium';

  function updateButton() {
    container.textContent = i18n.getLanguage() === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN';
  }

  updateButton();
  return container;
}



