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
        this.btn = document.getElementById('show_all');
        this.btnText = document.querySelector('.btn__text_open');
        this.btnArrow = document.querySelector('.btn__arrow');

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
            this.btnText.textContent = 'Скрыть';
            this.btnArrow.classList.add('active');
            this._setOpen();
            return;
        }

        if (this.config.isOpen === true) {
            this._setClose();
            this.triggerResize();
            this.btnText.textContent = 'Показать все';
            this.btnArrow.classList.remove('active');
            return;
        }
    }

    triggerResize() {
        const width = window.innerWidth;
        if (width >= this.config.L.size) {
            this.displayOnResize(this.config.L.amount)
        } else if (width >= this.config.M.size) {
            this.displayOnResize(this.config.M.amount)
        } else if (width < this.config.M.size) {
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

        const slider = new Swiper('.swiper', {

            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },

            slidesPerView: 'auto',

            spaceBetween: 16,

            768: {
                initialSlide: 0,
                spaceBetween: 0,
                enabled: false
            }
        });

        window.addEventListener('resize', () => {
            slider.update(); 
        });
    }

}
const cardUtils = new CardUtils();
cardUtils.triggerResize();