
// Uzdevumu saraksta dati un filtra izvēle
const STORAGE_KEY = "pd1-uzdevumi";
let tasks = [];
let currentFilter = "all";
let editingId = null;

const input = document.getElementById("task-input");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const counter = document.getElementById("counter");
const filterButtons = document.querySelectorAll("[data-filter]");

// Ielādē saglabātos uzdevumus
function loadTasks() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        tasks = Array.isArray(saved) ? saved : [];
    } catch (error) {
        tasks = [];
    }
}

// Saglabā uzdevumus pārlūkprogrammas atmiņā
function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Izveido unikālu uzdevuma ID
function createId() {
    let id = Date.now();
    while (tasks.some(task => task.id === id)) {
        id++;
    }
    return id;
}

// Pievieno jaunu uzdevumu
function addTask() {
    const text = input.value.trim();
    if (!text) return;

    tasks.push({ id: createId(), text, done: false });
    input.value = "";
    saveTasks();
    renderTasks();
}

// Atzīmē uzdevumu kā izpildītu vai aktīvu
function toggleTask(id) {
    const task = tasks.find(item => item.id === id);
    if (!task) return;

    task.done = !task.done;
    saveTasks();
    renderTasks();
}

// Dzēš izvēlēto uzdevumu
function deleteTask(id) {
    if (editingId === id) editingId = null;
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

// Sāk uzdevuma teksta rediģēšanu
function startEdit(id) {
    if (editingId !== null) return;

    editingId = id;
    renderTasks();

    const editInput = taskList.querySelector(".edit-input");
    if (editInput) {
        editInput.focus();
        editInput.select();
    }
}

// Saglabā rediģēto tekstu
function finishEdit(id, value) {
    const task = tasks.find(item => item.id === id);
    const text = value.trim();

    if (task && text) {
        task.text = text;
        saveTasks();
    }

    editingId = null;
    renderTasks();
}

// Atceļ uzdevuma rediģēšanu
function cancelEdit() {
    editingId = null;
    renderTasks();
}

// Atgriež uzdevumus atbilstoši izvēlētajam filtram
function getFilteredTasks() {
    if (currentFilter === "active") {
        return tasks.filter(task => !task.done);
    }
    if (currentFilter === "done") {
        return tasks.filter(task => task.done);
    }
    return tasks;
}

// Atjauno uzdevumu sarakstu un skaitītāju
function renderTasks() {
    taskList.textContent = "";

    getFilteredTasks().forEach(task => {
        const item = document.createElement("li");
        item.className = "task-item";
        if (task.done) item.classList.add("completed");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.addEventListener("change", () => toggleTask(task.id));

        const text = document.createElement("span");
        text.className = "task-text";

        if (editingId === task.id) {
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.className = "edit-input";
            editInput.value = task.text;
            editInput.addEventListener("keydown", event => {
                if (event.key === "Enter") {
                    finishEdit(task.id, editInput.value);
                }
                if (event.key === "Escape") cancelEdit();
            });
            editInput.addEventListener("blur", () => {
                if (editingId === task.id) {
                    finishEdit(task.id, editInput.value);
                }
            });
            text.appendChild(editInput);
        } else {
            text.textContent = task.text;
            text.addEventListener("dblclick", () => startEdit(task.id));
        }

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Dzēst";
        deleteButton.setAttribute("aria-label", "Dzēst: " + task.text);
        deleteButton.addEventListener("click", () => deleteTask(task.id));

        item.append(checkbox, text, deleteButton);
        taskList.appendChild(item);
    });

    counter.textContent = tasks.filter(task => !task.done).length;
}

// Pievienošanas poga
addButton.addEventListener("click", addTask);

// Uzdevuma pievienošana ar Enter taustiņu
input.addEventListener("keydown", event => {
    if (event.key === "Enter") addTask();
});

// Filtru pārslēgšana
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (editingId !== null) cancelEdit();

        currentFilter = button.dataset.filter;
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        renderTasks();
    });
});

// Lietotnes sākotnējā ielāde
loadTasks();
renderTasks();
