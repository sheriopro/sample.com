// script.js
const girlfriendNameInput = document.getElementById("girlfriend-name");
const getFortuneButton = document.getElementById("get-fortune");
const fortuneMessageElement = document.getElementById("fortune-message");

getFortuneButton.addEventListener("click", () => {
  const girlfriendName = girlfriendNameInput.value.trim();
  if (girlfriendName !== "") {
    const fortune = getFortune(girlfriendName);
    fortuneMessageElement.textContent = fortune;
  } else {
    fortuneMessageElement.textContent = "Please enter your name!";
  }
});

function getFortune(girlfriendName) {
  const fortunes = [
    ` Sheri wants to Marry you!`,
    `Sheri Loves u alot!`,
    `For your information,Sheri will be making u pregnant!`,
    `Sheri wanna spend his whole life with you !`,
  ];
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return ` ${girlfriendName}! ${fortunes[randomIndex]}`;
}