import { i18n } from '../utils/i18n.js';
import { experiencesData } from '../data/experiencesData.js';

export function Experiences() {
  const section = document.createElement('section');
  section.id = 'experiences';
  section.className = 'py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-200';

  function render() {
    const lang = i18n.getLanguage();
    const experiences = experiencesData[lang];

    const experienceCards = experiences.map(exp => {
      const techTags = exp.technologies.map(tech => `
        <span class="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs">
          ${tech}
        </span>
      `).join('');

      return `
        <div class="bg-white/70 dark:bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700/50 border-l-4 border-emerald-500 dark:border-emerald-400 transform hover:-translate-y-1 transition-all duration-300 w-full"
             data-aos="zoom-in">
          <div class="flex items-center gap-4 mb-4">
            <div>
              <h3 class="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                ${exp.title}
              </h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 italic">
                ${exp.company} | ${exp.period}
              </p>
            </div>
          </div>
          <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            ${exp.description}
          </p>
          <div class="flex flex-wrap gap-2">
            ${techTags}
          </div>
        </div>
      `;
    }).join('');

    section.innerHTML = `
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          ${i18n.t('experiences.title')}
        </h2>
        <div class="flex flex-col gap-8" role="list" aria-label="Lista de experiências">
          ${experienceCards}
        </div>
      </div>
    `;
  }

  render();
  window.addEventListener('languageChanged', render);

  return section;
}



