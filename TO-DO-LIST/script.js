const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
	const task = taskInput.value;
	if (task) {
		const taskElement = document.createElement("li");
		taskElement.textContent = task;
		taskList.appendChild(taskElement);
		taskInput.value = "";
	}
});
