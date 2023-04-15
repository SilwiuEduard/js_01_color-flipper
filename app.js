const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "pink"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colors.length);
  const backgroundColor = document.querySelector("body");
  backgroundColor.style.backgroundColor = colors[randomNumber];
  color.innerHTML = colors[randomNumber];
});
