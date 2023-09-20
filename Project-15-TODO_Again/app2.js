const todoList = document.querySelector('#todoList'),
  addText = document.querySelector('#addText'),
  addBtn = document.querySelector('.addBtn'),
  mainContainer = document.querySelector('main');

// Function to format the date as DD/MM/YY
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
}

// Update the date element in the header
function updateDate() {
  const dateElement = document.getElementById('date');
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  dateElement.textContent = formattedDate;
}

// Load tasks from local storage
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach((task) => {
    createTask(task.text, task.completed);
  });
}

// Save tasks to local storage
function saveTasks() {
  const tasks = Array.from(document.querySelectorAll('.todoList .list')).map(
    (task) => ({
      text: task.textContent,
      completed: task.style.textDecoration === 'line-through',
    })
  );
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Create a new task element
function createTask(taskText, completed = false) {
  const newTaskHTML = `<div class="todoList">
    <p class="list"><button class="circle" ${
      completed ? 'style="background: #0C356A;"' : ''
    }></button> ${taskText} <button class="dlt"><i class="fa-solid fa-x fa-beat-fade"></i></button></p></div>`;
  mainContainer.innerHTML += newTaskHTML;
}

// Call the updateDate function to display the initial date
updateDate();

// Load tasks from local storage when the page loads
loadTasks();

// Add a click event listener to the main container to handle X icon clicks (event delegation)
mainContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('dlt')) {
    // Get the parent <div> and remove it from the todoList
    const taskContainer = e.target.closest('.todoList');
    if (taskContainer) {
      taskContainer.remove();

      // Save tasks to local storage after removing a task
      saveTasks();
    }
  }
});

addBtn.addEventListener('click', () => {
  // Get the text entered into the input field
  const taskText = addText.value;

  if (taskText.trim() !== '') {
    // Create a new task element
    createTask(taskText);

    // Save tasks to local storage
    saveTasks();

    // Clear the input field
    addText.value = '';

    const circles = document.querySelectorAll('.circle');
    const list = document.querySelectorAll('.list');
    circles.forEach((circle, index) => {
      circle.addEventListener('click', () => {
        circle.style.background = '#0C356A';
        list[index].style.textDecoration = 'line-through';

        // Save tasks to local storage after updating the task state
        saveTasks();
      });
    });
  }
});


