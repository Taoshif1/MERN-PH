let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

addTaskBtn.addEventListener('click', function(){
    let newTask = taskInput.value;

    if(newTask === '') return alert("Please enter a task");  // prevents inserting empty items

    if(newTask){
        // Create <li>
        let li = document.createElement("li");
        li.textContent = newTask;

        // Create a delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        // Delete item on click
        deleteBtn.addEventListener("click", function(){
            taskList.removeChild(li);
        });

        // Append delete button to <li>
        li.appendChild(deleteBtn);

        // Add <li> to task list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }
})