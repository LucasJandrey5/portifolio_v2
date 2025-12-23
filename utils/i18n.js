import { translations } from '../data/translations.js';

class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'pt';
    this.translations = translations;
  }

  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    
    for (const k of keys) {
      value = value?.[k];
      if (!value) return key;
    }
    
    return value;
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
  }

  getLanguage() {
    return this.currentLang;
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'pt' ? 'en' : 'pt';
    this.setLanguage(this.currentLang);
    return this.currentLang;
  }
}

export const i18n = new I18n();



