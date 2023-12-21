const ratingForm = document.querySelector('.card-rating');
const ratingsBtn = document.querySelectorAll('.card-rating_btn');
const ratingText = document.querySelector('.card_thanks-rating');
const thanksCard = document.querySelector('.card__thanks');

let rating = null;
let currentRatingBtn = null;

ratingsBtn.forEach(ratingBtn => {
  ratingBtn.addEventListener('click', () => {
    if (currentRatingBtn === ratingBtn) {
      rating = null;
      currentRatingBtn.style.backgroundColor = '';
      currentRatingBtn.style.color = '';
      currentRatingBtn = null;
      return;
    }

    if (currentRatingBtn) {
      currentRatingBtn.style.backgroundColor = '';
      currentRatingBtn.style.color = '';
    }

    currentRatingBtn = ratingBtn;
    rating = ratingBtn.innerText;
    ratingBtn.style.backgroundColor = 'hsl(217, 12%, 63%)';
    ratingBtn.style.color = '#f8f8f8';
  });
});

ratingForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!rating) {
    return;
  }
  ratingForm.style.display = 'none';
  thanksCard.style.display = 'block';
  ratingText.textContent = `You selected ${rating} out of 5`;
});
