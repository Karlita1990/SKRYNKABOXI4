         const tg = window.Telegram.WebApp;
        const WS_URL = "wss://telegram-webapp-beispiel.onrender.com"; // !!! Змініть на публічну адресу вашого сервера !!!
        let socket;
        let telegramUser = '';
        let myName = '';
        let myRoomId = '';
        let myCards = [];
        // Лічильник для контролю, щоб game_over оброблявся лише один раз
        let gameOverHandled = false;
		
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
            currentPlayerName: document.getElementById('current-player-name'), // Додано
			myGameName: document.getElementById('my-name') // ДОДАЙТЕ ЦЕЙ РЯДОК
        };

        if (tg) {
    tg.ready();
    tg.expand();
    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        const u = tg.initDataUnsafe.user;
        telegramUser = u.username ? `@${u.username}` : (u.first_name || translateText('default_player'));
        elements.playerNameInput.value = telegramUser;
    } else {
        telegramUser = translateText('anonymous_player');
           }
    } else {
        telegramUser = translateText('test_player');
    }  


        // Оновлена функція updateUI


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
            //elements.guessCount.style.display = 'none';
            //elements.guessSuitsForm.style.display = 'none';
            elements.responseButtons.style.display = 'none';

        }

        function joinRoom() {
    myName = elements.playerNameInput.value.trim();
    myRoomId = elements.roomIdInput.value.trim();
    const language = document.getElementById('langSelect').value;
	elements.myGameName.textContent = `Вітаємо! Ваш нік: ${myName}`;

    if (myName && myRoomId) {
        connectWebSocket(language);
    } else {
        elements.lobbyMessage.textContent = translateText('error_enter_name_and_room');
    }
}

        function addLogEntry(message, type) {
            const logEntry = document.createElement('div');
            logEntry.className = `log-entry ${type}-log`;
            logEntry.textContent = message;
            elements.log.appendChild(logEntry);  // <--- ВИПРАВЛЕНО ТУТ
            elements.log.scrollTop = elements.log.scrollHeight; // <--- ВИПРАВЛЕНО ТУТ
        }

		// Функція для обробки завершення гри
        // Оновіть функцію handleGameOver()
        function handleGameOver(data) {
            if (gameOverHandled) return;
            gameOverHandled = true;

            logMessage(translateText('game_over_winner', { winner: data.winner }));

            // Формування результатів
            const resultsHtml = data.results.map(p => {
                return `${p.name}: ${p.score} ${translateText('boxes_unit')}`;
            }).join('\n');

            const modalContent = `${translateText('game_over_message', { message: data.message })}\n\n${translateText('game_results')}:\n${resultsHtml}`;
            window.alert(modalContent);

            window.alert(translateText('reload_for_new_game'));
        }
		
        // Оновлена функція connectWebSocket
function connectWebSocket(language = 'uk') {
    socket = new WebSocket(WS_URL);
    
    socket.onopen = () => {
        logMessage('connected_to_server');
        const message_to_send = { type: 'join', name: myName, room: myRoomId, language: language };
        socket.send(JSON.stringify(message_to_send));
    };
    
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        
        switch (data.type) {
            case 'joined_room':
                elements.lobby.style.display = 'none';
                elements.game.style.display = 'block';
                logMessage('joined_room_success', { roomId: myRoomId });
                break;
            case 'update_state':
                updateUI(data.state, data.state.my_hand);
				updateAllText(); 
                break;
            case 'start_game':
                logMessage('game_started');
                break;
            case 'game_over':
                handleGameOver(data);
                break;
            case 'ask_response_needed':
                hideAllControls();
                elements.responseButtons.style.display = 'block';
    
                // Перевіряємо, чи сервер надіслав коректні дані
                if (data.asking_player && data.card_rank) {
                    elements.askingPlayerName.textContent = data.asking_player;
                    elements.askedCardRank.textContent = data.card_rank;
        
                    // Безпосереднє оновлення тексту
                    document.querySelectorAll('[data-i18n="response_prompt"]').forEach(element => {
                        element.textContent = translateText('response_prompt', {
                            askingPlayer: data.asking_player,
                            cardRank: data.card_rank
                        });
                    });
                } else {
                        console.error('Некоректні дані запиту:', data);
                        }
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
                // Обробка локалізованих повідомлень
                if (data.translation_key) {
                    logMessage(data.translation_key, data.params || {});
                } else if (data.message) {
                    logMessage(data.message);
                }
                break;
            case 'error':
                logMessage('error_message', { message: data.message });
                break;
        }
    };

    socket.onclose = () => {
        logMessage('disconnected_from_server');
        setTimeout(connectWebSocket, 5000);
    };
    
    socket.onerror = (error) => {
        logMessage('websocket_error', { error: error });
    };
}

        function startGame() {
            if (socket.readyState === WebSocket.OPEN) {
                  const message_to_send = { type: 'start_game', room: myRoomId };
                // Логуємо повідомлення перед відправкою
                                                    //addLogEntry(`Надсилаю: ${JSON.stringify(message_to_send)}`, 'system');
                 // Відправляємо повідомлення
                socket.send(JSON.stringify(message_to_send));
            }
        }

        // Оновіть функцію askForCard()
        function askForCard() {
            const targetPlayer = elements.targetPlayerSelect.value;
            const cardRank = elements.cardRankSelect.value;
            if (targetPlayer && cardRank) {
               const message_to_send = {type: 'ask_card', room: myRoomId, target: targetPlayer, card_rank: cardRank };
               socket.send(JSON.stringify(message_to_send)); 
            } else {
                logMessage(translateText('error_select_player_and_card'));
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
                // Логуємо повідомлення перед відправкою
                                                    //addLogEntry(`Надсилаю: ${JSON.stringify(message_to_send)}`, 'system');
               // Відправляємо повідомлення
                socket.send(JSON.stringify(message_to_send));
                elements.guessSuitsForm.style.display = 'none';
            } else {
                logMessage(translateText('error_select_suits'));
            }
        }

      // Додайте обробник подій для нової кнопки
      elements.submitGuessCountBtn.onclick = () => {
      const count = parseInt(elements.guessCountInput.value, 10);

      if (!isNaN(count)) {
          const message_to_send = { type: 'guess_count', room: myRoomId, count: count };
          // Логуємо повідомлення перед відправкою
                                                     //addLogEntry(`Надсилаю: ${JSON.stringify(message_to_send)}`, 'system');    
          // Відправляємо повідомлення
          socket.send(JSON.stringify(message_to_send));
          elements.guessCount.style.display = 'none'; // ховаємо форму після відправки
      } else {
          logMessage(translateText('error_select_count'));
      }
  };
  
  // Додайте цей код в кінець файлу script.js

// Оновлена функція updateUI для підтримки локалізації
function updateUI(state, myHand) {
    // Оновлення списку гравців з їхніми скриньками
    elements.playersList.innerHTML = '';
    state.players.forEach(p => {
        const li = document.createElement('li');
        
        // Формуємо текст з інформацією про зібрані скриньки
        const collectedSetsText = p.collected_sets.length > 0
            ? ` (${p.collected_sets.join(', ')})`
            : '';
        
        // Використовуємо локалізований текст
        const statusText = p.is_turn ? translateText('status_turn') : translateText('status_waiting');
        li.textContent = `${p.name} (${statusText}) - ${translateText('collected_boxes')}: ${p.collected_boxes}${collectedSetsText}`;
        elements.playersList.appendChild(li);
    });
    
    // Оновлення імені поточного гравця
    elements.currentPlayerName.textContent = state.current_turn;
    
    // Оновлення карт гравця
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
    
    // Оновлення розміру колоди
    elements.deckSize.textContent = state.deck_size;
    
    // Оновлення статусу гри з локалізацією
    if (state.game_started) {
        elements.gameStatus.textContent = translateText('status_game_started', {
            playerName: state.current_turn
        });
    } else {
        elements.gameStatus.textContent = translateText('status_waiting_for_players_count', {
            count: state.players.length,
            max: 6
        });
    }
    
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
    
    // Оновлюємо всі тексти після змін
    updateAllText();
}

// Оновлена функція logMessage для підтримки локалізації
function logMessage(messageKey, params = {}) {
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();
    const p = document.createElement('p');
    
    // Перевіряємо, чи це ключ перекладу чи звичайний текст
    const messageText = translations[document.getElementById('langSelect').value]?.[messageKey] 
        ? translateText(messageKey, params) 
        : messageKey;
    
    p.textContent = `[${dateStr} ${timeStr}] ${messageText}`;
    elements.log.appendChild(p);
    elements.log.scrollTop = elements.log.scrollHeight;
}

