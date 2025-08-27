      // Код ігрової логіки для гри в Go Fish
// Примітка: Цей код призначений для використання у Telegram Web App

const tg = window.Telegram.WebApp;
const WS_URL = "wss://telegram-webapp-beispiel.onrender.com"; // !!! Змініть на публічну адресу вашого сервера !!!
let socket;
let telegramUser = '';
let myName = '';
let myRoomId = '';
let myCards = [];
let gameOverHandled = false;

// Змінні для локалізації
let translations = {};
let currentLang = 'uk'; // Мова за замовчуванням

// Функція для завантаження перекладів
async function loadTranslations() {
    try {
        const response = await fetch('translation.json');
        const data = await response.json();
        translations = data;
        const userLang = tg.initDataUnsafe?.user?.language_code;
        if (translations[userLang]) {
            currentLang = userLang;
        } else {
            // Якщо мова користувача не підтримується, використовуємо 'uk' або 'en' як запасний варіант
            currentLang = 'uk';
        }
    } catch (error) {
        logMessage(`Помилка завантаження перекладів: ${error}`);
        // Використовуємо 'uk' як запасний варіант, якщо завантаження не вдалося
        currentLang = 'uk';
    }
}

// Функція для отримання перекладеного рядка за ключем
function getTranslation(key) {
    return translations[currentLang]?.[key] || key;
}

// DOM-елементи
const elements = {
    lobby: document.getElementById('lobby'),
    game: document.getElementById('game'),
    playerNameInput: document.getElementById('player-name-input'),
    roomIdInput: document.getElementById('room-id-input'),
    lobbyMessage: document.getElementById('lobby-message'),
    gameStatus: document.getElementById('game-status'),
    startGameBtn: document.getElementById('startGameBtn'),
    gameActions: document.getElementById('game-actions'),
    playerHand: document.getElementById('player-hand'),
    collectedBoxes: document.getElementById('collected-boxes'),
    playersList: document.getElementById('players-list'),
    deckSize: document.getElementById('deck-size'),
    log: document.getElementById('log'),
    targetPlayerSelect: document.getElementById('target-player-select'),
    cardRankSelect: document.getElementById('card-rank-select'),
    guessSuitsForm: document.getElementById('guess-suits-form'),
    guessCount: document.getElementById('guess-count'),
    guessCountInput: document.getElementById('card-count-select'),
    submitGuessCountBtn: document.getElementById('submit-guess-count-btn'),
    suitsCheckboxes: document.getElementById('suits-checkboxes'),
    responseButtons: document.getElementById('response-buttons'),
    askingPlayerName: document.getElementById('asking-player-name'),
    askedCardRank: document.getElementById('asked-card-rank'),
    currentPlayerName: document.getElementById('current-player-name'),
    modal: document.getElementById('game-modal'), // Додаємо модальне вікно
    modalMessage: document.getElementById('modal-message'),
    modalCloseBtn: document.getElementById('modal-close-btn')
};

if (tg) {
    tg.ready();
    tg.expand();
    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        const u = tg.initDataUnsafe.user;
        telegramUser = u.username ? `@${u.username}` : (u.first_name || getTranslation('player_default'));
        elements.playerNameInput.value = telegramUser;
    } else {
        telegramUser = getTranslation('anonymous_player');
    }
} else {
    telegramUser = getTranslation('test_player');
}

// Завантаження перекладів після ініціалізації
loadTranslations().then(() => {
    // Встановлюємо значення за замовчуванням після завантаження
    elements.playerNameInput.value = telegramUser;
});

function logMessage(message) {
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();
    const p = document.createElement('p');
    p.textContent = `[${dateStr} ${timeStr}] ${message}`;
    elements.log.appendChild(p);
    elements.log.scrollTop = elements.log.scrollHeight;
}

function updateUI(state, myHand) {
    elements.playersList.innerHTML = '';
    state.players.forEach(p => {
        const li = document.createElement('li');
        const collectedSetsText = p.collected_sets.length > 0
            ? ` (${p.collected_sets.join(', ')})`
            : '';
        li.textContent = `${p.name} (${p.is_turn ? getTranslation('status_turn') : getTranslation('status_waiting')}) - ${getTranslation('status_boxes')}: ${p.collected_boxes}${collectedSetsText}`;
        elements.playersList.appendChild(li);
    });

    elements.currentPlayerName.textContent = state.current_turn;

    elements.playerHand.innerHTML = '';
    if (myHand && myHand.length > 0) {
        myHand.forEach(card => {
            const div = document.createElement('div');
            const isRedSuit = card.includes('♥') || card.includes('♦');
            div.className = `card ${isRedSuit ? 'hearts' : 'clubs'}`;
            div.textContent = card;
            elements.playerHand.appendChild(div);
        });
    }
    
    elements.deckSize.textContent = state.deck_size;
    
    elements.gameStatus.textContent = state.game_started
        ? `${getTranslation('game_status_started')} ${state.current_turn}`
        : `${getTranslation('game_status_waiting')} (${getTranslation('game_status_count')} ${state.players.length}/6)`;

    handleStartGameButton(state);
    hideAllControls();

    const myPlayerState = state.players.find(p => p.name === myName);
    if (state.game_started && state.current_turn === myName) {
        elements.gameActions.style.display = 'block';
        elements.targetPlayerSelect.innerHTML = state.players
            .filter(p => p.name !== myName)
            .map(p => `<option value="${p.name}">${p.name}</option>`)
            .join('');
    }
}

function handleStartGameButton(state) {
    const isRoomAdmin = state.room_admin === myName;
    
    if (isRoomAdmin && !state.game_started) {
        elements.startGameBtn.style.display = 'block';
        elements.startGameBtn.disabled = state.players.length < 2;
    } else {
        elements.startGameBtn.style.display = 'none';
    }
}

function hideAllControls() {
    elements.gameActions.style.display = 'none';
    elements.guessCount.style.display = 'none';
    elements.guessSuitsForm.style.display = 'none';
    elements.responseButtons.style.display = 'none';
}

function joinRoom() {
    myName = elements.playerNameInput.value.trim();
    myRoomId = elements.roomIdInput.value.trim();

    if (myName && myRoomId) {
        connectWebSocket();
    } else {
        elements.lobbyMessage.textContent = getTranslation('lobby_input_error');
    }
}

function addLogEntry(message, type) {
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${type}-log`;
    logEntry.textContent = message;
    elements.log.appendChild(logEntry);
    elements.log.scrollTop = elements.log.scrollHeight;
}

function showModal(message) {
    elements.modalMessage.textContent = message;
    elements.modal.style.display = 'flex';
}

function handleGameOver(data) {
    if (gameOverHandled) return;
    gameOverHandled = true;

    logMessage(`${getTranslation('game_over_winner_message')} ${data.winner}.`);
    
    const resultsHtml = data.results.map(p => {
        return `${p.name}: ${p.score} ${getTranslation('game_over_boxes_suffix')}`;
    }).join('\n');

    const modalContent = `${getTranslation('game_over_winner_message')} ${data.winner}.\n\n${getTranslation('game_over_results_title')}\n${resultsHtml}\n\n${getTranslation('new_game_instruction')}`;
    
    showModal(modalContent);
}
    
function connectWebSocket() {
    socket = new WebSocket(WS_URL);
    
    socket.onopen = () => {
        logMessage(getTranslation('websocket_connecting'));
        const message_to_send = { type: 'join', name: myName, room: myRoomId };
        socket.send(JSON.stringify(message_to_send));
    };
    
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        
        switch (data.type) {
            case 'joined_room':
                elements.lobby.style.display = 'none';
                elements.game.style.display = 'block';
                logMessage(`${getTranslation('joined_room')} ${myRoomId}`);
                break;
            case 'update_state':
                updateUI(data.state, data.state.my_hand);
                break;
            case 'start_game':
                logMessage(getTranslation('game_started_log'));
                break;
            case 'game_over':
                handleGameOver(data);
                break;
            case 'ask_response_needed':
                hideAllControls();
                elements.responseButtons.style.display = 'block';
                elements.askingPlayerName.textContent = data.asking_player;
                elements.askedCardRank.textContent = data.card_rank;
                break;
            case 'guess_count_needed':
                hideAllControls();
                elements.guessCount.style.display = 'block';
                break;
            case 'guess_suits_needed':
                hideAllControls();
                elements.guessSuitsForm.style.display = 'block';
                break;
            case 'log':
                logMessage(data.message);
                break;
            case 'error':
                logMessage(`${getTranslation('error_prefix')} ${data.message}`);
                break;
        }
    };

    socket.onclose = () => {
        logMessage(getTranslation('websocket_disconnected'));
        setTimeout(connectWebSocket, 5000);
    };
    
    socket.onerror = (error) => {
        logMessage(`${getTranslation('websocket_error')} ${error}`);
    };
}

function startGame() {
    if (socket.readyState === WebSocket.OPEN) {
        const message_to_send = { type: 'start_game', room: myRoomId };
        socket.send(JSON.stringify(message_to_send));
    }
}

function askForCard() {
    const targetPlayer = elements.targetPlayerSelect.value;
    const cardRank = elements.cardRankSelect.value;
    if (targetPlayer && cardRank) {
        const message_to_send = {type: 'ask_card', room: myRoomId, target: targetPlayer, card_rank: cardRank };
        socket.send(JSON.stringify(message_to_send));
    } else {
        logMessage(getTranslation('ask_card_error'));
    }
}
    
function respondToAsk(response) {
    socket.send(JSON.stringify({ type: 'ask_response', room: myRoomId, response: response }));
    hideAllControls();
}

function guessSuits() {
    const suits = Array.from(elements.suitsCheckboxes.querySelectorAll('input:checked')).map(cb => cb.value);
    if (suits.length > 0) {
        const message_to_send = { type: 'guess_suits', room: myRoomId, suits: suits };
        socket.send(JSON.stringify(message_to_send));
        elements.guessSuitsForm.style.display = 'none';
    } else {
        logMessage(getTranslation('guess_suits_error'));
    }
}

elements.submitGuessCountBtn.onclick = () => {
    const count = parseInt(elements.guessCountInput.value, 10);

    if (!isNaN(count)) {
        const message_to_send = { type: 'guess_count', room: myRoomId, count: count };
        socket.send(JSON.stringify(message_to_send));
        elements.guessCount.style.display = 'none';
    } else {
        logMessage(getTranslation('guess_count_error'));
    }
};

elements.modalCloseBtn.onclick = () => {
    elements.modal.style.display = 'none';
};
