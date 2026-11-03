const newGameButton = document.getElementById("new-game");
const continueButton = document.getElementById("continue-game");
const settingsButton = document.getElementById("settings");

newGameButton.addEventListener("click", () => {
    alert("Начинаем новую смену...");
});

continueButton.addEventListener("click", () => {
    alert("Сохранение пока отсутствует.");
});

settingsButton.addEventListener("click", () => {
    alert("Настройки появятся позже.");
});