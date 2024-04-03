const btn = document.querySelectorAll(".btn");
let birinchibtn = null;

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (birinchibtn) {
      if (birinchibtn !== btn && birinchibtn.textContent === btn.textContent) {
        btn.style.background = "red";
      } else {
        birinchibtn.style.background = "green";
      }
      birinchibtn = null;
    } else {
      btn.style.background = "red";
      birinchibtn = btn;
    }
  });
});

function changeColor(clickedButton) {
  var buttons = document.querySelectorAll(".button"); // Barcha tugmalarni tanlaymiz

  // Har bir tugmani bir hil rang qilamiz
  buttons.forEach(function (button) {
    button.style.backgroundColor = "red";
  });
}
