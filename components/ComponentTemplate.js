/**
 * Template para criar novos componentes
 * 
 * Para usar:
 * 1. Copie este arquivo
 * 2. Renomeie para o nome do seu componente (ex: Hero.js)
 * 3. Substitua 'ComponentTemplate' pelo nome do componente
 * 4. Implemente a lógica de renderização
 * 5. Adicione traduções em data/translations.js se necessário
 */

import { i18n } from '../utils/i18n.js';

export function ComponentTemplate() {
  // Criar elemento principal
  const container = document.createElement('section');
  container.id = 'component-id';
  container.className = 'py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-200';

  // Função de renderização
  function render() {
    container.innerHTML = `
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">
          ${i18n.t('component.title')}
        </h2>
        
        <div class="grid gap-8">
          <!-- Conteúdo do componente -->
          <p>${i18n.t('component.description')}</p>
        </div>
      </div>
    `;

    // Registrar event listeners após renderização
    setupEventListeners();
  }

  // Event listeners específicos do componente
  function setupEventListeners() {
    // Exemplo: botão de ação
    const button = container.querySelector('.action-button');
    if (button) {
      button.addEventListener('click', handleAction);
    }
  }

  // Handlers de eventos
  function handleAction(event) {
    event.preventDefault();
    // Lógica do evento
    console.log('Action triggered');
  }

  // Renderização inicial
  render();

  // Atualizar quando o idioma mudar
  window.addEventListener('languageChanged', render);

  // Retornar elemento
  return container;
}

/**
 * Exemplo de uso no app.js:
 * 
 * import { ComponentTemplate } from './components/ComponentTemplate.js';
 * 
 * function initApp() {
 *   const app = document.getElementById('app');
 *   app.appendChild(ComponentTemplate());
 * }
 */

