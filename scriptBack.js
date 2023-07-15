// кнопка: "показать все" / "скрыть"
var btn = document.querySelector('.btn');
// контейнер карточек
var container = document.querySelector('.cards');
// список карточек
var cards = document.querySelector('.cards__list');
// коллекция всех карточек
var cardsList = Array.from(cards.querySelectorAll('.cards__card'));
// текст и символ кнопки
var btnText = btn.querySelector('.btn__text_open');
var btnArrow = btn.querySelector('div');
// счетчик index
var countIndex = 0;

// window.addEventListener('resize', event => {
//     if (event.target.window.innerWidth >= 768 && event.target.window.innerWidth <= 1119) widthWindow768();    
//     if (event.target.window.innerWidth > 1119) widthWindow1120();
//     if (event.target.window.innerWidth < 768) widthWindow320();
// });


var openAllCards = function (indexMax) {
    var isOpen = false; // Флаг, указывающий, открыты ли карточки

    btn.addEventListener('click', function () {
        if (isOpen) {
            // Если карточки открыты, скрыть все, кроме исходного количества карточек
            for (let i = indexMax; i < cardsList.length; i++) {
                cardsList[i].classList.add('hidden');
            }
            btnText.textContent = 'Показать все';
            btnArrow.classList.remove('active');
            isOpen = false;
        } else {
            // Если карточки скрыты, показать все карточки
            for (let i = indexMax; i < cardsList.length; i++) {
                cardsList[i].classList.remove('hidden');
            }
            btnText.textContent = 'Скрыть';
            btnArrow.classList.add('active');
            isOpen = true;
        }
    });
};

var widthWindow1120 = function () {
    if (window.innerWidth > 1119) {
        cardsList.forEach((item, index) => {
            item.classList.add('hidden');
            if (index <= 7) {
                item.classList.remove('hidden');
                countIndex = index + 1; // Обновляем значение countIndex на один больше, чем index
            }
        });

        openAllCards(countIndex); // Передаем значение countIndex в функцию openAllCards
    }
};


var widthWindow768 = function () {
    if (768 <= window.innerWidth && window.innerWidth <= 1119) { 

        cardsList.forEach((item, index) => {
            item.classList.add('hidden');
            if (index <= 5) {
                item.classList.remove('hidden');
                countIndex = index + 1; // Обновляем значение countIndex на один больше, чем index
            }
        });

        openAllCards(countIndex); // Передаем значение countIndex в функцию openAllCards
    }
};


var widthWindow320 = function () {
    if (window.matchMedia) {
        var screen = window.matchMedia("(max-width: 767px)");
        screen.addEventListener('change', changes);
        changes(screen);
    }
    function changes(screen) {
        if (screen.matches) {
            for (let i = 0; i < cardsList.length; i++) {
                cardsList[i].classList.remove('hidden');
            };
    
            var pagination = document.createElement('div');
            pagination.classList.add('swiper-pagination');
            container.appendChild(pagination);
    
            container.classList.add('swiper-container');
            cards.classList.add('swiper-wrapper');
    
            for (let i = 0; i < cardsList.length; i++) {
                cardsList[i].classList.add('swiper-slide');
            };
        };
    };
};

// function withWindow(size) {
//     if (window.innerWidth <= size) {
        
//     }
// }
// withWindow(320);

widthWindow768();
widthWindow1120();
widthWindow320();




        // const width = window.innerWidth
        // if (width < 768){
        
        // for (let i = 0; i < cardsList.length; i++) {
        //     cardsList[i].classList.remove('hidden');
        // };

        // var pagination = document.createElement('div');
        // pagination.classList.add('swiper-pagination');
        // container.appendChild(pagination);

        // container.classList.add('swiper-container');
        // cards.classList.add('swiper-wrapper');

        // for (let i = 0; i < cardsList.length; i++) {
        //     cardsList[i].classList.add('swiper-slide');
        // };

    //   const slider = new Swiper('.cards', {
    //     //Optional parameters
    //     loop: true,
      
    //     //pagination
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
     
    //   });
//     };
// };


// var widthWindow320 = function () {
    
//     if (window.innerWidth < 768) {
        
//         cardsList.forEach((item) => {item.classList.add('swiper-slide')});

//         for (let i = 0; i < cardsList.length; i++) {
//             cardsList[i].classList.remove('hidden');
//         };

//         //создание пагинации
//         var pagination = document.createElement('div');
//         pagination.classList.add('swiper-pagination');
//         container.appendChild(pagination);

//         container.classList.add('swiper-container');
//         cards.classList.add('swiper-wrapper');
//         cardsList.forEach((item) => {item.classList.add('swiper-slide')});

//         //инициализация слайдера
//         new Swiper('.cards');
//     };
// };

// widthWindow320();

// var swiperFunction = function() {
// document.addEventListener('DOMContentLoaded', () => {

//     if (window.innerWidth < 768){
    
//         var pagination = document.createElement('div');
//         pagination.classList.add('swiper-pagination');
//         container.appendChild(pagination);

//         container.classList.add('swiper-container');
//         cards.classList.add('swiper-wrapper');

//         for (let i = 0; i < cardsList.length; i++) {
//             cardsList[i].classList.add('swiper-slide');
//         };

//       const slider = new Swiper('.cards', {
//         // Optional parameters
//         loop: true,
      
//         // If we need pagination
//         pagination: {
//           el: '.swiper-pagination',
//         },
      
//         // Navigation arrows
      
//         // And if we need scrollbar
     
//       });
//     };
// });
// };

