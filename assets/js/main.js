const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const task = document.querySelector('.task');

btnTask.addEventListener('click', function() {
    if (!inputTask.value) return;
  createTask(inputTask.value);
  });


inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

function createLi() {
    const li = document.createElement('li');
    return li;
}

function createTask(textInput) {
 
    const li = createLi();
    li.innerHTML = textInput;
    task.appendChild(li);
    clearInput();
    createButtonDelete(li);
    saveTask();
}

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createButtonDelete(li) {
    const btnDelete = document.createElement('button');
    btnDelete.innerHTML = 'delete';
    btnDelete.setAttribute('class', 'material-icons');
    btnDelete.setAttribute('title', 'Apagar esta tarefa!')
    li.appendChild(btnDelete);    
}

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('material-icons')){
        el.parentElement.remove();
        saveTask();
    }
})

function saveTask() {
    const liTask = task.querySelectorAll('li');
    const listOfTask = [];

        for (let task of liTask) {
            let taskText = task.innerText;
            listOfTask.push(taskText);
        }
            const taskJSON = JSON.stringify(listOfTask);
            localStorage.setItem('task', taskJSON);
}

function returnTaskSave() {
    const task = localStorage.getItem('task');
    const listOfTask = JSON.parse(task);

    for(let task of listOfTask) {
        createTask(task);
    }
}
returnTaskSave();