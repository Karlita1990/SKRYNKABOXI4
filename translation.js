// Цей скрипт відповідає за динамічне завантаження перекладів з JSON-файлу

window.translations = {};
window.currentLang = 'uk'; // Мова за замовчуванням

// Функція для завантаження перекладів
async function loadTranslations() {
    try {
        const response = await fetch('translations.json');
        if (!response.ok) {
            throw new Error('Failed to load translations.json');
        }
        const data = await response.json();
        window.translations = data;
        
        // Після завантаження перекладів, автоматично встановлюємо мову
        autoDetectLanguage();

    } catch (error) {
        console.error("Error loading translations:", error);
    }
}

// Функція для локалізації елементів на сторінці
function setLanguage(lang) {
    window.currentLang = lang;
    const langData = window.translations[lang] || window.translations.en;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) {
            el.textContent = langData[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (langData[key]) {
            el.placeholder = langData[key];
        }
    });
}

// Функція для отримання перекладу з параметрами
function getTranslation(key, params = {}) {
    const langData = window.translations[window.currentLang] || window.translations.en;
    let text = langData[key] || '';
    
    for (const param in params) {
        if (params.hasOwnProperty(param)) {
            const regex = new RegExp(`{${param}}`, 'g');
            text = text.replace(regex, params[param]);
        }
    }
    return text;
}

// Функція для автоматичного визначення мови
function autoDetectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.split('-')[0];
    const supportedLangs = Object.keys(window.translations);
    
    if (supportedLangs.includes(langCode)) {
        document.getElementById('langSelect').value = langCode;
        setLanguage(langCode);
    } else {
        const defaultLang = 'uk';
        document.getElementById('langSelect').value = defaultLang;
        setLanguage(defaultLang);
    }
}

// Обробник подій для зміни мови вручну
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('langSelect').addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });
    // Завантажуємо переклади, коли сторінка готова
    loadTranslations();
});
