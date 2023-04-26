let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let count = 0;
let addition = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
  let total = +count + 1;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  addition += count;
  totalEl.textContent = addition;
  countEl.textContent = 0;
  count = 0;
}

function doOnOrientationChange() {
  switch (window.orientation) {
    case -90:
    case 90:
      alert("landscape");
      break;
    default:
      alert("portrait");
      break;
  }
}

window.addEventListener("orientationchange", doOnOrientationChange);

// Initial execution if needed
doOnOrientationChange();
