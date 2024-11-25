document.getElementById('refresh-btn').addEventListener('click', loadFlashcards);

function loadFlashcards() {
    const flashcardsContainer = document.getElementById('flashcards-container');
    flashcardsContainer.innerHTML = ''; // Limpa os flashcards existentes

    const flashcards = [
        { question: 'Qual é a fórmula da água?', answer: 'H₂O' },
        { question: 'Quem descobriu a América?', answer: 'Cristóvão Colombo' },
        { question: 'Qual é a capital do Brasil?', answer: 'Brasília' },
        // Adicione mais perguntas e respostas aqui
    ];

    flashcards.forEach(flashcard => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('flashcard');
        cardElement.textContent = flashcard.question;
        cardElement.addEventListener('click', () => {
            cardElement.textContent = flashcard.answer;
        });
        flashcardsContainer.appendChild(cardElement);
    });
}

// Carrega os flashcards ao iniciar a página
loadFlashcards();