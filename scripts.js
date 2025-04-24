AOS.init();

// Dark mode toggle function
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  // Optional: Save preference to localStorage
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
}

// Check for saved dark mode preference
if (
  localStorage.getItem('darkMode') === 'true' ||
  (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Show/hide scroll to top button
window.addEventListener('scroll', function () {
  const scrollToTopButton = document.querySelector("button[onclick='scrollToTop()']");
  if (window.scrollY > 300) {
    scrollToTopButton.classList.remove('opacity-0');
    scrollToTopButton.classList.add('opacity-100');
  } else {
    scrollToTopButton.classList.remove('opacity-100');
    scrollToTopButton.classList.add('opacity-0');
  }
});

const phrases = [
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
  const textElement = document.getElementById('typing-text');
  const currentPhrase = phrases[currentPhraseIndex];

  let delay;

  if (isDeleting) {
    currentCharIndex--;
    textElement.textContent = currentPhrase.substring(0, currentCharIndex);
    delay = deletingSpeed;

    if (currentCharIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }
  } else {
    currentCharIndex++;
    textElement.textContent = currentPhrase.substring(0, currentCharIndex);
    delay = typingSpeed;

    if (currentCharIndex === currentPhrase.length) {
      isDeleting = true;
      delay = pauseEnd;
    }
  }

  setTimeout(typeText, delay);
}

window.addEventListener('load', typeText);

function copyEmail(button) {
  const email = 'lucasjandrey5@gmail.com'; // <- troca aqui pro teu
  navigator.clipboard.writeText(email).then(() => {
    button.classList.add('copied');

    setTimeout(() => {
      button.classList.remove('copied');
    }, 2000);
  });
}
