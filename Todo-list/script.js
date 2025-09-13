// Day 2: Add mark complete & delete functionality

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // ❌ Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // ✅ Checkmark button
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "&#10003;"; // Unicode checkmark
  completeBtn.classList.add("complete-btn");
  completeBtn.title = "Mark as complete";
  completeBtn.addEventListener("click", () => {
    span.classList.toggle("completed");       // toggle text style
    completeBtn.classList.toggle("completed"); // toggle button style
  });

  // Append in order
  li.appendChild(completeBtn);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = ""; // clear input
}
