console.log("JavaScript working!");
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const searchByKeyWord = document.getElementById('searchByKeyWord');
const searchTaskBtn = document.getElementById('seachTaskBtn');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        /*let status = false;
        while (status == false){
            li.style.background = "green";
        }*/
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Por favor ingresa una tarea válida.');
    }
});

searchTaskBtn.addEventListener('click', () => {
    const taskText = searchByKeyWord.value

});