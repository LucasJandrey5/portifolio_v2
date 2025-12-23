import { i18n } from '../utils/i18n.js';
import { roadmapData } from '../data/roadmapData.js';

export function Roadmap() {
  const section = document.createElement('section');
  section.id = 'roadmap';
  section.className = 'py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-5 transition-colors duration-200';

  const colorMap = {
    blue: { bg: 'bg-blue-500 dark:bg-blue-600', text: 'text-blue-600 dark:text-blue-400', badge: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400', border: 'border-blue-500 dark:border-blue-600' },
    purple: { bg: 'bg-purple-500 dark:bg-purple-600', text: 'text-purple-600 dark:text-purple-400', badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400', border: 'border-purple-500 dark:border-purple-600' },
    green: { bg: 'bg-green-500 dark:bg-green-600', text: 'text-green-600 dark:text-green-400', badge: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400', border: 'border-green-500 dark:border-green-600' }
  };

  function render() {
    const lang = i18n.getLanguage();
    const items = roadmapData[lang];

    const roadmapItems = items.map((item, index) => {
      const colors = colorMap[item.color];
      const isLast = index === items.length - 1;

      return `
        <li class="${isLast ? 'mb-4' : 'mb-12'} pl-8 relative group">
          <span class="absolute -left-[10px] top-[5px] ${colors.bg} w-5 h-5 rounded-full shadow-md flex items-center justify-center border-2 border-white dark:border-gray-800 group-hover:scale-125 transition-transform duration-300"></span>
          <div class="bg-gray-50 dark:bg-gray-800/60 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1 border-l-4 ${colors.border}">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-semibold px-2 py-1 rounded-full ${colors.badge}">${item.type}</span>
            </div>
            <h3 class="font-bold text-xl ${colors.text}">
              ${item.year ? item.year + ' — ' : ''}${item.title || ''}
            </h3>
            <p class="text-gray-700 dark:text-gray-300 mt-2">
              ${item.description}
              ${item.link ? `<a href="${item.link.href}" class="text-sm ${colors.text} hover:underline block mt-2">${item.link.text}</a>` : ''}
            </p>
          </div>
        </li>
      `;
    }).join('');

    section.innerHTML = `
      <h2 class="text-3xl font-bold text-teal-600 dark:text-teal-400 text-center mb-12">
        ${i18n.t('roadmap.title')}
      </h2>

      <div class="max-w-3xl mx-auto">
        <ul class="border-l-2 border-gradient-to-b from-teal-400 to-purple-500 dark:from-teal-500 dark:to-purple-600">
          ${roadmapItems}
        </ul>
      </div>
    `;
  }

  render();
  window.addEventListener('languageChanged', render);

  return section;
}



