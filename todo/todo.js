// Taking inputs
const inputTasks = document.getElementById('tasks');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

// add task 
const addTask = () => {
    const newTask = inputTasks.value;
    if (newTask) {
        const list = JSON.parse(localStorage.getItem("taskList")) || [];
        list.push(newTask);
        localStorage.setItem("taskList", JSON.stringify(list));
        inputTasks.value = "";  
        loadList();  
    } else {
        alert("Don't waster your time do something ! Add some task!");
    }
}

function loadList() {
    const list = JSON.parse(localStorage.getItem("taskList")) || [];
    itemList.innerHTML = "";  

    list.forEach((task, index) => {
        const listItem = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.textContent = task;

        const editButton = document.createElement("button");
        editButton.className="edit-button";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editTask(index, taskText));

        const deleteButton = document.createElement("button");
        deleteButton.className="delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteTask(index));

        const buttonContainer=document.createElement("div");
        buttonContainer.className="button-container";

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        
        listItem.appendChild(taskText);
        listItem.appendChild(buttonContainer);
        itemList.appendChild(listItem); 

    });
// for the drag and drop making the list manually sortable
    new Sortable(itemList, {
        animation: 150,
        ghostClass: "sortable-ghost",
        onEnd: () => {
            const reorderedTasks = Array.from(itemList.children).map((li) =>
                li.querySelector("span").textContent
            );
            localStorage.setItem("taskList", JSON.stringify(reorderedTasks));
        },
    });
}

function deleteTask(index) {
    const list = JSON.parse(localStorage.getItem("taskList")) || [];
    list.splice(index, 1); 
    localStorage.setItem("taskList", JSON.stringify(list));  
    loadList();
}

function editTask(index, taskTextElement) {
    taskTextElement.classList.add("editable");
    taskTextElement.contentEditable = true;
    taskTextElement.focus();

    taskTextElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            saveTask(index, taskTextElement);
        }
    });
}

function saveTask(index, taskTextElement) {
    const list = JSON.parse(localStorage.getItem("taskList")) || [];
    const newTaskText = taskTextElement.textContent.trim();

    if (newTaskText !== "") {
        list[index] = newTaskText;
        localStorage.setItem("taskList", JSON.stringify(list));
    }
    else{
        alert("Make your life meaningful ! Add some tasks in your list");
        taskTextElement.focus();
        return;
    }

    loadList();
}

document.addEventListener("DOMContentLoaded", () => {
    loadList();

    addButton.addEventListener("click", addTask);
});