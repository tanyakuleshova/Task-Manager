var taskPosition = 1;

function appearTask() {
    var task = document.createElement('div');
    task.className = 'task';
    task.dataset.id = taskPosition;  
    taskPosition++;
    var list = document.querySelector('.list[data-position="' + this.dataset.position + '"]');
    list.appendChild(task);
    task.addEventListener('click', editTask);
    initDragNDrop();
}

function previousTasks(item){ 
    var task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = item.text;
    task.dataset.id = item.id;
    task.dataset.board_id = item.board_id;
    var list = document.querySelector('.list[data-position="' + task.dataset.board_id + '"]');
    list.appendChild(task);
    task.addEventListener('click', editTask);
}

function editTask(item){ 
    var popup = document.querySelector('.popup-wrapper');
    popup.classList.remove('hidden');
    var target = event.target; 
    console.log(event.target)
    var popupText = document.querySelector('.popup-text input');
    popupText.value = target.innerHTML; 

    popup.addEventListener('click', closePopup);

    function closePopup(){
        popup.classList.add('hidden');
        console.log(event.target)
    }

    var innerPopup = document.querySelector('.popup');
    
    innerPopup.addEventListener('click', function(event){
        event.stopPropagation();
    })
}





