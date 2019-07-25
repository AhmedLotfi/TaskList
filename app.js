// declare all  app vars
const _formTask = document.querySelector('#formTask');
const _listTask = document.querySelector('#taskList');
const _taskInput = document.querySelector('#txtTask');
const _searchInput = document.querySelector('#txtSearch');
const _btnAddTask = document.querySelector('#btnAddTask');
const _btnClearTasks = document.querySelector('#btnClearTasks');

// load all  enents

loadAllEvents();

function loadAllEvents(){

    _formTask.addEventListener('submit',AddTask);
    _listTask.addEventListener('click',RemoveTaskItem);
    _btnClearTasks.addEventListener('click',ClearTaskList);
    _searchInput.addEventListener('keyup',FilterList);
}

function AddTask(e){

    if(_taskInput.value === '')
     {
        alert('Add Task');
        return;
     }

    const liTag = document.createElement('li');

    liTag.classList = 'list-group-item d-flex justify-content-between align-items-center';
    
    liTag.appendChild(document.createTextNode(_taskInput.value));

    const aTag = document.createElement('a');

    aTag.className = 'remove-item text-danger';

    aTag.innerHTML ='<i class="fa fa-trash"></i>';

    liTag.appendChild(aTag);

    _listTask.appendChild(liTag);

    e.preventDefault();
}


function RemoveTaskItem(e){
    if(confirm('Are You Sure For Delete this row ?')){
       e.target.remove();
    }
}


function ClearTaskList(e){
  _listTask.innerHTML= '';
}


function FilterList(e){
  
    const txt = e.target.value.toLowerCase();

    document.querySelectorAll('.list-group-item').forEach(function(task){
   
        const item = task.firstChild.textContent;

        console.log(item.toLowerCase().indexOf(txt));

        if(item.toLowerCase().indexOf(txt) !== -1){
            task.className = task.className.replace('alt','d-flex');
        }else{
            task.className = task.className.replace('d-flex','alt');
            task.style.display ='none';
        }

    });

} 