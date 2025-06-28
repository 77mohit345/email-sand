function addTodo()
{
    const input= document.getElementById('todo-input');
    const task = input.value.trim();

if(task === '')
    {
        alert("please enter a task!");
        return;
    } 

    const list = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.innerHTML = `<span onclick="toggleDone(this)">${task}</span> 
    <button onclick="removeTodo(this)">❌</button>`;

    list.appendChild(li);
    input.value = '';
}

function removeTodo(button)
{
    const li = button.parentElement;                      
    li.remove();
}

function toggleDone(span)
{
    span.parentElement.classList.toggle('done'); 
            
}