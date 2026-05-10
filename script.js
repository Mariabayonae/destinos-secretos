const postcards = document.querySelectorAll(".postcard");
postcards.forEach(postcard => {
postcard.addEventListener("click", () => {
postcard.classList.toggle("flipped");
  });
});