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
            currentPlayerName: document.getElementById('current-player-name') // Додано
        };

        if (tg) {
            tg.ready();
            tg.expand();
            if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
                const u = tg.initDataUnsafe.user;
                telegramUser = u.username ? `@${u.username}` : (u.first_name || 'Гравець');
                elements.playerNameInput.value = telegramUser;
            } else {
                telegramUser = "Анонімний гравець";
            }
        } else {
            telegramUser = "Тестовий гравець";
        }

        function logMessage(message) {
            const now = new Date();
            const dateStr = now.toLocaleDateString();   // локальна дата, напр. 25.08.2025
            const timeStr = now.toLocaleTimeString();   // локальний час, напр. 14:35:12
            const p = document.createElement('p');
            p.textContent = `[${dateStr} ${timeStr}] ${message}`;
            elements.log.appendChild(p);
            elements.log.scrollTop = elements.log.scrollHeight;
        }


        function updateUI(state, myHand) {
            // Оновлення списку гравців з їхніми скриньками
            elements.playersList.innerHTML = '';
            state.players.forEach(p => {
                const li = document.createElement('li');

                // Формуємо текст з інформацією про зібрані скриньки
                const collectedSetsText = p.collected_sets.length > 0
                    ? ` (${p.collected_sets.join(', ')})`
                    : '';

                li.textContent = `${p.name} (${p.is_turn ? 'Ходить' : 'Очікує'}) - Скриньок: ${p.collected_boxes}${collectedSetsText}`;
                elements.playersList.appendChild(li);
            });

            // Оновлення імені поточного гравця
            elements.currentPlayerName.textContent = state.current_turn;

            // Використовуємо myHand, переданий як аргумент
            elements.playerHand.innerHTML = '';
            if (myHand && myHand.length > 0) {
                myHand.forEach(card => {
                    const div = document.createElement('div');
                    // Перевіряємо масті для кольору
                    const isRedSuit = card.includes('♥') || card.includes('♦');
                    div.className = `card ${isRedSuit ? 'hearts' : 'clubs'}`;
                    div.textContent = card;
                    elements.playerHand.appendChild(div);
                });
            }
    
            // Оновлення розміру колоди
            elements.deckSize.textContent = state.deck_size;
    
            // Оновлення статусу гри
            elements.gameStatus.textContent = state.game_started 
               ? `Гра розпочалась! Хід гравця: ${state.current_turn}` 
               : `Очікування на гравців... (Всього ${state.players.length}/6)`;

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
            //elements.guessCount.style.display = 'none';
            //elements.guessSuitsForm.style.display = 'none';
            elements.responseButtons.style.display = 'none';
        }

        function joinRoom() {
            myName = elements.playerNameInput.value.trim();
            myRoomId = elements.roomIdInput.value.trim();

            if (myName && myRoomId) {
                connectWebSocket();
            } else {
                elements.lobbyMessage.textContent = 'Будь ласка, введіть ім\'я та ID кімнати.';
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
        function handleGameOver(data) {
            if (gameOverHandled) return; // якщо вже виконувалось – вийти
            gameOverHandled = true;

            logMessage(`🏆 Гра завершена! Переможець: ${data.winner}.`);
    
            // Відображення повідомлення
            //window.alert("🏆 " + data.message);

            // Формування результатів
            const resultsHtml = data.results.map(p => {
                return `${p.name}: ${p.score} скриньок`;
            }).join('\n');

            // Оновлення модального вікна (тут поки через alert)
            const modalContent = `🏆 ${data.message}\n\nРезультати гри:\n${resultsHtml}`;
            window.alert(modalContent);

            window.alert("Для нової гри перезавантажте бот та зареєструйтеся заново");
        }
		
        function connectWebSocket() {
            socket = new WebSocket(WS_URL);
            
            socket.onopen = () => {
                logMessage("Підключено до сервера. Надсилаємо ім'я гравця та ID кімнати...");
                // Новий, виправлений код:
                   const message_to_send = { type: 'join', name: myName, room: myRoomId };
                                                    //addLogEntry(`Надсилаю: ${JSON.stringify(message_to_send)}`, 'system');
                   socket.send(JSON.stringify(message_to_send));
                   };
            
            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                                                      //logMessage(`Отримано: ${event.data}`);
                
                switch (data.type) {
                    case 'joined_room':
                        elements.lobby.style.display = 'none';
                        elements.game.style.display = 'block';
                        logMessage(`Приєднано до кімнати: ${myRoomId}`);
                        break;
                    case 'update_state':
                        updateUI(data.state, data.state.my_hand);
                        break;
                    case 'start_game':
                        logMessage('Гра розпочалась!');
                        break;
                    case 'game_over':
                        handleGameOver(data); // викликаємо окрему функцію
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
                        logMessage(`Помилка: ${data.message}`);
                        break;
                }
            };

            socket.onclose = () => {
                logMessage("Відключено від сервера. Спроба перепідключення через 5 секунд...");
                setTimeout(connectWebSocket, 5000);
            };
            
            socket.onerror = (error) => {
                logMessage(`Помилка WebSocket: ${error}`);
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

        function askForCard() {
            const targetPlayer = elements.targetPlayerSelect.value;
            const cardRank = elements.cardRankSelect.value;
            if (targetPlayer && cardRank) {
                  const message_to_send = {type: 'ask_card', room: myRoomId, target: targetPlayer, card_rank: cardRank };
                // Логуємо повідомлення перед відправкою
                                                    //addLogEntry(`Надсилаю: ${JSON.stringify(message_to_send)}`, 'system');
               // Відправляємо повідомлення
                  socket.send(JSON.stringify(message_to_send)); 
            } else {
                logMessage('Будь ласка, виберіть гравця та значення карти.');
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
                logMessage('Будь ласка, виберіть масті.');
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
          logMessage('Будь ласка, виберіть кількість.');
      }
  };

