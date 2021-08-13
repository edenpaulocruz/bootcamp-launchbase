const cards = document.querySelectorAll('.card');

for (let card of cards) {
  const programId = card.id;
  card.addEventListener("click", () => {
    window.location.href = `/programs/${programId}`;
  })
}