window.onload = function () {

    this.flow = {};
    flow.model = {};
    flow.draggable = {
        dragId: null,
        dropId: null
    };
    var addCard = document.querySelector('.addCard');
    addCard.addEventListener('click', onUpdateTask);

    function onUpdateTask(){
        createCard();
    }

    upDate() 
        .then(function(response){
            var items = JSON.parse(response); 
            return response;
        })
        .then(renderBoard)
        .then(initDragNDrop)

}

function upDate(){
    var promise = new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
    
        xhr.open('GET', 'data.json', true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                resolve(xhr.responseText);
            }
        } 
    })
    return promise;
}


function initDragNDrop() {
    var tasks = document.querySelectorAll('.task');
    var list = document.querySelectorAll('.list');
    list.forEach(function(item){
        
        item.addEventListener('dragenter', _onDragEnter);
        item.addEventListener('dragleave', _onDragEnter);
        item.addEventListener('dragover', _onDragOver);
        item.addEventListener('drop', _onDrop);
    });
    
    tasks.forEach(function(item){
        item.draggable = true;
        item.addEventListener('dragstart', _onDragStart);
    });
}

function _onDragStart(event) {
    flow.draggable.dragId = this.dataset.id;
    console.log('drag', this.dataset.id);
}

function _onDragEnter() {
    if (flow.draggable.dragId === this.dataset.id) {
        return;
    }
    // this.classList.add('hover');
}

function _onDragLeave() {
    // this.classList.remove('hover');
}

function _onDragOver(event) {
    event.preventDefault();
}

function _onDrop(event) {
    flow.draggable.dropId = this.dataset.position;

    performDrop(flow.draggable);
    console.log(flow.draggable)
}

function performDrop(draggable) {
    var buffer = {};
    var tasks = document.querySelectorAll('.task');
        tasks.forEach(function(task, pos){
            if(task.id === parseInt(draggable.dragId)) {
                buffer = board.tasks.splice(pos, 1)[0];
            }
    });

        tasks.forEach(function(task, pos){
            if(task.id === parseInt(draggable.dropId)) {
                board.push(buffer);
            }
        });
        var dragElement = document.querySelector('.task[data-id="' + draggable.dragId + '"]'),
        dropElement = document.querySelector('.list[data-position="' + draggable.dropId + '"]')
        dropElement.insertAdjacentElement('beforeEnd', dragElement);
}

