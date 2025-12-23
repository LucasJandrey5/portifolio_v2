import { i18n } from '../utils/i18n.js';

export function About() {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'py-20 bg-gray-100 dark:bg-gray-800 px-6 transition-colors duration-200';
  section.setAttribute('data-aos', 'fade-right');

  function render() {
    section.innerHTML = `
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white relative">
          <span class="inline-block relative">
            ${i18n.t('about.title')}
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-purple-500"></span>
          </span>
        </h2>
        <div class="bg-white/80 dark:bg-gray-800/60 p-8 rounded-lg shadow-sm backdrop-blur-sm border border-gray-200 dark:border-gray-700">
          <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            ${i18n.t('about.text1')}
          </p>
          <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
            ${i18n.t('about.text2')}
          </p>
        </div>
      </div>
    `;
  }

  render();
  window.addEventListener('languageChanged', render);

  return section;
}



