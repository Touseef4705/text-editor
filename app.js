document.addEventListener("DOMContentLoaded", () => {
  const editText = document.getElementById("editText");
  const normal = document.getElementById("normal");
  const bold = document.getElementById("bold");
  const italic = document.getElementById("italic");
  const underline = document.getElementById("underline");
  const inputColor = document.getElementById("inputColor");
  const noInput = document.getElementById("noInput");

  normal.addEventListener("click", () => {
      editText.style.fontWeight = "normal";
      editText.style.fontStyle = "normal";
      editText.style.textDecoration = "none";
      editText.style.color = "black"
  });

  bold.addEventListener("click", () => {
      editText.style.fontWeight = editText.style.fontWeight === "bold" ? "normal" : "bold";
  });

  italic.addEventListener("click", () => {
      editText.style.fontStyle = editText.style.fontStyle === "italic" ? "normal" : "italic";
  });

  underline.addEventListener("click", () => {
      editText.style.textDecoration = editText.style.textDecoration === "underline" ? "none" : "underline";
  });

  inputColor.addEventListener("input", () => {
      editText.style.color = inputColor.value;
  });

  noInput.addEventListener("input", () => {
      const fontSize = noInput.value;
      if (fontSize > 0) {
          editText.style.fontSize = `${fontSize}px`;
      }
  });
});
