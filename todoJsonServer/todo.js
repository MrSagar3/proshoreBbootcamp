const inputTask = document.getElementById("inputTask");
const addTaskBtn = document.getElementById("addTaskBtn");
const listItem = document.getElementById("itemList");
const filterOptions = document.getElementById("filterOptions");
const apiUrl = "http://localhost:3000/todos";

// Fetching todos with order from the server
const fetchTodos = async () => {
  try {
    const res = await fetch(apiUrl);
    const todos = await res.json();

    const filter = filterOptions.value;

    let filteredTodos;
    if (filter === "completed") {
      filteredTodos = todos.filter((todo) => todo.completed);
    } else if (filter === "notCompleted") {
      filteredTodos = todos.filter((todo) => !todo.completed);
    } else {
      filteredTodos = todos;
    }

    // Sort todos based on the 'order' field to ensure the correct display order
    filteredTodos.sort((a, b) => a.order - b.order);

    showTodos(filteredTodos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

// Adding todos
const addTodo = async (e) => {
  const title = inputTask.value.trim();
  if (!title) {
    return alert("Enter some task");
  }

  const newTodo = { title, completed: false, order: 0 }; // Default order as 0
  try {
    await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    inputTask.value = "";
    fetchTodos();
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

// Delete todo
const deleteTodo = async (id) => {
  try {
    await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    fetchTodos();
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};

// Toggle completion status
const toggleTodo = async (id, completed) => {
  try {
    await fetch(`${apiUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !completed }),
    });
    fetchTodos();
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};

// Rendering todos
// Rendering todos
const showTodos = (todos) => {
  listItem.innerHTML = ""; // Clear previous tasks

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("task-item", "list-group-item");

    const span = document.createElement("span");
    span.textContent = todo.title;
    span.style.textDecoration = todo.completed ? "line-through" : "none";
    span.style.cursor = "pointer";
    span.addEventListener("click", () => toggleTodo(todo.id, todo.completed));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "ms-2");  // Bootstrap styling for button
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add a custom data-id attribute to each item for easy access during sorting
    li.dataset.id = todo.id;

    listItem.appendChild(li);
  });

  enableSorting(); // Re-enable sorting after rendering the list
};

// Sorting tasks
const enableSorting = () => {
  new Sortable(listItem, {
    animation: 150,
    ghostClass: "sortable-ghost",
    onEnd: async () => {
      const reorderedTasks = Array.from(listItem.children).map((li, index) => {
        const id = li.dataset.id; // Get the task's ID
        return {
          id, // Keep the task ID
          order: index // Assign the new order based on the position in the list
        };
      });

      // Send the updated tasks' order to the JSON server
      try {
        for (const task of reorderedTasks) {
          const response = await fetch(`${apiUrl}/${task.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ order: task.order }),
          });

          if (response.ok) {
            console.log(`Task order updated: ${task.id}`);
          } else {
            console.error(`Failed to update task order for task ${task.id}`);
          }
        }
      } catch (error) {
        console.error("Error updating task order:", error);
      }
    },
  });
};

filterOptions.addEventListener("change", () => {
  fetchTodos();
});

addTaskBtn.addEventListener("click", addTodo);

fetchTodos(); // Load todos when the page is initialized
