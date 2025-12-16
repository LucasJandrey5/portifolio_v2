import { i18n } from '../utils/i18n.js';

export function Technologies() {
  const section = document.createElement('section');
  section.id = 'tecnologias';
  section.className = 'relative w-full py-16 md:py-20 2xl:py-24';

  const technologies = [
    { name: 'Javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Typescript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://react.dev/' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', url: 'https://www.php.net/' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', url: 'https://laravel.com/' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', url: 'https://aws.amazon.com/' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org/en' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', url: 'https://www.mysql.com/' },
    { name: 'Tailwindcss', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', url: 'https://tailwindcss.com/' },
    { name: 'Cloudflare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg', url: 'https://www.cloudflare.com/' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', url: 'https://git-scm.com/' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', url: 'https://www.docker.com/' }
  ];

  function render() {
    const techItems = technologies.map(tech => `
      <div class="flex flex-col items-center gap-2 group">
        <a target="_blank" class="transform transition-transform duration-300 group-hover:scale-110 bg-white/20 dark:bg-black/20 p-3 rounded-xl backdrop-blur-sm border border-white/30 dark:border-white/10 shadow-lg"
           href="${tech.url}" aria-label="${tech.name}">
          <img alt="${tech.name}" loading="lazy" width="64" height="64" decoding="async" class="transition-transform duration-300"
               style="color: transparent" src="${tech.icon}"/>
        </a>
        <p class="text-normal text-base md:text-lg text-white group-hover:text-white font-medium transition-colors duration-300">
          ${tech.name}
        </p>
      </div>
    `).join('');

    section.innerHTML = `
      <!-- Top wave divider -->
      <div class="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180 z-10">
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" class="text-gray-100 dark:text-gray-800 relative block h-12 w-full">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="fill-current"></path>
        </svg>
      </div>

      <!-- Gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/90 via-purple-500/90 to-pink-500/90 dark:from-indigo-700/90 dark:via-purple-800/90 dark:to-pink-700/90 opacity-80 dark:opacity-90 z-0"></div>

      <div class="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8 py-16 z-20">
        <div class="flex flex-col items-center gap-4">
          <h2 class="text-3xl font-bold text-white text-center mb-8 drop-shadow-md">
            ${i18n.t('technologies.title')}
          </h2>
          <p class="text-white/90 text-center max-w-2xl backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 shadow-lg">
            ${i18n.t('technologies.subtitle')}
          </p>
        </div>

        <div class="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-6 lg:gap-y-12 place-items-center" role="list" aria-label="Lista de tecnologias">
          ${techItems}
        </div>
      </div>

      <!-- Bottom wave divider -->
      <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" class="text-gray-50 dark:text-gray-900 relative block h-12 w-full">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="fill-current"></path>
        </svg>
      </div>
    `;
  }

  render();
  window.addEventListener('languageChanged', render);

  return section;
}

