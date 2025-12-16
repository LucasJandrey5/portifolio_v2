import { i18n } from '../utils/i18n.js';

export function Contact() {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-200';
  section.setAttribute('data-aos', 'fade-left');

  function render() {
    section.innerHTML = `
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          ${i18n.t('contact.title')}
        </h2>
        <p class="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
          ${i18n.t('contact.subtitle')}
        </p>

        <div class="flex flex-col md:flex-row justify-center items-center gap-8 mt-10" role="list" aria-label="Informações de contato">
          <!-- Email -->
          <div class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-auto transform hover:-translate-y-1">
            <div class="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-teal-600 dark:text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              ${i18n.t('contact.email')}
            </h4>
            <button onclick="copyCardEmail(this)" class="relative text-teal-600 dark:text-teal-400 hover:underline break-all">
              <div class="flex items-center gap-2">
                lucasjandrey5@gmail.com
                <span class="copiedEmail absolute left-1/2 -translate-x-1/2 top-8 bg-gray-800 px-3 rounded-md text-xs text-white dark:bg-gray-700 dark:text-gray-300 shadow-lg z-50 opacity-0 pointer-events-none translate-y-2 transition-all duration-300">
                  ${i18n.t('contact.copied')}
                </span>
              </div>
            </button>
          </div>

          <a href="contatos.html" class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-auto transform hover:-translate-y-1">
            <div class="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600 dark:text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              ${i18n.t('contact.socialMedia')}
            </h4>
            <span class="text-purple-600 dark:text-purple-400 hover:underline">
              ${i18n.t('contact.allContacts')}
            </span>
          </a>
        </div>
      </div>
    `;
  }

  render();
  window.addEventListener('languageChanged', render);

  return section;
}

