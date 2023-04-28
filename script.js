const Text = document.getElementById("evaluatedText");
const letter = document.getElementById("letterCount");
Text.addEventListener("input", () => {
  letter.textContent = Text.value.length;
});