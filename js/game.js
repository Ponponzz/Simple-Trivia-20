
        let currentQuestionIndex = 0;
        let score = 0;
        let questions = [];
        let isAudioEnabled = true;
        let selectedAnswer = null;

        const questionBank = [
            // Gaming
            { category: 'gaming', question: 'Which gaming console was released by Nintendo in 2017?', options: ['Nintendo Switch', 'Nintendo 3DS', 'Nintendo Wii U', 'Nintendo DS'], correct: 0 },
            { category: 'gaming', question: 'In which game do players build with blocks in a sandbox environment?', options: ['Fortnite', 'Minecraft', 'Roblox', 'Terraria'], correct: 1 },
            { category: 'gaming', question: 'What is the highest-grossing video game franchise of all time?', options: ['Call of Duty', 'Mario', 'Pokémon', 'Grand Theft Auto'], correct: 2 },
            
            // Sports
            { category: 'sports', question: 'How many players are on a basketball team on the court at one time?', options: ['4', '5', '6', '7'], correct: 1 },
            { category: 'sports', question: 'In which sport would you perform a slam dunk?', options: ['Volleyball', 'Tennis', 'Basketball', 'Baseball'], correct: 2 },
            { category: 'sports', question: 'How often are the Summer Olympic Games held?', options: ['Every 2 years', 'Every 3 years', 'Every 4 years', 'Every 5 years'], correct: 2 },
            
            // Technology
            { category: 'technology', question: 'What does "AI" stand for?', options: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Integration', 'Algorithmic Interface'], correct: 1 },
            { category: 'technology', question: 'Which company developed the iPhone?', options: ['Samsung', 'Google', 'Apple', 'Microsoft'], correct: 2 },
            { category: 'technology', question: 'What does "URL" stand for?', options: ['Universal Resource Locator', 'Uniform Resource Locator', 'Universal Reference Link', 'Uniform Reference Locator'], correct: 1 },
            
            // Finance
            { category: 'finance', question: 'What does "GDP" stand for?', options: ['Gross Domestic Product', 'General Domestic Product', 'Global Domestic Product', 'Government Domestic Product'], correct: 0 },
            { category: 'finance', question: 'Which cryptocurrency was the first to be created?', options: ['Ethereum', 'Bitcoin', 'Litecoin', 'Ripple'], correct: 1 },
            { category: 'finance', question: 'What is the term for spreading investments across various assets?', options: ['Consolidation', 'Diversification', 'Speculation', 'Liquidation'], correct: 1 },
            
            // Physics
            { category: 'physics', question: 'What is the speed of light in a vacuum?', options: ['300,000 km/s', '299,792,458 m/s', '150,000 km/s', '186,000 miles/s'], correct: 1 },
            { category: 'physics', question: 'Who developed the theory of relativity?', options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'], correct: 1 },
            { category: 'physics', question: 'What force keeps planets in orbit around the sun?', options: ['Magnetic force', 'Gravitational force', 'Nuclear force', 'Electromagnetic force'], correct: 1 },
            
            // Mathematics
            { category: 'mathematics', question: 'What is 12 × 8?', options: ['84', '96', '104', '88'], correct: 1 },
            { category: 'mathematics', question: 'What is the value of π (pi) to two decimal places?', options: ['3.14', '3.16', '3.12', '3.18'], correct: 0 },
            { category: 'mathematics', question: 'What is the square root of 144?', options: ['11', '12', '13', '14'], correct: 1 },
            
            // Animals
            { category: 'animals', question: 'Which animal is known as the "King of the Jungle"?', options: ['Tiger', 'Elephant', 'Lion', 'Leopard'], correct: 2 },
            { category: 'animals', question: 'How many hearts does an octopus have?', options: ['1', '2', '3', '4'], correct: 2 },
            { category: 'animals', question: 'Which bird is known for its ability to mimic human speech?', options: ['Eagle', 'Parrot', 'Owl', 'Crow'], correct: 1 },
            
            // Psychology
            { category: 'psychology', question: 'Who is considered the father of psychoanalysis?', options: ['Carl Jung', 'Sigmund Freud', 'B.F. Skinner', 'Ivan Pavlov'], correct: 1 },
            { category: 'psychology', question: 'What does "IQ" stand for?', options: ['Intelligence Quotient', 'Intellectual Quality', 'Intelligence Quality', 'Intellectual Quotient'], correct: 0 },
            { category: 'psychology', question: 'Which part of the brain is primarily responsible for memory?', options: ['Cerebellum', 'Hippocampus', 'Frontal lobe', 'Brain stem'], correct: 1 },

            // Additional questions to ensure we have enough
            { category: 'gaming', question: 'Which company created the PlayStation console?', options: ['Nintendo', 'Microsoft', 'Sony', 'Sega'], correct: 2 },
            { category: 'sports', question: 'In tennis, what is a score of zero called?', options: ['Love', 'Nil', 'Zero', 'Blank'], correct: 0 },
            { category: 'technology', question: 'What does "HTTP" stand for?', options: ['HyperText Transfer Protocol', 'High Tech Transfer Protocol', 'HyperText Transport Protocol', 'High Transfer Text Protocol'], correct: 0 },
            { category: 'finance', question: 'What is inflation?', options: ['Decrease in prices', 'Increase in prices', 'Stable prices', 'Currency devaluation'], correct: 1 },
            { category: 'physics', question: 'What is the smallest unit of matter?', options: ['Molecule', 'Atom', 'Electron', 'Proton'], correct: 1 },
            { category: 'mathematics', question: 'What is 15% of 200?', options: ['25', '30', '35', '40'], correct: 1 },
            { category: 'animals', question: 'Which mammal is known to have the longest lifespan?', options: ['Elephant', 'Blue Whale', 'Human', 'Tortoise'], correct: 1 },
            { category: 'psychology', question: 'What is the term for the fear of heights?', options: ['Claustrophobia', 'Agoraphobia', 'Acrophobia', 'Arachnophobia'], correct: 2 }
        ];

        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        function startGame() {
            questions = shuffleArray(questionBank).slice(0, 20);
            currentQuestionIndex = 0;
            score = 0;
            
            document.getElementById('landingScreen').classList.add('hidden');
            document.getElementById('gameScreen').classList.remove('hidden');
            
            if (isAudioEnabled) {
                document.getElementById('backgroundMusic').play();
            }
            
            showQuestion();
        }

        function showQuestion() {
            const question = questions[currentQuestionIndex];
            const progressPercent = ((currentQuestionIndex + 1) / 20) * 100;
            
            // Update theme
            document.body.className = question.category;
            
            // Update progress
            document.getElementById('progressFill').style.width = progressPercent + '%';
            document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
            document.getElementById('currentScore').textContent = score;
            
            // Update question content
            document.getElementById('categoryBadge').textContent = question.category.charAt(0).toUpperCase() + question.category.slice(1);
            document.getElementById('questionText').textContent = question.question;
            
            // Update options
            const optionsContainer = document.getElementById('optionsContainer');
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.textContent = option;
                optionElement.onclick = () => selectAnswer(index);
                optionsContainer.appendChild(optionElement);
            });
            
            // Hide next button
            document.getElementById('nextBtn').classList.remove('show');
            selectedAnswer = null;
            nextBtn.disabled = true;  // prevent clicks
            selectedAnswer = null;
        }

        function selectAnswer(answerIndex) {
            if (selectedAnswer !== null) return; // Prevent multiple selections
            
            selectedAnswer = answerIndex;
            const question = questions[currentQuestionIndex];
            const options = document.querySelectorAll('.option');
            
            options.forEach((option, index) => {
                option.onclick = null; // Disable further clicks
                
                if (index === question.correct) {
                    option.classList.add('correct');
                } else if (index === answerIndex) {
                    option.classList.add('incorrect');
                }
            });
            
            if (answerIndex === question.correct) {
                score++;
                playSound('correctSound');
                createConfetti();
            } else {
                playSound('incorrectSound');
            }
            
            // Show next button
            setTimeout(() => {
                document.getElementById('nextBtn').classList.add('show');
            }, 1000);
            nextBtn.disabled = false;
        }

        function nextQuestion() {
            currentQuestionIndex++;
            
            if (currentQuestionIndex >= 20) {
                showResults();
            } else {
                showQuestion();
            }
        }

        function showResults() {
            document.getElementById('gameScreen').classList.add('hidden');
            document.getElementById('resultsScreen').classList.remove('hidden');
            
            document.getElementById('backgroundMusic').pause();
            document.getElementById('backgroundMusic').currentTime = 0;
            
            document.getElementById('finalScore').textContent = score + '/20';
            
            let message = '';
            if (score >= 18) message = '🏆 Genius Level! Absolutely incredible!';
            else if (score >= 15) message = '🌟 Brilliant! You\'re a trivia master!';
            else if (score >= 12) message = '🎯 Great job! Above average performance!';
            else if (score >= 9) message = '👍 Not bad! Room for improvement!';
            else if (score >= 6) message = '📚 Keep studying and try again!';
            else message = '🤔 Practice makes perfect! Don\'t give up!';
            
            document.getElementById('scoreMessage').textContent = message;
            
            // Create celebration confetti for high scores
            if (score >= 15) {
                setTimeout(() => createConfetti(), 500);
                setTimeout(() => createConfetti(), 1000);
                setTimeout(() => createConfetti(), 1500);
            }
        }

        function restartGame() {
            document.getElementById('resultsScreen').classList.add('hidden');
            document.getElementById('landingScreen').classList.remove('hidden');
            document.body.className = '';
        }

        function toggleAudio() {
            isAudioEnabled = !isAudioEnabled;
            const audioToggle = document.querySelector('.audio-toggle');
            audioToggle.textContent = isAudioEnabled ? '🔊' : '🔇';
            
            if (!isAudioEnabled) {
                document.getElementById('backgroundMusic').pause();
            }
        }

        function playSound(soundId) {
            if (isAudioEnabled) {
                const sound = document.getElementById(soundId);
                sound.currentTime = 0;
                sound.play().catch(() => {}); // Handle autoplay restrictions
            }
        }

        function createConfetti() {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f39c12', '#9b59b6', '#e74c3c'];
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDelay = Math.random() * 2 + 's';
                confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 4000);
            }
        }

        // Initialize audio toggle
        document.querySelector('.audio-toggle').textContent = isAudioEnabled ? '🔊' : '🔇';