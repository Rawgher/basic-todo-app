const form = document.querySelector('form');
const taskArea = document.querySelector('#task-area');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTask = document.querySelector('#task-input');
    const newLi = document.createElement('li');
    const newButton = document.createElement('button');
    newLi.innerText = newTask.value;
    newButton.innerText = 'Clear Task';

    newLi.append(newButton);
    taskArea.append(newLi);
    form.reset();
})

taskArea.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      event.target.parentElement.remove();
    } else if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}); 