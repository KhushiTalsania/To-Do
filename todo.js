var element = document.getElementById("screen").value;

// it creates a new task
function create() {
  let tasktitle = document.getElementById("taskTitle").value;
  let taskdesc = document.getElementById("taskDesc").value;

  localStorage.setItem(tasktitle, taskdesc);

  let row =
    "<tr>" +
    '<td class="task">' +
    tasktitle +
    '<td class="taskdesc">' +
    taskdesc +
    "</td>" +
    '<td><button class="update" onclick="updateNode()"}>Update Task</button></td>' +
    '</td><td><button class="close" onclick="deleteNode()"}>Delete Task</button></td>' +
    "</tr>";
  document.getElementById("screen").innerHTML += row;
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDesc").value = "";
}

// Delete task
function deleteNode() {
  var tasks = document.querySelectorAll(".close");
  for (var i = 0; i < tasks.length; i++) {
    tasks[i].onclick = function () {
      this.parentNode.parentNode.remove();

      var tr = this.parentNode.parentNode;
      localStorage.removeItem(tr.children.item(0).innerText);

    };
  }
}

// Update Task Description
function updateNode() {
  let updates = document.querySelectorAll(".update");
  for (var i = 0; i < updates.length; i++) {
    updates[i].onclick = function () {
      let updatedvalue = prompt("Enter Updated Description");

      var tr = this.parentNode.parentNode;
      tr.children.item(1).innerText = updatedvalue;

      localStorage.setItem(tr.children.item(0).innerText, updatedvalue);

    };
  }
}

// Get data from localStorage
function allStorage() {
  var keys = Object.keys(localStorage);
  for (i = 0; i < keys.length; i++) {
    let row =
      "<tr>" +
      '<td class="task">' +
      keys[i] +
      '<td class="taskdesc">' +
      localStorage.getItem(keys[i]) +
      "</td>" +
      '<td><button class="update" onclick="updateNode()"}>Update Task</button></td>' +
      '</td><td><button class="close" onclick="deleteNode()"}>Delete Task</button></td>' +
      "</tr>";
    document.getElementById("screen").innerHTML += row;
  }
}

allStorage();