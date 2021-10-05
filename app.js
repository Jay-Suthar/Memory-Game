document.addEventListener('DOMContentLoaded', () => {
    // console.log("page has started");

    //adding diff fruits in the array
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        }
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const score = document.querySelector('#result');
    let cardsChoosen = [];
    let cardsChoosenId = [];
    let cardsWon = [];

    function fillGrid() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function cardCheck() {
        const cards = document.querySelectorAll('img');
        const id1 = cardsChoosenId[0];
        const id2 = cardsChoosenId[1];
        if (id1 == id2) {
            cards[id1].setAttribute('src', 'images/blank.png');
            cards[id2].setAttribute('src', 'images/blank.png');
            alert("You have choosen the same card!");
        }

        else if (cardsChoosen[0] == cardsChoosen[1]) {
            cards[id1].setAttribute('src', 'images/white.png');
            cards[id2].setAttribute('src', 'images/white.png');
            cards[id1].removeEventListener('click', flipCard);
            cards[id2].removeEventListener('click', flipCard);
            alert("You found a match");
            cardsWon.push(cardsChoosen);
        }
        else {
            cards[id1].setAttribute('src', 'images/blank.png');
            cards[id2].setAttribute('src', 'images/blank.png');
            alert("Sorry, Try Again!");
        }
        cardsChoosen = [];
        cardsChoosenId = [];
        score.textContent = cardsWon.length;

        if (cardsWon.length == (cardArray.length) / 2) {
            alert("Congratulation, You have found all correct matches");
        }
    }
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChoosen.push(cardArray[cardId].name);
        cardsChoosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChoosen.length == 2) {
            setTimeout(cardCheck, 500);
        }
    }
    fillGrid();
})