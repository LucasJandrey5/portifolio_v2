// Import components
import { LanguageToggle } from './components/LanguageToggle.js';
import { DarkModeToggle } from './components/DarkModeToggle.js';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Technologies } from './components/Technologies.js';
import { Roadmap } from './components/Roadmap.js';
import { Projects } from './components/Projects.js';
import { Experiences } from './components/Experiences.js';
import { Contact } from './components/Contact.js';
import { ScrollToTop } from './components/ScrollToTop.js';
import { Footer } from './components/Footer.js';

// Initialize dark mode
function initDarkMode() {
  if (
    localStorage.getItem('darkMode') === 'true' ||
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  }
}

// Initialize animations
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }
}

// Initialize typing animation
function initTypingAnimation() {
  const textElement = document.getElementById('typing-text');
  if (!textElement) {
    // Retry after a short delay if element not found
    setTimeout(initTypingAnimation, 200);
    return;
  }

  let phrases = [
    'Sou desenvolvedor fullstack.',
    'Futuro engenheiro de software.',
    'Amo arquitetura de software.',
    'Apaixonado por tecnologia.',
    '1% melhor a cada dia.',
  ];

  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  const typingSpeed = 50;
  const deletingSpeed = 25;
  const pauseEnd = 2000;

  function typeText() {
    const element = document.getElementById('typing-text');
    if (!element) return;
    
    const currentPhrase = phrases[currentPhraseIndex];
    let delay;

    if (isDeleting) {
      currentCharIndex--;
      element.textContent = currentPhrase.substring(0, currentCharIndex);
      delay = deletingSpeed;

      if (currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }
    } else {
      currentCharIndex++;
      element.textContent = currentPhrase.substring(0, currentCharIndex);
      delay = typingSpeed;

      if (currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        delay = pauseEnd;
      }
    }

    setTimeout(typeText, delay);
  }

  // Update phrases on language change
  window.addEventListener('languageChanged', () => {
    import('./utils/i18n.js').then(({ i18n }) => {
      const newPhrases = i18n.t('hero.typingPhrases');
      phrases = [...newPhrases];
      currentPhraseIndex = 0;
      currentCharIndex = 0;
      isDeleting = false;
    });
  });

  typeText();
}


// Copy email function
window.copyEmail = function(button) {
  const email = 'lucasjandrey5@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    button.classList.add('copied');
    setTimeout(() => {
      button.classList.remove('copied');
    }, 2000);
  });
};

window.copyCardEmail = function(button) {
  const email = 'lucasjandrey5@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    const span = button.querySelector('.copiedEmail');
    span.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
    span.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      span.classList.remove('opacity-100', 'translate-y-0');
      span.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
    }, 2000);
  });
};

window.scrollToTop = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// Initialize app
function initApp() {
  initDarkMode();
  initAOS();
  
  const body = document.body;
  
  // Mount toggle buttons
  body.insertBefore(DarkModeToggle(), body.firstChild);
  body.insertBefore(LanguageToggle(), body.firstChild);
  
  // Mount or replace components
  replaceOrInsert('header', Header());
  replaceOrInsert('home', Hero());
  replaceOrInsert('about', About());
  replaceOrInsert('tecnologias', Technologies());
  replaceOrInsert('roadmap', Roadmap());
  replaceOrInsert('projects', Projects());
  replaceOrInsert('experiences', Experiences());
  replaceOrInsert('contact', Contact());
  replaceOrInsert('footer', Footer(), true);
  
  // Add scroll to top button
  body.appendChild(ScrollToTop());

  // Initialize animations and interactions
  setTimeout(() => {
    initTypingAnimation();
  }, 100);
}

// Helper to replace existing elements or insert new ones
function replaceOrInsert(id, component, isTag = false) {
  const selector = isTag ? id : `#${id}`;
  const existing = document.querySelector(selector);
  
  if (existing) {
    existing.replaceWith(component);
  } else if (!isTag) {
    // If element doesn't exist and it's an ID, append to body
    document.body.appendChild(component);
  }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

