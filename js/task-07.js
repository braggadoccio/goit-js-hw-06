const textInput = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

textInput.addEventListener("input", sizeText);
spanText.style.fontSize = textInput.value + "px";
function sizeText(event) {
  spanText.style.fontSize = event.currentTarget.value + "px";
}
