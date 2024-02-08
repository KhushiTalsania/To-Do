const fs = require("fs");
const prompt = require("prompt-sync")({ sigint: true });

// Update Description of Task
function updateDesc() {
  var taskName = prompt("Enter Task Name : ");
  var desc = prompt("Enter Description : ");
  try {
    fs.appendFileSync(`Task/${taskName}.txt`, "\n" + desc, function (err) {
      if (err) {
        throw err;
      }
    });
    console.log("\nDescription added successfully.");
  } catch (err) {
    console.log("\nPlease enter valid Data !!!");
  }
}

// Delete Task
function deleteTask() {
  var taskName = prompt("Enter Task Name : ");
  try {
    fs.unlinkSync(`Task/${taskName}.txt`, function (err) {
      if (err) {
        throw err;
      }
    });
    console.log("\nTask deleted Successfully.");
  } catch (err) {
    console.log("\nPlease enter valid Data !!!");
  }
}

// Add Task
function addTask() {
  var taskName = prompt("Enter Task Name : ");
  var allTask = fs.readdirSync("/Khushi_Talsania/Practice/To Do/Task");
  let count = 0;
  for (let i = 0; i < allTask.length; i++) {
    if (taskName == allTask[i].slice(0, -4)) {
      count += 1;
    }
  }
  if (count == 0) {
    addDesc(taskName);
  } else {
    console.log("\nTask is already present.");
    let choice = prompt("Do you want to Replace the Description ? (y/n)");
    if (choice == "y") {
      addDesc(taskName);
    } else {
      console.log("\nPlease Enter Valid Taskname !!!");
    }
  }
}

// Add Description
function addDesc(taskName) {
  var desc = prompt("Enter Description : ");
  fs.writeFileSync(`Task/${taskName}.txt`, desc, function (err) {
    if (err) {
      throw err;
    }
  });
  console.log("\nTask Added.");
}

// Read Description
function readDesc() {
  var taskName = prompt("Enter Task Name : ");
  try {
    var text = fs.readFileSync(`Task/${taskName}.txt`, "utf8");
    console.log("\n" + text);
  } catch (err) {
    console.log("\nPlease enter valid Data !!!");
  }
}

// Change Description
function changeDesc() {
  var taskName = prompt("Enter Task Name : ");
  var desc = prompt("Enter Description : ");
  try {
    fs.writeFileSync(`Task/${taskName}.txt`, desc, function (err) {
      if (err) {
        throw err;
      }
    });
    console.log("\nDescription change successfully.");
  } catch (err) {
    console.log("\nPlease enter valid Data !!!");
  }
}

// Update Taskname
function updateTask() {
  var taskName = prompt("Enter Old Task Name : ");
  var newTaskName = prompt("Enter New Task Name : ");
  try {
    fs.renameSync(
      `Task/${taskName}.txt`,
      `Task/${newTaskName}.txt`,
      function (err) {
        if (err) {
          throw err;
        }
      }
    );
    console.log("\nTask Updated.");
  } catch (err) {
    console.log("\nPlease enter valid Data !!!");
  }
}

// Display TaskList
function taskList() {
  var allTask = fs.readdirSync("/Khushi_Talsania/Practice/To Do/Task");
  console.log("\n--> Task List : ");
  for (let i = 0; i < allTask.length; i++) {
    console.log(allTask[i].slice(0, -4));
  }
}

var choice;

taskList();
while (choice != "8") {
  console.log("\n---------- To Do Menu --------------");
  console.log("1. Display all Task");
  console.log("2. Add New Task");
  console.log("3. Read Description");
  console.log("4. Update Description");
  console.log("5. Change Description");
  console.log("6. Update Task");
  console.log("7. Delete Task");
  console.log("8. Exit");
  choice = prompt("Enter your Choice : ");

  switch (choice) {
    case "1":
      taskList();
      break;
    case "2":
      addTask();
      break;
    case "3":
      readDesc();
      break;
    case "4":
      updateDesc();
      break;
    case "5":
      changeDesc();
      break;
    case "6":
      updateTask();
      break;
    case "7":
      deleteTask();
      break;
    case "8":
        console.log("Thank you.");
      break;
    default:
      console.log("Enter Valid Input !!!");
  }
}
