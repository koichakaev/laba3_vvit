const btn = document.querySelector(".portfolio__btn");
const table = document.querySelector(".table");

btn.addEventListener("click", () => {
  table.classList.toggle("tableActive");

  console.log("работает");
});
