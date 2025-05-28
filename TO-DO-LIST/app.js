function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value;

  if (task === "") {
    alert("Error! Please enter a item in list...");
    return;
  }

  var li = document.createElement("li");
  var span = document.createElement("span");
  span.innerText = task;
  li.appendChild(span);

  var completeBtn = document.createElement("button");
  completeBtn.innerText = "✔";
  completeBtn.onclick = function () {
    li.classList.toggle("completed");
  };
  li.appendChild(completeBtn);

  var editBtn = document.createElement("button");
  editBtn.innerText = "✎";
  editBtn.onclick = function () {
    var newTask = prompt("Edit your task:", span.innerText);
    if (newTask !== null && newTask !== "") {
      span.innerText = newTask;
    }
  };
  li.appendChild(editBtn);

  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🗑";
  deleteBtn.onclick = function () {
    li.remove();
  };
  li.appendChild(deleteBtn);

  var taskList = document.getElementById("taskList");
  taskList.appendChild(li);
  input.value = "";
}