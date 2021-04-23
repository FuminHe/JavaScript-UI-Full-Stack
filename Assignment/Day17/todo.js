// create new to do block
function createNewBlock() {
  let mainContainer = document.getElementById("main-container");

  let todolist = document.createElement("div");
  todolist.className = "toDoList";

  let date = document.createElement("p");
  date.className = "date";
  date.innerHTML = "Date: ";

  let dateTxt = document.createElement("input");
  dateTxt.className = "input-box";
  dateTxt.value = getTime();

  let todobox = document.createElement("div");
  todobox.className = "toDo-box flex";
  todobox.id = "todo-" + Date.now();

  let p_todo = document.createElement("p");
  p_todo.innerHTML =
    'To Do List<i class="fas fa-plus-square plus-icon" onclick="createNewLine(\'' +
    todobox.id +
    "');\"></i>";

  let todoline = document.createElement("div");
  todoline.className = "todo-line";
  todoline.id = "todo-line-" + Date.now();

  let check = document.createElement("input");
  check.type = "checkbox";
  check.name = "checkbox";
  check.className = "todo-input-check";
  check.onchange = isChecked;

  let inputtxt = document.createElement("input");
  inputtxt.type = "text";
  inputtxt.className = "input-box todo-input-text";

  let removeicon = document.createElement("div");
  removeicon.className = "remove-icon";
  removeicon.innerHTML =
    '<i class="fas fa-times fa-2x"onclick="removeLine(\'' +
    todoline.id +
    "');\"></i>";

  let completebox = document.createElement("div");
  completebox.className = "complete-box flex";
  completebox.innerHTML = "<p>Completed</p>";
  completebox.id = "complete-" + Date.now();

  todobox.appendChild(p_todo);
  todobox.appendChild(todoline);

  date.appendChild(dateTxt);

  todoline.appendChild(check);
  todoline.appendChild(inputtxt);
  todoline.appendChild(removeicon);

  todolist.appendChild(date);
  todolist.appendChild(todobox);
  todolist.appendChild(completebox);

  //   mainContainer.prepend(todolist);
  mainContainer.insertBefore(todolist, mainContainer.firstChild);
}

// create new to do line
function createNewLine(div_id) {
  let todobox = document.getElementById(div_id);

  let todoline = document.createElement("div");
  todoline.className = "todo-line";
  todoline.id = "todo-line-" + Date.now();

  let check = document.createElement("input");
  check.type = "checkbox";
  check.name = "checkbox";
  check.className = "todo-input-check";
  check.onchange = isChecked;

  let inputtxt = document.createElement("input");
  inputtxt.type = "text";
  inputtxt.className = "input-box todo-input-text";

  let removeicon = document.createElement("div");
  removeicon.className = "remove-icon";
  removeicon.innerHTML =
    '<i class="fas fa-times fa-2x"onclick="removeLine(\'' +
    todoline.id +
    "');\"></i>";

  todoline.appendChild(check);
  todoline.appendChild(inputtxt);
  todoline.appendChild(removeicon);

  todobox.appendChild(todoline);
}

function removeLine(div_id) {
  let item = document.getElementById(div_id);
  item.parentNode.removeChild(item);
}

function isChecked() {
  //   console.log(this.checked);
  if (this.checked) {
    this.parentNode.children[1].className = "input-box complete-input-text";

    // move to complete
    this.parentNode.parentNode.parentNode.children[2].appendChild(
      this.parentNode
    );
  } else {
    this.parentNode.children[1].className = "input-box todo-input-text";

    // move to todo
    this.parentNode.parentNode.parentNode.children[1].appendChild(
      this.parentNode
    );
  }

  //   console.log(this.parentNode.parentNode.parentNode.children[2]);
}

function getTime() {
  const now = new Date();

  const result =
    ("0" + (now.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + now.getDate()).slice(-2) +
    "/" +
    now.getFullYear() +
    " " +
    ("0" + now.getHours()).slice(-2) +
    ":" +
    ("0" + now.getMinutes()).slice(-2) +
    ":" +
    ("0" + now.getSeconds()).slice(-2);

  return result;
}

function initializeHTML() {
  let mainContainer = document.getElementById("main-container");
  if (mainContainer.children.length === 0) {
    createNewBlock();
  }
}
