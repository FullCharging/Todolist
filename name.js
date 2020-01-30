const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetingBox = document.querySelector(".greetingBox"),
  greeting = document.querySelector(".greeting-name");

function saveName(text) {
  localStorage.setItem("User", text);
}

function paintGreeting(text) {
  greetingBox.classList.add("showing");
  greeting.innerText = text;
  saveName(text);
}

function handleSubmit(e) {
  const value = input.value;
  e.preventDefault();
  if (value) {
    form.classList.remove("showing");
    paintGreeting(value);
    input.value = "";
  } else {
    alert("write your name!");
  }
}

function getName() {
  form.classList.add("showing");
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem("User");
  if (currentUser) {
    paintGreeting(currentUser);
  } else {
    getName();
  }
}

function init() {
  loadName();
}

init();
