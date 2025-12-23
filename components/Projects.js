import { i18n } from '../utils/i18n.js';
import { projectsData } from '../data/projectsData.js';

export function Projects() {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'py-20 px-6 bg-gray-200 dark:bg-gray-900 transition-colors duration-200';

  function render() {
    const lang = i18n.getLanguage();
    const project = projectsData[lang];

    const techTags = project.technologies.map(tech => `
      <span class="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs">
        ${tech}
      </span>
    `).join('');

    const featuresList = project.features.map(feature => `
      <li class="text-gray-600 dark:text-gray-300">
        <span class="font-semibold text-emerald-600 dark:text-emerald-400">${feature.label}:</span>
        ${feature.description}
      </li>
    `).join('');

    section.innerHTML = `
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          ${i18n.t('projects.title')}
        </h2>
        <div class="flex flex-col gap-8" role="list" aria-label="Lista de projetos">
          <!-- Oeste Orgânicos -->
          <div class="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-colors duration-200 hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
               data-aos="zoom-in">
            <div class="flex flex-col items-center justify-center mx-auto p-5 w-1/2">
              <img src="${project.image}" alt="${project.title}" class="w-full text-center mx-auto rounded-lg shadow-md" loading="lazy"/>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                ${project.title}
              </h3>
              <p class="text-sm text-gray-400 italic mb-4">${project.status}</p>

              <p class="text-sm text-gray-800 dark:text-gray-300 leading-relaxed mb-4">
                ${project.description}
              </p>

              <div class="flex flex-wrap gap-2 mb-4">
                ${techTags}
              </div>

              <ul class="text-sm text-gray-300 space-y-2 list-disc list-inside">
                ${featuresList}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  render();
  window.addEventListener('languageChanged', render);

  return section;
}



