// Day 3: Save & Load tasks with Local Storage

// Add task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");
  const li = createTaskElement(taskText);

  taskList.appendChild(li);
  saveTasks();

  taskInput.value = ""; // clear input
}

// Create a task <li> with buttons
function createTaskElement(taskText, isCompleted = false) {
  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;
  if (isCompleted) span.classList.add("completed");

  // ❌ Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  // ✅ Complete button
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "&#10003;";
  completeBtn.classList.add("complete-btn");
  completeBtn.title = "Mark as complete";
  if (isCompleted) completeBtn.classList.add("completed");
  completeBtn.addEventListener("click", () => {
    span.classList.toggle("completed");
    completeBtn.classList.toggle("completed");
    saveTasks();
  });

  // Append in order
  li.appendChild(completeBtn);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

// Save tasks to localStorage
function saveTasks() {
  const taskList = document.getElementById("taskList");
  const tasks = [];

  taskList.querySelectorAll("li").forEach(li => {
    const text = li.querySelector("span").textContent;
    const completed = li.querySelector("span").classList.contains("completed");
    tasks.push({ text, completed });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");

  storedTasks.forEach(task => {
    const li = createTaskElement(task.text, task.completed);
    taskList.appendChild(li);
  });
}

// Run when page loads
window.onload = loadTasks;
