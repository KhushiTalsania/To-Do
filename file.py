import os

# Update Description
def updateDesc():
  taskName = input("Enter Task Name : ")
  desc = input("Enter Description : ")
  allTask = os.listdir("/Khushi_Talsania/Practice/To Do/Task")
  for i in range(len(allTask)):
    if taskName == allTask[i][0: -4]:
      with open('Task/'+taskName+'.txt', 'a') as file:
        file.write("\n" + desc)
      print("\nDescription added successfully.")
      break
  else:
    print("\nPlease enter valid Data !!!")

# Delete Task
def deleteTask():
  taskName = input("Enter Task Name : ")
  try:
    os.remove('Task/'+taskName+'.txt')
    print("\nTask deleted Successfully.")
  except:
    print("\nPlease enter valid Data !!!")

# Add Task
def addTask():
  taskName = input("Enter Task Name : ")
  allTask = os.listdir("/Khushi_Talsania/Practice/To Do/Task")
  count = 0
  for i in range(len(allTask)):
    if taskName == allTask[i][0: -4]:
      count += 1
  if (count == 0):
    addDesc(taskName)
  else:
    print("\nTask is already present.")
    choice = input("Do you want to Replace the Description ? (y/n)")
    if (choice == "y"):
      addDesc(taskName)
    else:
      print("\nPlease Enter Valid Taskname !!!")

# Add Description
def addDesc(taskName):
  desc = input("Enter Description : ")
  with open('Task/'+ taskName +'.txt', 'w') as file:
    file.write(desc)
  print("\nTask Added.")

# Read Description
def readDesc():
  taskName = input("Enter Task Name : ")
  try:
    with open('Task/' + taskName + '.txt', 'r') as file:
      print(file.read())
  except:
    print("\nPlease enter valid Data !!!")

# Change Description
def changeDesc():
  taskName = input("Enter Task Name : ")
  desc = input("Enter Description : ")
  allTask = os.listdir("/Khushi_Talsania/Practice/To Do/Task")
  for i in range(len(allTask)):
    if taskName == allTask[i][0: -4]:
      with open('Task/' + taskName + '.txt', 'w') as file:
        file.write(desc)
      print("\nDescription change successfully.")
      break
  else:
    print("\nPlease enter valid Data !!!")

# Update Taskname
def updateTask():
  taskName = input("Enter Old Task Name : ")
  newTaskName = input("Enter New Task Name : ")
  try:
    os.rename('Task/' + taskName + '.txt', 'Task/' + newTaskName + '.txt')
    print("\nTask Updated.")
  except:
    print("\nPlease enter valid Data !!!")

# Display TaskList
def taskList():
  allTask = os.listdir("/Khushi_Talsania/Practice/To Do/Task")
  print("\n--> Task List : ")
  for i in range(len(allTask)):
    print(allTask[i][0:-4])


taskList()

choice = ''

while (choice != "8"):
  print("\n---------- To Do Menu --------------")
  print("1. Display all Task")
  print("2. Add New Task")
  print("3. Read Description")
  print("4. Update Description")
  print("5. Change Description")
  print("6. Update Task")
  print("7. Delete Task")
  print("8. Exit")
  choice = input("Enter your Choice : ")

  match choice:
    case "1":
      taskList()
    case "2":
      addTask()
    case "3":
      readDesc()
    case "4":
      updateDesc()
    case "5":
      changeDesc()
    case "6":
      updateTask()
    case "7":
      deleteTask()
    case "8":
      print("Thank you.")
      break
    case default:
      print("Enter Valid Input !!!")
