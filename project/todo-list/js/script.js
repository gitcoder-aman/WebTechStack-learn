const item = document.querySelector('#item');
const toDoBox = document.querySelector('#to-do-box');

// TODO: store the value of the input field in local storage in next step

item.addEventListener('keyup',function(event){
    console.log(event);

    if(event.key === 'Enter'){
        addtoDo(this.value)   
        this.value = '';
    }
})
const addtoDo = (item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item}  <i class="fas fa-times"></i>`;

    listItem.addEventListener('click',function(){
        this.classList.toggle('done');
    });

    listItem.querySelector('i').addEventListener('click',function(){
        listItem.remove();
    });
    toDoBox.appendChild(listItem);
}
