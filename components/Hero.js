import { i18n } from '../utils/i18n.js';

export function Hero() {
  const section = document.createElement('section');
  section.id = 'home';
  section.className = 'grid grid-cols-1 md:grid-cols-3 px-4 min-h-[100dvh] pb-20 md:pb-0 justify-center md:justify-between items-center bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300';

  function render() {
    section.innerHTML = `
      <h1 class="sr-only">Lucas Jandrey | Desenvolvedor Full Stack</h1>
      
      <!-- Primeira coluna -->
      <div class="w-full flex flex-col items-center space-y-6 order-2 md:order-2 mx-auto">
        <div class="flex flex-col items-center md:items-start">
          <div class="inline-block bg-orange-100 dark:bg-purple-900/30 p-2 rounded-full backdrop-blur-sm transition-colors duration-300">
            <p class="text-orange-600 dark:text-purple-400">${i18n.t('hero.greeting')}</p>
          </div>

          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Lucas Jandrey
          </h2>
          <div class="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
            <div id="typing-text" class="text-lg sm:text-xl md:text-2xl font-mono" aria-label="Profissão e habilidades"></div>
          </div>

          <!-- Social Links -->
          <div class="justify-center md:justify-start flex gap-4 mt-6" role="navigation" aria-label="Redes sociais">
            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/lucas-jandrey" target="_blank" rel="noopener noreferrer"
               class="social-link text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all relative group duration-300"
               aria-label="LinkedIn">
              <span class="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">lucas-jandrey</span>
              <svg height="36px" fill="currentColor" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;" version="1.1" viewBox="0 0 512 512">
                <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z"/>
              </svg>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/LucasJandrey5" target="_blank" rel="noopener noreferrer"
               class="social-link text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all relative group duration-300"
               aria-label="GitHub">
              <span class="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">LucasJandrey5</span>
              <svg fill="currentColor" height="36px" viewBox="0 0 25 25">
                <path clip-rule="evenodd" d="M15.7481 24.9471C24.0901 24.7061 24.9111 22.9501 24.9111 12.9811C24.9111 1.98108 23.9111 0.981079 12.9111 0.981079C1.91113 0.981079 0.911133 1.98108 0.911133 12.9811C0.911133 22.9761 1.73713 24.7151 10.1391 24.9491C10.2121 24.8581 10.2391 24.7441 10.2391 24.6281C10.2391 24.3781 10.2291 21.8121 10.2241 20.9291C7.18713 21.5681 6.54613 19.5101 6.54613 19.5101C6.04913 18.2881 5.33313 17.9621 5.33313 17.9621C4.34213 17.3061 5.40813 17.3191 5.40813 17.3191C6.50413 17.3941 7.08113 18.4101 7.08113 18.4101C8.05513 20.0271 9.63713 19.5601 10.2591 19.2891C10.3581 18.6061 10.6401 18.1391 10.9521 17.8751C8.52713 17.6081 5.97813 16.7001 5.97813 12.6451C5.97813 11.4901 6.40413 10.5461 7.10213 9.80608C6.98913 9.53808 6.61513 8.46208 7.20913 7.00608C7.20913 7.00608 8.12613 6.72108 10.2121 8.09008C11.0831 7.85508 12.0171 7.73808 12.9461 7.73408C13.8731 7.73808 14.8071 7.85508 15.6801 8.09008C17.7651 6.72108 18.6801 7.00608 18.6801 7.00608C19.2761 8.46208 18.9011 9.53808 18.7881 9.80608C19.4881 10.5461 19.9111 11.4901 19.9111 12.6451C19.9111 16.7101 17.3581 17.6051 14.9251 17.8661C15.3171 18.1931 15.6661 18.8391 15.6661 19.8261C15.6661 20.7721 15.6601 22.4451 15.6561 23.5541C15.6541 24.1031 15.6531 24.5131 15.6531 24.6281C15.6531 24.7371 15.6821 24.8521 15.7481 24.9471V24.9471Z"/>
              </svg>
            </a>

            <!-- Instagram -->
            <a href="https://instagram.com/lucas_jandrey_" target="_blank" rel="noopener noreferrer"
               class="social-link text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all relative group duration-300"
               aria-label="Instagram">
              <span class="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">@lucas_jandrey_</span>
              <svg height="36px" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;" viewBox="0 0 512 512">
                <defs>
                  <linearGradient id="igGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#8e44ad"/>
                    <stop offset="50%" stop-color="#e84393"/>
                    <stop offset="100%" stop-color="#fd79a8"/>
                  </linearGradient>
                </defs>
                <path fill="currentColor" class="group-hover:fill-[url(#igGradient)] text-gray-600 dark:text-gray-400" d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-193.446,81c-47.527,0 -53.487,0.201 -72.152,1.053c-18.627,0.85 -31.348,3.808 -42.48,8.135c-11.508,4.472 -21.267,10.456 -30.996,20.184c-9.729,9.729 -15.713,19.489 -20.185,30.996c-4.326,11.132 -7.284,23.853 -8.135,42.48c-0.851,18.665 -1.052,24.625 -1.052,72.152c0,47.527 0.201,53.487 1.052,72.152c0.851,18.627 3.809,31.348 8.135,42.48c4.472,11.507 10.456,21.267 20.185,30.996c9.729,9.729 19.488,15.713 30.996,20.185c11.132,4.326 23.853,7.284 42.48,8.134c18.665,0.852 24.625,1.053 72.152,1.053c47.527,0 53.487,-0.201 72.152,-1.053c18.627,-0.85 31.348,-3.808 42.48,-8.134c11.507,-4.472 21.267,-10.456 30.996,-20.185c9.729,-9.729 15.713,-19.489 20.185,-30.996c4.326,-11.132 7.284,-23.853 8.134,-42.48c0.852,-18.665 1.053,-24.625 1.053,-72.152c0,-47.527 -0.201,-53.487 -1.053,-72.152c-0.85,-18.627 -3.808,-31.348 -8.134,-42.48c-4.472,-11.507 -10.456,-21.267 -20.185,-30.996c-9.729,-9.728 -19.489,-15.712 -30.996,-20.184c-11.132,-4.327 -23.853,-7.285 -42.48,-8.135c-18.665,-0.852 -24.625,-1.053 -72.152,-1.053Zm0,31.532c46.727,0 52.262,0.178 70.715,1.02c17.062,0.779 26.328,3.63 32.495,6.025c8.169,3.175 13.998,6.968 20.122,13.091c6.124,6.124 9.916,11.954 13.091,20.122c2.396,6.167 5.247,15.433 6.025,32.495c0.842,18.453 1.021,23.988 1.021,70.715c0,46.727 -0.179,52.262 -1.021,70.715c-0.778,17.062 -3.629,26.328 -6.025,32.495c-3.175,8.169 -6.967,13.998 -13.091,20.122c-6.124,6.124 -11.953,9.916 -20.122,13.091c-6.167,2.396 -15.433,5.247 -32.495,6.025c-18.45,0.842 -23.985,1.021 -70.715,1.021c-46.73,0 -52.264,-0.179 -70.715,-1.021c-17.062,-0.778 -26.328,-3.629 -32.495,-6.025c-8.169,-3.175 -13.998,-6.967 -20.122,-13.091c-6.124,-6.124 -9.917,-11.953 -13.091,-20.122c-2.396,-6.167 -5.247,-15.433 -6.026,-32.495c-0.842,-18.453 -1.02,-23.988 -1.02,-70.715c0,-46.727 0.178,-52.262 1.02,-70.715c0.779,-17.062 3.63,-26.328 6.026,-32.495c3.174,-8.168 6.967,-13.998 13.091,-20.122c6.124,-6.123 11.953,-9.916 20.122,-13.091c6.167,-2.395 15.433,-5.246 32.495,-6.025c18.453,-0.842 23.988,-1.02 70.715,-1.02Zm0,53.603c-49.631,0 -89.865,40.234 -89.865,89.865c0,49.631 40.234,89.865 89.865,89.865c49.631,0 89.865,-40.234 89.865,-89.865c0,-49.631 -40.234,-89.865 -89.865,-89.865Zm0,148.198c-32.217,0 -58.333,-26.116 -58.333,-58.333c0,-32.217 26.116,-58.333 58.333,-58.333c32.217,0 58.333,26.116 58.333,58.333c0,32.217 -26.116,58.333 -58.333,58.333Zm114.416,-151.748c0,11.598 -9.403,20.999 -21.001,20.999c-11.597,0 -20.999,-9.401 -20.999,-20.999c0,-11.598 9.402,-21 20.999,-21c11.598,0 21.001,9.402 21.001,21Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Coluna central (imagem) -->
      <div class="relative order-1 md:order-2 px-4 mt-16 md:mt-0 mb-16 md:mb-0 max-w-2xl mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-orange-500/30 to--500/30 dark:from-purple-600/20 dark:to-blue-600/20 rounded-full blur-2xl transform -rotate-6 scale-110"></div>
        <div class="relative w-full aspect-square rounded-full overflow-hidden">
          <img src="./assets/images/lucas_light.png" alt="Lucas Jandrey" class="w-full h-full object-cover dark:hidden"/>
          <img src="./assets/images/lucas_dark.png" alt="Lucas Jandrey" class="w-full h-full object-cover hidden dark:block"/>
        </div>
      </div>

      <!-- Botões -->
      <div class="flex flex-col items-center justify-center gap-4 mt-8 lg:mt-0 order-3 px-4">
        <div class="relative group">
          <button class="copy-btn group relative" onclick="copyEmail(this)">
            <span>${i18n.t('hero.email')}</span>
            <div class="check hidden group-hover:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-green-500 text-white text-xs px-2 py-1 rounded">
              ${i18n.t('hero.copied')}
            </div>
          </button>
        </div>
        
        <div class="flex">
          <a href="/contatos.html" class="flex items-center bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full gap-2 backdrop-blur-sm border border-gray-300 dark:border-white/10 transition-all duration-300 hover:scale-105">
            <svg height="18px" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1l-2.2 2.22z"/>
            </svg>
            <span>${i18n.t('hero.contacts')}</span>
          </a>
        </div>
      </div>
    `;
  }

  render();
  window.addEventListener('languageChanged', render);

  return section;
}

