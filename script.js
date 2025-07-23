let cards = [
    { question: "What is the capital of India?", answer: "New Delhi" },
    { question: "2 + 2 = ?", answer: "4" }
];

let currentCard = 0;

function displayCard() {
    document.getElementById('question').textContent = cards[currentCard].question;
    document.getElementById('answer').textContent = cards[currentCard].answer;
    document.getElementById('answer').classList.add('hidden');
}

function toggleAnswer() {
    document.getElementById('answer').classList.toggle('hidden');
}

function nextCard() {
    currentCard = (currentCard + 1) % cards.length;
    displayCard();
}

function prevCard() {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    displayCard();
}

function addCard() {
    const q = document.getElementById('newQuestion').value;
    const a = document.getElementById('newAnswer').value;
    if (q && a) {
        cards.push({ question: q, answer: a });
        currentCard = cards.length - 1;
        displayCard();
        document.getElementById('newQuestion').value = '';
        document.getElementById('newAnswer').value = '';
    }
}

function deleteCard() {
    if (cards.length > 1) {
        cards.splice(currentCard, 1);
        currentCard = 0;
        displayCard();
    } else {
        alert("At least one card must remain!");
    }
}

displayCard();
