"USE STRICT";
const colorField = document.querySelector(".color--field");
const generateBtn = document.querySelector(".generate--btn");
const copyBtn = document.querySelector(".copy--btn");
const copied = document.querySelector(".copied");

const generateColor = function () {
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += Math.trunc(Math.random() * 10);
  }
  colorField.value = `#${color}`;

  document.body.style.backgroundColor = `#${color}`;
};
const copy = function () {
  colorField.select();
  document.execCommand("copy");
  copied.style.opacity = 1;
  copied.style.left = "120%";
  setTimeout(() => {
    copied.style.opacity = 0;
    copied.style.left = "99%";
  }, 2000);
};
generateBtn.addEventListener("click", generateColor);
copyBtn.addEventListener("click", copy);
