function addTask() {
  const taskInput = document.getElementById('task');
  const deadlineInput = document.getElementById('deadline');
  const todoList = document.getElementById('todo-list');

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `${taskInput.value} - Deadline: ${deadlineInput.value}
  <button class="complete-btn" onclick="completeTask(this)">Complete</button>
  <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
  todoList.appendChild(taskItem);

  taskInput.value = '';
  deadlineInput.value = '';
}

function completeTask(taskElement) {
  // Toggle completion status
  taskElement.parentNode.classList.toggle('completed');
}

function deleteTask(taskElement) {
  // Remove the task item
  taskElement.parentNode.remove();
}
