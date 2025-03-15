document.addEventListener("DOMContentLoaded", () => {
  // Select the form and task list
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Add event listener to handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get task input value
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    // Ensure input is not empty
    //
    if (taskText === "") return;

    // Create a new list item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Append the task to the list
    taskList.appendChild(taskItem);

    // Clear input field after adding task
    taskInput.value = "";
  });
});
