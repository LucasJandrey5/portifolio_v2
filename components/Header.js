import { i18n } from '../utils/i18n.js';

export function Header() {
  const header = document.createElement('header');
  header.className = 'hidden md:block fixed top-0 left-0 w-full bg-white dark:bg-gray-800 z-40 shadow-md transition-colors duration-200';

  function render() {
    header.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h2 class="text-xl font-bold text-teal-600 dark:text-teal-400">
          ${i18n.t('hero.title')}
        </h2>
        <nav class="space-x-6 text-sm hidden md:block">
          <a href="#home" class="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">${i18n.t('nav.home')}</a>
          <a href="#about" class="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">${i18n.t('nav.about')}</a>
          <a href="#tecnologias" class="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">${i18n.t('nav.technologies')}</a>
          <a href="#roadmap" class="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">${i18n.t('nav.journey')}</a>
          <a href="#projects" class="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">${i18n.t('nav.projects')}</a>
          <a href="#contact" class="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400">${i18n.t('nav.contact')}</a>
        </nav>
      </div>
    `;
  }

  render();
  window.addEventListener('languageChanged', render);

  return header;
}

