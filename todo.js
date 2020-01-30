const todoContainer = document.querySelector(".todoContainer"),
  todoForm = todoContainer.querySelector(".js-todoForm"),
  todoInput = todoContainer.querySelector("input"),
  todoList = todoContainer.querySelector(".js-todoList");

let array = [];

function saveTodo() {
  localStorage.setItem("TODO", JSON.stringify(array));
}

function paintTodo(obj) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  li.innerText = obj.text;
  li.id = obj.id;
  button.innerText = "X";
  li.appendChild(button);
  todoList.appendChild(li);
  array.push(obj);
  saveTodo();
}

function makeObj(text) {
  const obj = {
    id: String(Date.now()),
    text: text
  };
  return obj;
}
// 사실 지금도 위의 makeObj 함수를 완전히 이해하고 만든것이 아니다.
// 내 생각으로는 오브젝트 를 만들어서 인스턴스에 정의하기 위한 용도랄까 뭐 그렇다...

function handleSubmit(e) {
  e.preventDefault();
  const value = makeObj(todoInput.value);
  paintTodo(value);
  todoInput.value = "";
}

function getTodo() {
  todoForm.addEventListener("submit", handleSubmit);
}

function loadTodo() {
  const parseTodo = JSON.parse(localStorage.getItem("TODO"));
  if (parseTodo !== null) {
    parseTodo.forEach(todo => {
      paintTodo(todo);
    });
  }
}
function init() {
  loadTodo();
  getTodo();
}

init();
