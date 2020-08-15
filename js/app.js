var NumberOne = document.querySelector("#number-one");
var NumberTwo = document.querySelector("#number-two");
var ResultNumber = document.querySelector("#result");
var OpratorSelect = document.querySelector("#oprator");
var ComputingBtn = document.querySelector(".computing__btn");
var ClearResultBtn = document.querySelector(".clear__result__btn");
var body = document.body;
function Computing() {
  if (
    NumberOne.value === "" ||
    NumberTwo.value === "" ||
    Number.isNaN(Number(NumberOne.value)) ||
    Number.isNaN(Number(NumberTwo.value)) ||
    OpratorSelect.value === "default"
  ) {
    alert("لطفا مقادیر را به درستی وارد کنید!");
    ClearResults();
  } else {
    if (OpratorSelect.value === "+") {
      ResultNumber.textContent =
        Number(NumberOne.value) + Number(NumberTwo.value);
    } else if (OpratorSelect.value === "-") {
      ResultNumber.textContent =
        Number(NumberOne.value) - Number(NumberTwo.value);
    } else if (OpratorSelect.value === "*") {
      ResultNumber.textContent =
        Number(NumberOne.value) * Number(NumberTwo.value);
    } else if (OpratorSelect.value === "/") {
      ResultNumber.textContent =
        Number(NumberOne.value) / Number(NumberTwo.value);
    }
  }
}

function ClearResults() {
  NumberOne.value = "";
  NumberTwo.value = "";
  ResultNumber.textContent = "0";
  OpratorSelect.value = "default";
}

function ToggleWindowTheme() {
  if (body.classList.contains("light")) {
    body.classList = "";
    body.classList.add("dark");
  } else {
    body.classList = "";
    body.classList.add("light");
  }
}

function DetectUserThemeColor() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList = "";
    body.classList.add("dark");
  } else {
    body.classList = "";
    body.classList.add("light");
  }
}