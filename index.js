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
  let dd = document.querySelector("#save-btn");
  switch (window.orientation) {
    case -90:
    case 90:
      dd.classList.add("save-btn1");

      break;
    default:
      dd.classList.remove("save-btn1");

      break;
  }
}

window.addEventListener("orientationchange", doOnOrientationChange);

// Initial execution if needed
doOnOrientationChange();


const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);
