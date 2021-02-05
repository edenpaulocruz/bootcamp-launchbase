const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener("click", function() {
    modal.classList.add('modal--active');
  })
}

document.querySelector('.modal__close-icon').
  addEventListener("click", function() {
    modal.classList.remove('modal--active');
    modal.classList.remove('modal--max');
  })

document.querySelector('.modal__max-icon').
  addEventListener("click", function() {
    modal.classList.add('modal--max');
  })

document.querySelector('.modal__min-icon').
  addEventListener("click", function() {
    modal.classList.remove('modal--max');
  })