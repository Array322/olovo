(function () {
  const mainMenu = document.querySelector(".menu_main");
  const hamburger = mainMenu.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    mainMenu.classList.toggle("menu_open");
  });
})();

(function () {
  const slider = new Swiper(".slider", {
    allowSlidePrev: true,
    loop: true,
    rewind: true,
    direction: "horizontal",
    slidesPerView: 4, // количество слайдов, видимых одновременно
    spaceBetween: 170, // расстояние между слайдами
    autoplay: {
      delay: 2000, // время между прокрутками
      disableOnInteraction: true,
    },
  });
})();

(function () {
  const slider = new Swiper(".slider-mobile", {
    allowSlidePrev: true,
    loop: true,
    rewind: true,
    direction: "horizontal",
    slidesPerView: 1, // количество слайдов, видимых одновременно
    spaceBetween: 10, // расстояние между слайдами
    autoplay: {
      delay: 2000, // время между прокрутками
      disableOnInteraction: true,
    },
  });
})();

// Получаем элементы DOM
const basketNumber = document.querySelector('.header__basket-number');
const basketButton = document.querySelectorAll('.button-basket');

// Обработчик нажатия на кнопку "В корзину"
basketButton.forEach(button => {
  button.addEventListener('click', () => {
    // Получаем текущее значение счетчика и увеличиваем на 1
    let currentBasketNumber = parseInt(basketNumber.textContent);
    currentBasketNumber++;
    // Обновляем значение счетчика в корзине
    basketNumber.textContent = currentBasketNumber;
  });
});

// Обнуляем значение счетчика в корзине при обновлении страницы
window.addEventListener('load', () => {
  basketNumber.textContent = 0;
});