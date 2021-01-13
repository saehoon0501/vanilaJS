const toDoForm = document.querySelector(".js-toDoform");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDolist");

const TODOS_LS = "toDos";

let toDos= [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos=toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();    
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  }
  

function printToDO(text){
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    const newId = toDos.length + 1;
    delbtn.innerText= "X";
    delbtn.addEventListener("click", deleteToDo);
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
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {
        const parsedToDos = JSON.parse(toDos);
        parsedToDos.forEach(function(todo){printToDO(todo.text);});
    }
  }
  
      
  function init() {
    loadToDos(); 
    toDoForm.addEventListener("submit", handleSubmit);
  }

  init();