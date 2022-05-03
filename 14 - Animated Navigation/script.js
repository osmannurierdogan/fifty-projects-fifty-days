const navElement = document.querySelector("#nav");
const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => navElement.classList.toggle("active"));
