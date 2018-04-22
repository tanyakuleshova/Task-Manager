var boardPosition = 1;

function createCard(key){
    var card_wrapper = document.createElement('div');
    card_wrapper.className = 'list-wrapper';
    var card = document.createElement('div');
    card.className = 'list';
        var card_title = document.createElement('p');
    if (key) {
        card_title.innerHTML = key.name;
    } else {
        card_title.innerHTML = 'New card';
    }
    card_title.className = 'card_title';
    card_wrapper.append(card_title);
    card_wrapper.append(card);

    board = document.querySelector('#board');
    card.dataset.position = boardPosition;
    boardPosition++;
    board.append(card_wrapper);
    createButton(card_wrapper, card);
}

function createButton(card_wrapper, card) {
    var button = document.createElement('button'); 
    button.className = 'addTask'; 
    var plus_icon = document.createElement('i');
    plus_icon.className = 'fa fa-plus';
    button.appendChild(plus_icon);
    card_wrapper.appendChild(button); 
    button.dataset.position = card.dataset.position; 
    button.addEventListener('click', appearTask); 
}

function renderBoard(response) { 
    var items = JSON.parse(response); 
    items.data.boards.forEach(function (key, pos) {
        console.log(key)
        createCard(key);
        key.tasks.forEach(function (item, pos){
            previousTasks(item);
            // initPopup(item);
            
        });
});
}









