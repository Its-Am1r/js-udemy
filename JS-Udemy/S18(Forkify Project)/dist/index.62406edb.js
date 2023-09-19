const recipeContainer = document.querySelector('.recipe');
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 1,
  }
);
const lastCardObserver = new IntersectionObserver(
  (entries) => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return;
    loadNewCard();
    lastCardObserver.unobserve(lastCard.target);
    lastCard.observe(document.querySelector('.card:last-child'));
  },
  {
    rootMargin: '100px',
  }
);
lastCardObserver.observe(document.querySelector('.card:last-child'));
cards.forEach((card) => {
  observer.observe(card);
});
const cardContainer = document.querySelector('.card-container');
function loadNewCard() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement('div');
    card.textContent = 'New Card';
    card.classList.add('card');
    observer.observe(card);
    cardContainer.append(card);
  }
}

//# sourceMappingURL=index.62406edb.js.map
