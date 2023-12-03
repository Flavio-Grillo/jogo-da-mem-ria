const emojis = [
    "❤️", "❤️", "🥸", "🥸", "🤡", "🤡", "😈", "😈",
    "💩", "💩", "🍕", "🍕", "🍔", "🍔", "💎", "💎"
];

let openCards = [];
let canClick = true;

const shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleclick;
    document.querySelector(".game").appendChild(box);
}

function handleclick() {
    if (canClick && openCards.length < 2 && !this.classList.contains("boxOpen")) {
        this.classList.add("boxOpen");
        openCards.push(this);

        if (openCards.length === 2) {
            canClick = false;
            setTimeout(checkMatch, 500);
        }
    }
}

function checkMatch() {
    const card1 = openCards[0];
    const card2 = openCards[1];

    if (card1.innerHTML === card2.innerHTML) {
        card1.classList.add("boxMatch");
        card2.classList.add("boxMatch");
    } else {
        card1.classList.remove("boxOpen");
        card2.classList.remove("boxOpen");
    }

    openCards = [];
    canClick = true;

    const matchedCards = document.querySelectorAll(".boxMatch");
    if (matchedCards.length === emojis.length) {
        alert("Você ganhou!");
    }
}
