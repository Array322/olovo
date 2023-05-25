
(function () {
  const button = document.querySelector("[data-popup]");
  const popup = document.querySelector(".popup");
  const content = popup.querySelector(".popup__content");
  const overlay = popup.querySelector(".popup__overlay");
  const close = popup.querySelector(".popup__close");

  function openPopup(e) {
    e.preventDefault();
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input");
    let isFilled = true;
    inputs.forEach((input) => {
      if (input.value === "" && input.id !== "optionalField") {
        // проверяем заполненность всех полей, кроме поля с id "optionalField"
        isFilled = false;
      }
    });

    if (isFilled) {
      const popupId = e.target.dataset.popup;
      const currentPopup = document.querySelector(`#${popupId}`);
      content.innerHTML = currentPopup.innerHTML;
      popup.classList.add("popup_open");
    } else {
      alert("Пожалуйста, заполните все поля формы");
    }
  }

  function closePopup() {
    content.innerHTML = "";
    popup.classList.remove("popup_open");
  }

  button.addEventListener("click", openPopup);
  overlay.addEventListener("click", closePopup);
  close.addEventListener("click", closePopup);
})();
