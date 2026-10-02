const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;
  
  span.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.classList.add('delete-btn');
  
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});