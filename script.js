const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see youuuuuu!";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGYzcno5OWExMXBsOGYxaDZhNHBiY3ltbWQ2aHJvcmQ3enptMnRvaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/oVouQovpspyNqO3mhW/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});