let tasks = [];

function addTask() 
{
  const input = document.getElementById("new-task-input");
  const taskName = input.value.trim();

  if(taskName !== "") 
  {
    tasks.push({ name: taskName, completed: false });
    input.value = "";
    renderTasks();
  }
}

function deleteTask(index) 
{
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) 
{
  const newTaskName = prompt("Enter a new task name:");

  if(newTaskName !== null) 
  {
    tasks[index].name = newTaskName.trim();
    renderTasks();
  }
}

function toggleTaskCompleted(index) 
{
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function renderTasks() 
{
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => 
  {
    const listItem = document.createElement("li");
    listItem.classList.add("task-list-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTaskCompleted(index));

    const taskNameSpan = document.createElement("span");
    taskNameSpan.textContent = task.name;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTask(index));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(index));

    listItem.appendChild(checkbox);
    listItem.appendChild(taskNameSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
  });
}