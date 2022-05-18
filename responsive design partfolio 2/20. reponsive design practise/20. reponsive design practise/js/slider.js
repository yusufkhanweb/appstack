$(".testmotional__slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

let inputWrappers = document.querySelectorAll(".contact__form>p");
inputWrappers.forEach((inputWrapper) => {
  let input = inputWrapper.querySelector("input");
  input.addEventListener("focus", () => {
    inputWrapper.classList.add("contact__form--focused");
  });
  input.addEventListener("blur", () => {
    inputWrapper.classList.remove("contact__form--focused");
  });
});
