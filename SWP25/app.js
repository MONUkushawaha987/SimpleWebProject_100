const copyText = document.querySelector("textarea[name=copyTxt");
const finalText = document.querySelector("textarea[name=finalTxt");
const moveBtn = document.querySelector(".moverBtn");
const copyBtn = document.querySelector(".copyBtn");
const output = document.querySelector(".output");

copyBtn.addEventListener("click", () => {
  let temp = copyText.value;
  copyToClipBoard(temp);
});
moveBtn.addEventListener("click", () => {
  let temp = copyText.value;
  finalText.value = temp;
});