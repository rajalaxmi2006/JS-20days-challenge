const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");
const clearAllBtn = document.getElementById("clearAllBtn");
let totalTasks = 0;

// Add Task

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("task-buttons");

  // Complete Button

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.classList.add("complete-btn");
  completeBtn.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });

  // Delete Button

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
    totalTasks--;
    updateTaskCount();
    checkEmptyState();
  });

  buttonContainer.appendChild(completeBtn);
  buttonContainer.appendChild(deleteBtn);
  li.appendChild(taskSpan);
  li.appendChild(buttonContainer);
  taskList.appendChild(li);
  totalTasks++;
  updateTaskCount();
  checkEmptyState();
  taskInput.value = "";
}

// Update Counter

function updateTaskCount() {
  taskCount.textContent = totalTasks;
}

// Empty State

function checkEmptyState() {
  if (totalTasks === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}

// Clear All

function clearAllTasks() {
  taskList.innerHTML = "";
  totalTasks = 0;
  updateTaskCount();
  checkEmptyState();
}

// Events

addBtn.addEventListener("click", addTask);
clearAllBtn.addEventListener("click", clearAllTasks);
checkEmptyState();
