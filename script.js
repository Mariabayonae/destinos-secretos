const postcards = document.querySelectorAll(".postcard");
postcards.forEach(card => {
card.addEventListener("click", () => {
card.classList.toggle("flipped");
  });
});