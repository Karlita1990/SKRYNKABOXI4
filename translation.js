const translations = {
    uk: {
        // Заголовки та основні тексти
        "game_title": "Гра \"Скриньки\"",
        "languageLabel": "Мова:",
        "lobby_prompt": "Виберіть ім'я та кімнату для гри.",
        "placeholder_name": "Ваше ім'я",
        "placeholder_room_id": "ID кімнати",
        "join_button": "Приєднатися / Створити кімнату",
        "status_waiting_for_players": "Очікування на гравців...",
        
        // Ігрові повідомлення
        "your_turn_prompt": "Ваш хід, {playerName}! Виберіть гравця та карту для запиту.",
        "select_value": "Вибрати значення",
        "ask_button": "Запитати",
        "guess_count_prompt": "Вгадайте, скільки карт з цим рангом є у вашого суперника?",
        "submit_guess_button": "Відправити",
        "guess_suits_prompt": "Скільки мастей ви вгадаєте?",
        "guess_suits_button": "Вгадати масті",
        "response_prompt": "Гравець {askingPlayer} запитує карту {cardRank}. У вас вона є?",
        "yes_button": "Так",
        "no_button": "Ні",
        
        // Інтерфейс гри
        "start_game_button": "Розпочати гру",
        "your_cards": "Ваші карти:",
        "collected_boxes": "Зібрані скриньки:",
        "deck": "Колода:",
        "cards_unit": "карт",
        "players": "Гравці:",
        "game_log_title": "Журнал гри:",
        
        // Додаткові переклади
        "status_turn": "Ходить",
        "status_waiting": "Очікує",
        "status_game_started": "Гра розпочалась! Хід гравця: {playerName}",
        "status_waiting_for_players_count": "Очікування на гравців... (Всього {count}/{max})",
		"error_enter_name_and_room": "Будьте ласка, введіть ім'я та ID кімнати.",
		"error_select_player_and_card": "Будь ласка, виберіть гравця та значення карти.",
        "error_select_suits": "Будь ласка, виберіть масті.",
        "error_select_count": "Будь ласка, виберіть кількість.",
        "game_over_winner": "🏆 Гра завершена! Переможець: {winner}.",
        "boxes_unit": "скриньок",
        "game_over_message": "🏆 {message}",
        "game_results": "Результати гри",
        "reload_for_new_game": "Для нової гри перезавантажте бот та зареєструйтеся заново",
		//
		"default_player": "Гравець",
        "anonymous_player": "Анонімний гравець",
        "test_player": "Тестовий гравець",
        "connected_to_server": "Підключено до сервера. Надсилаємо ім'я гравця та ID кімнати...",
        "joined_room_success": "Приєднано до кімнати: {roomId}",
        "game_started": "Гра розпочалась!",
        "disconnected_from_server": "Відключено від сервера. Спроба перепідключення через 5 секунд...",
        "websocket_error": "Помилка WebSocket: {error}",
        "error_message": "Помилка: {message}"
    },
    en: {
        "game_title": "Boxes Game",
        "languageLabel": "Language:",
        "lobby_prompt": "Choose a name and room to play.",
        "placeholder_name": "Your name",
        "placeholder_room_id": "Room ID",
        "join_button": "Join / Create Room",
        "status_waiting_for_players": "Waiting for players...",
        
        "your_turn_prompt": "Your turn, {playerName}! Choose a player and card to ask for.",
        "select_value": "Select value",
        "ask_button": "Ask",
        "guess_count_prompt": "Guess how many cards of this rank your opponent has?",
        "submit_guess_button": "Submit",
        "guess_suits_prompt": "How many suits will you guess?",
        "guess_suits_button": "Guess Suits",
        "response_prompt": "Player {askingPlayer} is asking for card {cardRank}. Do you have it?",
        "yes_button": "Yes",
        "no_button": "No",
        
        "start_game_button": "Start Game",
        "your_cards": "Your cards:",
        "collected_boxes": "Collected boxes:",
        "deck": "Deck:",
        "cards_unit": "cards",
        "players": "Players:",
        "game_log_title": "Game Log:",
        
        // Додаткові переклади
        "status_turn": "Turn",
        "status_waiting": "Waiting",
        "status_game_started": "Game started! Turn of player: {playerName}",
        "status_waiting_for_players_count": "Waiting for players... (Total {count}/{max})",
		"error_enter_name_and_room": "Please enter your name and room ID.",
		"error_select_player_and_card": "Please select a player and card value.",
        "error_select_suits": "Please select suits.",
        "error_select_count": "Please select a count.",
        "game_over_winner": "🏆 Game over! Winner: {winner}.",
        "boxes_unit": "boxes",
        "game_over_message": "🏆 {message}",
        "game_results": "Game results",
        "reload_for_new_game": "For a new game, reload the bot and register again",
		//
		"default_player": "Player",
        "anonymous_player": "Anonymous player",
        "test_player": "Test player",
        "connected_to_server": "Connected to server. Sending player name and room ID...",
        "joined_room_success": "Joined room: {roomId}",
        "game_started": "Game started!",
        "disconnected_from_server": "Disconnected from server. Attempting to reconnect in 5 seconds...",
        "websocket_error": "WebSocket error: {error}",
        "error_message": "Error: {message}"
    },
    ru: {
        "game_title": "Игра \"Сундучки\"",
        "languageLabel": "Язык:",
        "lobby_prompt": "Выберите имя и комнату для игры.",
        "placeholder_name": "Ваше имя",
        "placeholder_room_id": "ID комнаты",
        "join_button": "Присоединиться / Создать комнату",
        "status_waiting_for_players": "Ожидание игроков...",
        
        "your_turn_prompt": "Ваш ход, {playerName}! Выберите игрока и карту для запроса.",
        "select_value": "Выбрать значение",
        "ask_button": "Спросить",
        "guess_count_prompt": "Угадайте, сколько карт этого ранга у вашего соперника?",
        "submit_guess_button": "Отправить",
        "guess_suits_prompt": "Сколько мастей вы угадаете?",
        "guess_suits_button": "Угадать масти",
        "response_prompt": "Игрок {askingPlayer} спрашивает карту {cardRank}. У вас она есть?",
        "yes_button": "Да",
        "no_button": "Нет",
        
        "start_game_button": "Начать игру",
        "your_cards": "Ваши карты:",
        "collected_boxes": "Собранные сундучки:",
        "deck": "Колода:",
        "cards_unit": "карт",
        "players": "Игроки:",
        "game_log_title": "Журнал игры:",
        
        // Додаткові переклади
        "status_turn": "Ходит",
        "status_waiting": "Ожидает",
        "status_game_started": "Игра началась! Ход игрока: {playerName}",
        "status_waiting_for_players_count": "Ожидание игроков... (Всего {count}/{max})",
		"error_enter_name_and_room": "Пожалуйста, введите имя и ID комнаты.",
		"error_select_player_and_card": "Пожалуйста, выберите игрока и значение карты.",
        "error_select_suits": "Пожалуйста, выберите масти.",
        "error_select_count": "Пожалуйста, выберите количество.",
        "game_over_winner": "🏆 Игра завершена! Победитель: {winner}.",
        "boxes_unit": "сундучков",
        "game_over_message": "🏆 {message}",
        "game_results": "Результаты игры",
        "reload_for_new_game": "Для новой игры перезагрузите бот и зарегистрируйтесь заново",
		//
		"default_player": "Игрок",
        "anonymous_player": "Анонимный игрок",
        "test_player": "Тестовый игрок",
        "connected_to_server": "Подключено к серверу. Отправляем имя игрока и ID комнаты...",
        "joined_room_success": "Присоединено к комнате: {roomId}",
        "game_started": "Игра началась!",
        "disconnected_from_server": "Отключено от сервера. Попытка переподключения через 5 секунд...",
        "websocket_error": "Ошибка WebSocket: {error}",
        "error_message": "Ошибка: {message}"
    },
    de: {
        "game_title": "Spiel \"Kästchen\"",
        "languageLabel": "Sprache:",
        "lobby_prompt": "Wählen Sie einen Namen und einen Raum zum Spielen.",
        "placeholder_name": "Ihr Name",
        "placeholder_room_id": "Raum-ID",
        "join_button": "Beitreten / Raum erstellen",
        "status_waiting_for_players": "Warten auf Spieler...",
        
        "your_turn_prompt": "Sie sind dran, {playerName}! Wählen Sie einen Spieler und eine Karte zum Fragen.",
        "select_value": "Wert auswählen",
        "ask_button": "Fragen",
        "guess_count_prompt": "Raten Sie, wie viele Karten dieses Rangs Ihr Gegner hat?",
        "submit_guess_button": "Senden",
        "guess_suits_prompt": "Wie viele Farben werden Sie erraten?",
        "guess_suits_button": "Farben erraten",
        "response_prompt": "Spieler {askingPlayer} fragt nach Karte {cardRank}. Haben Sie sie?",
        "yes_button": "Ja",
        "no_button": "Nein",
        
        "start_game_button": "Spiel starten",
        "your_cards": "Ihre Karten:",
        "collected_boxes": "Gesammelte Kästchen:",
        "deck": "Stapel:",
        "cards_unit": "Karten",
        "players": "Spieler:",
        "game_log_title": "Spielprotokoll:",
        
        // Додаткові переклади
        "status_turn": "Am Zug",
        "status_waiting": "Wartet",
        "status_game_started": "Spiel gestartet! Zug von Spieler: {playerName}",
        "status_waiting_for_players_count": "Warten auf Spieler... (Insgesamt {count}/{max})",
		"error_enter_name_and_room": "Bitte geben Sie Ihren Namen und die Raum-ID ein.",
		"error_select_player_and_card": "Bitte wählen Sie einen Spieler und einen Kartenwert.",
        "error_select_suits": "Bitte wählen Sie Farben aus.",
        "error_select_count": "Bitte wählen Sie eine Anzahl aus.",
        "game_over_winner": "🏆 Spiel vorbei! Gewinner: {winner}.",
        "boxes_unit": "Kästchen",
        "game_over_message": "🏆 {message}",
        "game_results": "Spielergebnisse",
        "reload_for_new_game": "Für ein neues Spiel laden Sie den Bot neu und registrieren sich erneut",
		//
		"default_player": "Spieler",
        "anonymous_player": "Anonymer Spieler",
        "test_player": "Testspieler",
        "connected_to_server": "Mit Server verbunden. Sende Spielernamen und Raum-ID...",
        "joined_room_success": "Raum beigetreten: {roomId}",
        "game_started": "Spiel gestartet!",
        "disconnected_from_server": "Vom Server getrennt. Versuche in 5 Sekunden erneut zu verbinden...",
        "websocket_error": "WebSocket-Fehler: {error}",
        "error_message": "Fehler: {message}"
    },
    es: {
        "game_title": "Juego \"Cajas\"",
        "languageLabel": "Idioma:",
        "lobby_prompt": "Elija un nombre y una sala para jugar.",
        "placeholder_name": "Su nombre",
        "placeholder_room_id": "ID de sala",
        "join_button": "Unirse / Crear sala",
        "status_waiting_for_players": "Esperando jugadores...",
        
        "your_turn_prompt": "¡Su turno, {playerName}! Elija un jugador y una carta para preguntar.",
        "select_value": "Seleccionar valor",
        "ask_button": "Preguntar",
        "guess_count_prompt": "¿Adivina cuántas cartas de este rango tiene su oponente?",
        "submit_guess_button": "Enviar",
        "guess_suits_prompt": "¿Cuántos palos adivinará?",
        "guess_suits_button": "Adivinar palos",
        "response_prompt": "El jugador {askingPlayer} pregunta por la carta {cardRank}. ¿La tienes?",
        "yes_button": "Sí",
        "no_button": "No",
        
        "start_game_button": "Comenzar juego",
        "your_cards": "Sus cartas:",
        "collected_boxes": "Cajas recolectadas:",
        "deck": "Mazo:",
        "cards_unit": "cartas",
        "players": "Jugadores:",
        "game_log_title": "Registro del juego:",
        
        // Додаткові переклади
        "status_turn": "Turno",
        "status_waiting": "Esperando",
        "status_game_started": "¡Juego comenzado! Turno del jugador: {playerName}",
        "status_waiting_for_players_count": "Esperando jugadores... (Total {count}/{max})",
		//
		"error_enter_name_and_room": "Por favor, ingrese su nombre y ID de sala.",
		"error_select_player_and_card": "Por favor, seleccione un jugador y un valor de carta.",
        "error_select_suits": "Por favor, seleccione palos.",
        "error_select_count": "Por favor, seleccione una cantidad.",
        "game_over_winner": "🏆 ¡Juego terminado! Ganador: {winner}.",
        "boxes_unit": "cajas",
        "game_over_message": "🏆 {message}",
        "game_results": "Resultados del juego",
        "reload_for_new_game": "Para un nuevo juego, recargue el bot y regístrese nuevamente",
		//
		"default_player": "Jugador",
        "anonymous_player": "Jugador anónimo",
        "test_player": "Jugador de prueba",
        "connected_to_server": "Conectado al servidor. Enviando nombre del jugador e ID de la sala...",
        "joined_room_success": "Unido a la sala: {roomId}",
        "game_started": "¡Juego comenzado!",
        "disconnected_from_server": "Desconectado del servidor. Intentando reconectar en 5 segundos...",
        "websocket_error": "Error de WebSocket: {error}",
        "error_message": "Error: {message}"
    }
};

// Функція для локалізації тексту
function translateText(key, params = {}) {
    const lang = document.getElementById('langSelect').value;
    let text = translations[lang]?.[key] || translations['uk'][key] || key;
    
    // Заміна плейсхолдерів
    for (const [paramKey, paramValue] of Object.entries(params)) {
        text = text.replace(`{${paramKey}}`, paramValue);
    }
    
    return text;
}

// Функція для оновлення всього інтерфейсу
function updateAllText() {
	
	try {
	
    // Оновлення всіх елементів з атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translateText(key);
    });
    
    // Оновлення placeholder'ів
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = translateText(key);
    });
    
    // Оновлення динамічних текстів з параметрами
    const currentPlayerName = document.getElementById('current-player-name');
    if (currentPlayerName.textContent) {
        const askingPlayerName = document.getElementById('asking-player-name');
        const askedCardRank = document.getElementById('asked-card-rank');
        
        if (askingPlayerName.textContent && askedCardRank.textContent) {
            document.querySelectorAll('[data-i18n="response_prompt"]').forEach(element => {
                element.textContent = translateText('response_prompt', {
                    askingPlayer: askingPlayerName.textContent,
                    cardRank: askedCardRank.textContent
                });
            });
        }
        
        document.querySelectorAll('[data-i18n="your_turn_prompt"]').forEach(element => {
            element.textContent = translateText('your_turn_prompt', {
                playerName: currentPlayerName.textContent
            });
        });
    }
	
	} catch (error) {
        console.warn('Error updating text:', error);
        // Ігноруємо помилку, щоб не порушувати роботу додатка
    }
	
	
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    // Додаємо обробник події для зміни мови
    document.getElementById('langSelect').addEventListener('change', updateAllText);
    
    // Первинна ініціалізація тексту
    updateAllText();
});
