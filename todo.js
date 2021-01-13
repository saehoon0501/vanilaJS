const toDoForm = document.querySelector(".js-toDoform");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDolist");

const TODOS_LS = "toDos";

const toDos= [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  }
  

function printToDO(text){
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    const newId = toDos.length + 1;
    delbtn.innerText= "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delbtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj ={
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    printToDO(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            printToDO(toDo.text);
    });
  }
}
  
  function init() {
    loadToDos(); 
    toDoForm.addEventListener("submit", handleSubmit);
  }

  init();