function createTodolist() {
  let todolist = document.createElement("div");
  todolist.className = "toDoList";

  return todolist;
}

function createDate() {
  let date = document.createElement("p");
  date.className = "date";
  date.innerHTML = "Date: ";

  return date;
}

function createDateTXT() {
  let dateTxt = document.createElement("input");
  dateTxt.className = "input-box";
  dateTxt.onchange = updateDate;

  return dateTxt;
}

function createWindowClose() {
  let close = document.createElement("i");
  // <i class="fas fa-window-close"></i>
  close.className = "fas fa-window-close fa-3x";
  close.onclick = removeBlock;

  return close;
}

function createTodobox() {
  let todobox = document.createElement("div");
  todobox.className = "toDo-box flex";

  return todobox;
}

function createTodotitle() {
  let p_todo = document.createElement("p");
  // p_todo.innerHTML =
  //   'To Do List<i class="fas fa-plus-square plus-icon" onclick="createNewLine(\'' +
  //   todobox.id +
  //   "');\"></i>";
  p_todo.innerHTML =
    'To Do List<i class="fas fa-plus-square plus-icon" onclick="createNewLine(this)"></i>';

  return p_todo;
}

function createTodoLine() {
  let todoline = document.createElement("div");
  todoline.className = "todo-line";

  return todoline;
}

function createCheckBox() {
  let check = document.createElement("input");
  check.type = "checkbox";
  check.name = "checkbox";
  check.className = "todo-input-check";
  check.onchange = isChecked;

  return check;
}

function createInput() {
  let inputtxt = document.createElement("input");
  inputtxt.type = "text";
  inputtxt.className = "input-box todo-input-text";
  inputtxt.onchange = updateInputContent;

  return inputtxt;
}

function createRemoveIcon() {
  let removeicon = document.createElement("div");
  removeicon.className = "remove-icon";
  removeicon.innerHTML =
    '<i class="fas fa-times fa-2x" onclick="removeLine(this)"></i>';

  return removeicon;
}

function createCompleteBox() {
  let completebox = document.createElement("div");
  completebox.className = "complete-box flex";
  completebox.innerHTML = "<p>Completed</p>";

  return completebox;
}
// create new to do block
function createNewBlock() {
  let mainContainer = document.getElementById("main-container");
  const timeStamp = Date.now();

  let todolist = createTodolist();
  todolist.id = "toDoList-" + timeStamp;

  let date = createDate();

  let dateTxt = createDateTXT();
  dateTxt.value = getTime();

  let todobox = createTodobox();

  let p_todo = createTodotitle();

  let todoline = createTodoLine();
  todoline.id = "toDoLine-" + timeStamp;

  let check = createCheckBox();
  let inputtxt = createInput();
  let removeicon = createRemoveIcon();

  let completebox = createCompleteBox();

  todobox.appendChild(p_todo);
  todobox.appendChild(todoline);

  date.appendChild(dateTxt);
  date.appendChild(createWindowClose());

  todoline.appendChild(check);
  todoline.appendChild(inputtxt);
  todoline.appendChild(removeicon);

  todolist.appendChild(date);
  todolist.appendChild(todobox);
  todolist.appendChild(completebox);

  mainContainer.insertBefore(todolist, mainContainer.firstChild);

  // add local storage
  let toDoLists = {
    time: dateTxt.value,
  };
  toDoLists[todoline.id] = {
    content: "",
    isComplete: false,
  };
  localStorage.setItem(todolist.id, JSON.stringify(toDoLists));
}

// create new to do line
function createNewLine(clickItem) {
  let todobox = clickItem.parentNode.parentNode;

  let todoline = createTodoLine();
  todoline.id = "toDoLine-" + Date.now();

  let check = createCheckBox();
  let inputtxt = createInput();
  let removeicon = createRemoveIcon();

  todoline.appendChild(check);
  todoline.appendChild(inputtxt);
  todoline.appendChild(removeicon);

  todobox.appendChild(todoline);

  // add to local storage
  const storageKey = todobox.parentNode.id;
  let obj = JSON.parse(localStorage.getItem(storageKey));
  obj[todoline.id] = {
    content: "",
    isComplete: false,
  };
  localStorage.setItem(storageKey, JSON.stringify(obj));
}

function removeLine(clickItem) {
  const blockId = clickItem.parentNode.parentNode.parentNode.parentNode.id;
  const lineId = clickItem.parentNode.parentNode.id;
  let obj = JSON.parse(localStorage.getItem(blockId));
  delete obj[lineId];
  localStorage.setItem(blockId, JSON.stringify(obj));

  let item = clickItem.parentNode.parentNode;
  item.parentNode.removeChild(item);
}

function isChecked() {
  const blockId = this.parentNode.parentNode.parentNode.id;
  const lineId = this.parentNode.id;
  let obj = JSON.parse(localStorage.getItem(blockId));
  obj[lineId].isComplete = this.checked;
  localStorage.setItem(blockId, JSON.stringify(obj));

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

function showBlock(key, todoes) {
  const todolines = Object.keys(todoes);
  let mainContainer = document.getElementById("main-container");

  let todolist = createTodolist();
  todolist.id = key;

  let date = createDate();
  let dateTxt = createDateTXT();
  dateTxt.value = todoes["time"];
  date.appendChild(dateTxt);
  date.appendChild(createWindowClose());

  let todobox = createTodobox();
  let p_todo = createTodotitle();
  todobox.appendChild(p_todo);

  let completebox = createCompleteBox();

  for (let i = 1; i < todolines.length; i++) {
    let todoline = createTodoLine();
    todoline.id = todolines[i];

    let check = createCheckBox();
    let inputtxt = createInput();
    inputtxt.value = todoes[todolines[i]].content;
    let removeicon = createRemoveIcon();

    if (todoes[todolines[i]].isComplete) {
      // complete item
      check.checked = true;
      inputtxt.className = "input-box complete-input-text";

      todoline.appendChild(check);
      todoline.appendChild(inputtxt);
      todoline.appendChild(removeicon);

      completebox.appendChild(todoline);
    } else {
      // undo list
      check.checked = false;
      inputtxt.className = "input-box todo-input-text";

      todoline.appendChild(check);
      todoline.appendChild(inputtxt);
      todoline.appendChild(removeicon);

      todobox.appendChild(todoline);
    }
  }

  todolist.appendChild(date);
  todolist.appendChild(todobox);
  todolist.appendChild(completebox);

  mainContainer.insertBefore(todolist, mainContainer.firstChild);
}

function updateInputContent() {
  const blockId = this.parentNode.parentNode.parentNode.id;
  const lineId = this.parentNode.id;

  let obj = JSON.parse(localStorage.getItem(blockId));

  obj[lineId].content = this.value;

  localStorage.setItem(blockId, JSON.stringify(obj));
}

function updateDate() {
  const blockId = this.parentNode.parentNode.id;
  let obj = JSON.parse(localStorage.getItem(blockId));
  obj["time"] = this.value;
  localStorage.setItem(blockId, JSON.stringify(obj));
}

function removeBlock() {
  const blockId = this.parentNode.parentNode.id;
  localStorage.removeItem(blockId);

  let block = document.getElementById(blockId);
  block.remove();
}

function initializeHTML() {
  let toDoArrays = Object.keys(localStorage)
    .filter((keyName) => keyName.slice(0, 9) === "toDoList-")
    .sort();

  if (toDoArrays.length === 0) {
    createNewBlock();
  } else {
    toDoArrays.forEach((item) => {
      showBlock(item, JSON.parse(localStorage.getItem(item)));
    });
    // for (let i = toDoArrays.length - 1; i >= 0; i--) {
    //   showBlock(toDoArrays[i], JSON.parse(localStorage.getItem(toDoArrays[i])));
    // }
  }
}
