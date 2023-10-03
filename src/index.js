document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const taskInput = document.getElementById("new-task-description");
    const prioritySelect = document.getElementById("priority");
    const userInput = document.getElementById("user");
    const durationInput = document.getElementById("duration");
    const dateDueInput = document.getElementById("date-due");
    const submitButton = document.querySelector("input[type='submit']");
    const taskList = document.getElementById("tasks");
    const sortAscendingButton = document.getElementById("sort-ascending");
    const sortDescendingButton = document.getElementById("sort-descending");
  
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
  
      const taskText = taskInput.value.trim();
      const priority = prioritySelect.value;
      const user = userInput.value;
      const duration = durationInput.value;
      const dateDue = dateDueInput.value;
  
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = `Task: ${taskText}, Priority: ${priority}, User: ${user}, Duration: ${duration}, Due Date: ${dateDue}`;
       
        // Apply priority-based text color
        if (priority === "high") {
          taskItem.style.color = "red";
        } else if (priority === "medium") {
          taskItem.style.color = "yellow";
        } else if (priority === "low") {
          taskItem.style.color = "green";
        }
  
        taskList.appendChild(taskItem);
  
        taskInput.value = "";
        prioritySelect.value = "low";
        userInput.value = "";
        durationInput.value = "";
        dateDueInput.value = "";
      }
    });
  
    sortAscendingButton.addEventListener("click", () => {
      const tasks = Array.from(taskList.getElementsByTagName("li"));
      tasks.sort((a, b) => a.style.color.localeCompare(b.style.color));
      taskList.innerHTML = "";
      tasks.forEach((task) => taskList.appendChild(task));
    });
  
    sortDescendingButton.addEventListener("click", () => {
      const tasks = Array.from(taskList.getElementsByTagName("li"));
      tasks.sort((a, b) => b.style.color.localeCompare(a.style.color));
      taskList.innerHTML = "";
      tasks.forEach((task) => taskList.appendChild(task));
    });
  });
  
  
  