class CardUtils {
    constructor() {
        this.config = {
            sliderClass: 'swiper-slide',
            isOpen: false,
            'S': {
                size: 320,
                amount: 999
            },
            'M': {
                size: 768,
                amount: 6
            },
            'L': {
                size: 1120,
                amount: 8
            }
        }

        this.cards = Array.from(
            document
                .querySelector('.cards__list')
                .querySelectorAll('.cards__card'))
            ;
        this.btn = document.getElementById('show_all')

        this.addListeners();
    }

    displayOnResize(amountOfCards) {
        if (this.config.isOpen) {
            return;
        }
        let hideIterations = this.cards.length - amountOfCards;
        let counter = hideIterations;

        let cardsCopy = this.cards.slice();
        this.displayAll(cardsCopy);

        cardsCopy.forEach(card => {
            card.classList.remove(this.config.sliderClass);
        });

        cardsCopy.reverse().forEach(card => {
            if (counter <= 0) {
                return;
            }
            card.classList.add('hidden');
            counter--;
        });

        this.cards = cardsCopy.reverse();
    }

    displayAll(cards) {
        cards.forEach(card => {
            card.classList.remove('hidden');
        })
    }

    addListeners() {
        window.addEventListener('resize', () => {
            this.triggerResize()
        })

        this.btn.addEventListener('click', () => {
            this.handleClick();
        })
    }

    handleClick() {
        if (this.config.isOpen === false) {
            this.displayAll(this.cards);
            // change btn name
            this._setOpen();
            return;
        }

        if (this.config.isOpen === true) {
            this._setClose();
            this.triggerResize();
            //change btn name
            return;
        }
    }

    triggerResize() {
        const width = window.innerWidth;
        if (width >= this.config.L.size) {
            this.displayOnResize(this.config.L.amount)
        } else if (width >= this.config.M.size) {
            this.displayOnResize(this.config.M.amount)
        } else {
            this.displayAll(this.cards);
            this.addSwiper();
        }
    }

    _setOpen() {
        this.config.isOpen = true;
    }

    _setClose() {
        this.config.isOpen = false;
    }

    addSwiper() {
        this.cards.forEach(card => {
            card.classList.add(this.config.sliderClass)
        })

        const slider = new Swiper('.cards', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            }
        });
    }
}
const cardUtils = new CardUtils();
cardUtils.triggerResize();