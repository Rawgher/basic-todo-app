const form = document.querySelector('form');
const taskArea = document.querySelector('#task-area');
const lsTasks = JSON.parse(localStorage.getItem('tasks')) || [];

for (let i = 0; i < lsTasks.length; i++) {
    let newTask = document.createElement('li');
    newTask.innerText = lsTasks[i].task;
    newTask.completed = lsTasks[i].completed ? true : false;
    if (newTask.completed) {
        newTask.classList.add('checked')
    }
    taskArea.append(newTask);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTask = document.querySelector('#task-input');
    let newLi = document.createElement('li');
    newLi.innerText = newTask.value;
    taskArea.append(newLi);
    form.reset();
    lsTasks.push({ task: newLi.innerText, completed: false })
    localStorage.setItem('tasks', JSON.stringify(lsTasks));
})

taskArea.addEventListener("click", function(event) {
    let liEvent = event.target
    
    if (liEvent) {
        if (!liEvent.completed) {
            liEvent.classList = ('checked');
            liEvent.completed = true
        } else {
            liEvent.classList.remove('checked');
            liEvent.completed = false
        } 
    }

    for (let i = 0; i < lsTasks.length; i++) {
        if (lsTasks[i].task === liEvent.innerText) {
            lsTasks[i].completed = !lsTasks[i].completed;
            localStorage.setItem("tasks", JSON.stringify(lsTasks));
        }
    }
}); 