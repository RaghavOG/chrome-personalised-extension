// Function to load saved tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(addTaskToDOM);
}

// Function to save tasks to local storage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add task to the DOM
function addTaskToDOM(task) {
    const taskList = document.getElementById("task-list");

    const listItem = document.createElement("li");
    listItem.setAttribute("data-id", task.id);

    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = task.text;
    if (task.completed) {
        taskText.style.textDecoration = "line-through";
    }
    listItem.appendChild(taskText);

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.addEventListener("click", function () {
        task.completed = !task.completed;
        if (task.completed) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "none";
        }
        updateTaskInStorage(task);
    });
    listItem.appendChild(completeBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.addEventListener("click", function () {
        const newText = prompt("Edit task:", task.text);
        if (newText) {
            task.text = newText;
            taskText.textContent = newText;
            updateTaskInStorage(task);
        }
    });
    listItem.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener("click", function () {
        listItem.remove();
        deleteTaskFromStorage(task.id);
    });
    listItem.appendChild(deleteBtn);

    taskList.appendChild(listItem);
}

// Function to update task in local storage
function updateTaskInStorage(updatedTask) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const index = tasks.findIndex(task => task.id === updatedTask.id);
    tasks[index] = updatedTask;
    saveTasks(tasks);
}

// Function to delete task from local storage
function deleteTaskFromStorage(id) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.id !== id);
    saveTasks(tasks);
}

// Function to add new task
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim(); // Trim spaces from the task text

    if (taskText.length > 0) { // Check if task is not empty
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        addTaskToDOM(task);

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        saveTasks(tasks);

        taskInput.value = ""; // Clear the input
    } else {
        alert("Please enter a valid task!");
    }
}

// Add new task with button click
document.getElementById("add-task-button").addEventListener("click", addTask);

// Add new task with "Enter" key press
document.getElementById("task-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Load tasks when the page is loaded
document.addEventListener("DOMContentLoaded", loadTasks);
