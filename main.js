const container = document.getElementById('cardContainer');
const cards = container.children;
let start = 0;
const visibleCount = 3;

function updateCards() {
   for (let i = 0; i<cards.length; i++) {
      cards[i].style.display = (i>=start && i<start + visibleCount) ? 'inline-block' : 'none'
   }
}

function showNext() {
  if (start + visibleCount < cards.length) {
    start++;
    updateCards();
  }
}

function showPrev() {
  if (start > 0) {
    start--;
    updateCards();
  }
}

updateCards();
