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
        "error_message": "Помилка: {message}",
		//
		//
		// server localisation:
		"player_joined": "Гравець {player} приєднався до гри.",
        "player_left": "Гравець {player} відключився.",
        "game_started": "Гра розпочалась! Перший хід за {player}",
        "ask_card": "Гравець {asking_player} запитує у {target_player}, чи має той карти значення {card_rank}?",
        "response_yes": "Гравець {player} відповідає 'Так'.",
        "response_no": "Гравець {player} відповідає 'Ні'. {asking_player} іде на рибалку.",
        "guess_count_prompt": "Гравець {player} має вгадати кількість карт {card_rank}.",
        "guess_count_attempt": "Гравець {player} гадає, що у гравця {target_player} {count} карт рангу {card_rank}.",
        "guess_count_success": "Гравець {player} вгадав кількість карт рангу {card_rank}: {count}. Він продовжує вгадувати масті.",
        "guess_count_fail": "Гравець {player} не вгадав кількість. Він бере карту з колоди.",
        "guess_suits_success": "Гравець {player} вгадав масті {suits} і отримує карти від гравця {target_player}.",
        "guess_suits_fail": "Гравець {player} назвав масті {suits}, але не вгадав і бере карту з колоди.",
        "draw_card": "Гравець {player} бере карту з колоди.",
        "empty_hand_draw": "У гравця {player} порожня рука. Автоматично взято карту з колоди.",
        "empty_hand_after_set": "У гравця {player} порожня рука після збору скриньки. Автоматично бере ще одну карту.",
        "set_collected": "Гравець {player} зібрав скриньку {rank}!",
        "set_collected_initial": "Гравець {player} зібрав скриньку під час роздачі!",
        "next_turn": "Хід переходить до гравця {player}.",
        "continue_turn": "Гравець {player} продовжує свій хід.",
        "room_full": "Кімната заповнена.",
        "player_exists": "Гравець з таким ім'ям вже є в кімнаті.",
        "game_already_started": "Гра вже розпочалась.",
        "not_enough_players": "Недостатньо гравців.",
        "game_over_win": "Гра закінчена! Переможець: {winner}.",
        "game_over_tie": "Гра закінчена! Серед переможців - нічия! Найбільше скриньок набрали: {winners}.",
        "game_over_full_tie": "Гра закінчена! Повна нічия! Всі гравці набрали по {score} скриньок."
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
        "error_message": "Error: {message}",
		//
		//
		//
		"player_joined": "Player {player} joined the game.",
        "player_left": "Player {player} disconnected.",
        "game_started": "Game started! First turn goes to {player}",
        "ask_card": "Player {asking_player} asks {target_player} if they have cards of rank {card_rank}?",
        "response_yes": "Player {player} answers 'Yes'.",
        "response_no": "Player {player} answers 'No'. {asking_player} goes fishing.",
        "guess_count_prompt": "Player {player} must guess the number of {card_rank} cards.",
        "guess_count_attempt": "Player {player} guesses that {target_player} has {count} cards of rank {card_rank}.",
        "guess_count_success": "Player {player} guessed the number of {card_rank} cards correctly: {count}. They continue to guess suits.",
        "guess_count_fail": "Player {player} failed to guess the number. They draw a card from the deck.",
        "guess_suits_success": "Player {player} guessed the suits {suits} correctly and receives cards from {target_player}.",
        "guess_suits_fail": "Player {player} named suits {suits} but guessed incorrectly and draws a card from the deck.",
        "draw_card": "Player {player} draws a card from the deck.",
        "empty_hand_draw": "Player {player} has an empty hand. Automatically drew a card from the deck.",
        "empty_hand_after_set": "Player {player} has an empty hand after collecting a set. Automatically draws another card.",
        "set_collected": "Player {player} collected a {rank} set!",
        "set_collected_initial": "Player {player} collected a set during the deal!",
        "next_turn": "Turn passes to player {player}.",
        "continue_turn": "Player {player} continues their turn.",
        "room_full": "Room is full.",
        "player_exists": "A player with this name already exists in the room.",
        "game_already_started": "Game has already started.",
        "not_enough_players": "Not enough players.",
        "game_over_win": "Game over! Winner: {winner}.",
        "game_over_tie": "Game over! Tie among winners! Most boxes collected by: {winners}.",
        "game_over_full_tie": "Game over! Complete tie! All players collected {score} boxes each."
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
        "error_message": "Ошибка: {message}",
		//
		//
		//
		"player_joined": "Игрок {player} присоединился к игре.",
        "player_left": "Игрок {player} отключился.",
        "game_started": "Игра началась! Первый ход за {player}",
        "ask_card": "Игрок {asking_player} спрашивает {target_player}, есть ли у того карты значения {card_rank}?",
        "response_yes": "Игрок {player} отвечает 'Да'.",
        "response_no": "Игрок {player} отвечает 'Нет'. {asking_player} идет на рыбалку.",
        "guess_count_prompt": "Игрок {player} должен угадать количество карт {card_rank}.",
        "guess_count_attempt": "Игрок {player} предполагает, что у игрока {target_player} {count} карт ранга {card_rank}.",
        "guess_count_success": "Игрок {player} угадал количество карт ранга {card_rank}: {count}. Он продолжает угадывать масти.",
        "guess_count_fail": "Игрок {player} не угадал количество. Он берет карту из колоды.",
        "guess_suits_success": "Игрок {player} угадал масти {suits} и получает карты от игрока {target_player}.",
        "guess_suits_fail": "Игрок {player} назвал масти {suits}, но не угадал и берет карту из колоды.",
        "draw_card": "Игрок {player} берет карту из колоды.",
        "empty_hand_draw": "У игрока {player} пустая рука. Автоматически взята карта из колоды.",
        "empty_hand_after_set": "У игрока {player} пустая рука после сбора сундучка. Автоматически берет еще одну карту.",
        "set_collected": "Игрок {player} собрал сундучок {rank}!",
        "set_collected_initial": "Игрок {player} собрал сундучок во время раздачи!",
        "next_turn": "Ход переходит к игроку {player}.",
        "continue_turn": "Игрок {player} продолжает свой ход.",
        "room_full": "Комната заполнена.",
        "player_exists": "Игрок с таким именем уже есть в комнате.",
        "game_already_started": "Игра уже началась.",
        "not_enough_players": "Недостаточно игроков.",
        "game_over_win": "Игра окончена! Победитель: {winner}.",
        "game_over_tie": "Игра окончена! Ничья среди победителей! Больше всего сундучков собрали: {winners}.",
        "game_over_full_tie": "Игра окончена! Полная ничья! Все игроки собрали по {score} сундучков."
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
        "error_message": "Fehler: {message}",
		//
		//
		//
		"player_joined": "Spieler {player} ist dem Spiel beigetreten.",
        "player_left": "Spieler {player} hat die Verbindung getrennt.",
        "game_started": "Spiel gestartet! Erster Zug geht an {player}",
        "ask_card": "Spieler {asking_player} fragt {target_player}, ob sie Karten des Rangs {card_rank} haben?",
        "response_yes": "Spieler {player} antwortet 'Ja'.",
        "response_no": "Spieler {player} antwortet 'Nein'. {asking_player} geht angeln.",
        "guess_count_prompt": "Spieler {player} muss die Anzahl der {card_rank} Karten erraten.",
        "guess_count_attempt": "Spieler {player} schätzt, dass {target_player} {count} Karten des Rangs {card_rank} hat.",
        "guess_count_success": "Spieler {player} hat die Anzahl der {card_rank} Karten richtig erraten: {count}. Sie raten weiter die Farben.",
        "guess_count_fail": "Spieler {player} hat die Anzahl nicht erraten. Sie ziehen eine Karte vom Stapel.",
        "guess_suits_success": "Spieler {player} hat die Farben {suits} richtig erraten und erhält Karten von {target_player}.",
        "guess_suits_fail": "Spieler {player} nannte Farben {suits}, aber hat falsch geraten und zieht eine Karte vom Stapel.",
        "draw_card": "Spieler {player} zieht eine Karte vom Stapel.",
        "empty_hand_draw": "Spieler {player} hat eine leere Hand. Automatisch eine Karte vom Stapel gezogen.",
        "empty_hand_after_set": "Spieler {player} hat eine leere Hand nach dem Sammeln eines Sets. Zieht automatisch eine weitere Karte.",
        "set_collected": "Spieler {player} hat ein {rank} Set gesammelt!",
        "set_collected_initial": "Spieler {player} hat während des Gebens ein Set gesammelt!",
        "next_turn": "Zug geht an Spieler {player}.",
        "continue_turn": "Spieler {player} setzt seinen Zug fort.",
        "room_full": "Raum ist voll.",
        "player_exists": "Ein Spieler mit diesem Namen existiert bereits im Raum.",
        "game_already_started": "Spiel hat bereits begonnen.",
        "not_enough_players": "Nicht genug Spieler.",
        "game_over_win": "Spiel vorbei! Gewinner: {winner}.",
        "game_over_tie": "Spiel vorbei! Unentschieden unter den Gewinnern! Die meisten Kästchen gesammelt von: {winners}.",
        "game_over_full_tie": "Spiel vorbei! Vollständiges Unentschieden! Alle Spieler haben jeweils {score} Kästchen gesammelt."
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
        "error_message": "Error: {message}",
		//
		//
		//
		"player_joined": "Jugador {player} se unió al juego.",
        "player_left": "Jugador {player} se desconectó.",
        "game_started": "¡Juego comenzado! Primer turno para {player}",
        "ask_card": "¿El jugador {asking_player} pregunta a {target_player} si tiene cartas de rango {card_rank}?",
        "response_yes": "El jugador {player} responde 'Sí'.",
        "response_no": "El jugador {player} responde 'No'. {asking_player} va a pescar.",
        "guess_count_prompt": "El jugador {player} debe adivinar el número de cartas {card_rank}.",
        "guess_count_attempt": "El jugador {player} supone que {target_player} tiene {count} cartas de rango {card_rank}.",
        "guess_count_success": "El jugador {player} adivinó correctamente el número de cartas {card_rank}: {count}. Continúa adivinando palos.",
        "guess_count_fail": "El jugador {player} no adivinó el número. Toma una carta del mazo.",
        "guess_suits_success": "El jugador {player} adivinó los palos {suits} correctamente y recibe cartas de {target_player}.",
        "guess_suits_fail": "El jugador {player} nombró palos {suits} pero adivinó incorrectamente y toma una carta del mazo.",
        "draw_card": "El jugador {player} toma una carta del mazo.",
        "empty_hand_draw": "El jugador {player} tiene la mano vacía. Automáticamente tomó una carta del mazo.",
        "empty_hand_after_set": "El jugador {player} tiene la mano vacía después de recolectar un set. Automáticamente toma otra carta.",
        "set_collected": "¡El jugador {player} recolectó un set de {rank}!",
        "set_collected_initial": "¡El jugador {player} recolectó un set durante el reparto!",
        "next_turn": "El turno pasa al jugador {player}.",
        "continue_turn": "El jugador {player} continúa su turno.",
        "room_full": "La sala está llena.",
        "player_exists": "Ya existe un jugador con este nombre en la sala.",
        "game_already_started": "El juego ya ha comenzado.",
        "not_enough_players": "No hay suficientes jugadores.",
        "game_over_win": "¡Juego terminado! Ganador: {winner}.",
        "game_over_tie": "¡Juego terminado! ¡Empate entre ganadores! La mayoría de cajas recolectadas por: {winners}.",
        "game_over_full_tie": "¡Juego terminado! ¡Empate completo! Todos los jugadores recolectaron {score} cajas cada uno."
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
            if (key) {
                if (key === 'your_turn_prompt') {
                    const currentPlayerName = document.getElementById('current-player-name');
                    const playerName = currentPlayerName?.textContent || myName || translateText('default_player');
                    element.textContent = translateText(key, { playerName: playerName });
                    
                } else if (key === 'response_prompt') {
                    const askingPlayerName = document.getElementById('asking-player-name');
                    const askedCardRank = document.getElementById('asked-card-rank');
                    const askingPlayer = askingPlayerName?.textContent || '';
                    const cardRank = askedCardRank?.textContent || '';
                    
                    // Оновлюємо тільки якщо є дані
                    if (askingPlayer || cardRank) {
                        element.textContent = translateText(key, {
                            askingPlayer: askingPlayer,
                            cardRank: cardRank
                        });
                    }
                    
                } else {
                    element.textContent = translateText(key);
                }
            }
        });
        
        // Оновлення placeholder'ів
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (key && element.placeholder !== undefined) {
                element.placeholder = translateText(key);
            }
        });
        
    } catch (error) {
        console.warn('Помилка при оновленні тексту:', error);
    }
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    // Додаємо обробник події для зміни мови
    document.getElementById('langSelect').addEventListener('change', updateAllText);
    
    // Первинна ініціалізація тексту
    updateAllText();
});
