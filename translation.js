// translations.js - файл, що містить об'єкти з перекладами
const translations = {
  "uk": {
    "languageLabel": "Мова:",
    "game_title": "Гра \"Скриньки\"",
    "lobby_prompt": "Виберіть ім'я та кімнату для гри.",
    "placeholder_name": "Ваше ім'я",
    "placeholder_room_id": "ID кімнати",
    "join_button": "Приєднатися / Створити кімнату",
    "status_waiting_for_players": "Очікування на гравців...",
    "your_turn_prompt": "Ваш хід, <span id=\"current-player-name\"></span>! Виберіть гравця та карту для запиту.",
    "select_value": "Вибрати значення",
    "ask_button": "Запитати",
    "guess_count_prompt": "Вгадайте, скільки карт з цим рангом є у вашого суперника?",
    "submit_guess_button": "Відправити",
    "guess_suits_prompt": "Скільки мастей ви вгадаєте?",
    "guess_suits_button": "Вгадати масті",
    "response_prompt": "Гравець <span id=\"asking-player-name\"></span> запитує карту <span id=\"asked-card-rank\"></span>. У вас вона є?",
    "yes_button": "Так",
    "no_button": "Ні",
    "start_game_button": "Розпочати гру",
    "your_cards": "Ваші карти:",
    "collected_boxes": "Зібрані скриньки:",
    "deck": "Колода:",
    "cards_unit": "карт",
    "players": "Гравці:",
    "game_log_title": "Журнал гри:"
  },
  "en": {
    "languageLabel": "Language:",
    "game_title": "Game \"Boxes\"",
    "lobby_prompt": "Choose a name and a room to play.",
    "placeholder_name": "Your name",
    "placeholder_room_id": "Room ID",
    "join_button": "Join / Create Room",
    "status_waiting_for_players": "Waiting for players...",
    "your_turn_prompt": "Your turn, <span id=\"current-player-name\"></span>! Choose a player and a card to ask for.",
    "select_value": "Select value",
    "ask_button": "Ask",
    "guess_count_prompt": "Guess how many cards of this rank your opponent has?",
    "submit_guess_button": "Submit",
    "guess_suits_prompt": "How many suits will you guess?",
    "guess_suits_button": "Guess suits",
    "response_prompt": "Player <span id=\"asking-player-name\"></span> is asking for card <span id=\"asked-card-rank\"></span>. Do you have it?",
    "yes_button": "Yes",
    "no_button": "No",
    "start_game_button": "Start Game",
    "your_cards": "Your cards:",
    "collected_boxes": "Collected boxes:",
    "deck": "Deck:",
    "cards_unit": "cards",
    "players": "Players:",
    "game_log_title": "Game Log:"
  },
  "ru": {
    "languageLabel": "Язык:",
    "game_title": "Игра \"Сундучки\"",
    "lobby_prompt": "Выберите имя и комнату для игры.",
    "placeholder_name": "Ваше имя",
    "placeholder_room_id": "ID комнаты",
    "join_button": "Присоединиться / Создать комнату",
    "status_waiting_for_players": "Ожидание игроков...",
    "your_turn_prompt": "Ваш ход, <span id=\"current-player-name\"></span>! Выберите игрока и карту для запроса.",
    "select_value": "Выбрать значение",
    "ask_button": "Запросить",
    "guess_count_prompt": "Угадайте, сколько карт этого ранга у вашего противника?",
    "submit_guess_button": "Отправить",
    "guess_suits_prompt": "Сколько мастей вы угадаете?",
    "guess_suits_button": "Угадать масти",
    "response_prompt": "Игрок <span id=\"asking-player-name\"></span> запрашивает карту <span id=\"asked-card-rank\"></span>. У вас она есть?",
    "yes_button": "Да",
    "no_button": "Нет",
    "start_game_button": "Начать игру",
    "your_cards": "Ваши карты:",
    "collected_boxes": "Собранные сундучки:",
    "deck": "Колода:",
    "cards_unit": "карт",
    "players": "Игроки:",
    "game_log_title": "Журнал игры:"
  },
  "de": {
    "languageLabel": "Sprache:",
    "game_title": "Spiel \"Kisten\"",
    "lobby_prompt": "Wähle einen Namen und einen Raum zum Spielen.",
    "placeholder_name": "Ihr Name",
    "placeholder_room_id": "Raum-ID",
    "join_button": "Beitreten / Raum erstellen",
    "status_waiting_for_players": "Warten auf Spieler...",
    "your_turn_prompt": "Du bist dran, <span id=\"current-player-name\"></span>! Wähle einen Spieler und eine Karte, nach der du fragen möchtest.",
    "select_value": "Wert auswählen",
    "ask_button": "Fragen",
    "guess_count_prompt": "Rate, wie viele Karten dieses Ranges dein Gegner hat?",
    "submit_guess_button": "Senden",
    "guess_suits_prompt": "Wie viele Farben wirst du erraten?",
    "guess_suits_button": "Farben erraten",
    "response_prompt": "Spieler <span id=\"asking-player-name\"></span> fragt nach Karte <span id=\"asked-card-rank\"></span>. Hast du sie?",
    "yes_button": "Ja",
    "no_button": "Nein",
    "start_game_button": "Spiel starten",
    "your_cards": "Ihre Karten:",
    "collected_boxes": "Gesammelte Kisten:",
    "deck": "Stapel:",
    "cards_unit": "Karten",
    "players": "Spieler:",
    "game_log_title": "Spielprotokoll:"
  },
  "es": {
    "languageLabel": "Idioma:",
    "game_title": "Juego \"Cajas\"",
    "lobby_prompt": "Elige un nombre y una sala para jugar.",
    "placeholder_name": "Tu nombre",
    "placeholder_room_id": "ID de la sala",
    "join_button": "Unirse / Crear sala",
    "status_waiting_for_players": "Esperando jugadores...",
    "your_turn_prompt": "¡Es tu turno, <span id=\"current-player-name\"></span>! Elige un jugador y una carta para preguntar.",
    "select_value": "Seleccionar valor",
    "ask_button": "Preguntar",
    "guess_count_prompt": "¿Adivina cuántas cartas de este rango tiene tu oponente?",
    "submit_guess_button": "Enviar",
    "guess_suits_prompt": "¿Cuántos palos adivinarás?",
    "guess_suits_button": "Adivinar palos",
    "response_prompt": "El jugador <span id=\"asking-player-name\"></span> está pidiendo la carta <span id=\"asked-card-rank\"></span>. ¿La tienes?",
    "yes_button": "Sí",
    "no_button": "No",
    "start_game_button": "Iniciar juego",
    "your_cards": "Tus cartas:",
    "collected_boxes": "Cajas recolectadas:",
    "deck": "Baraja:",
    "cards_unit": "cartas",
    "players": "Jugadores:",
    "game_log_title": "Registro del juego:"
  }
};

// Функція для локалізації
function setLanguage(lang) {
    const langData = translations[lang] || translations.en;
    
    // Оновлення текстових елементів
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) {
            el.textContent = langData[key];
        }
    });

    // Оновлення плейсхолдерів
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (langData[key]) {
            el.placeholder = langData[key];
        }
    });
}

// Функція для автоматичного визначення мови
function autoDetectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.split('-')[0];
    const supportedLangs = Object.keys(translations);
    
    if (supportedLangs.includes(langCode)) {
        document.getElementById('langSelect').value = langCode;
        setLanguage(langCode);
    } else {
        // За замовчуванням встановлюємо українську або англійську
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
    // Автоматичне визначення мови при завантаженні сторінки
    autoDetectLanguage();
});
