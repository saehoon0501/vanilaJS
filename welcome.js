const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const welcome = document.querySelector(".js-welcome");

const USER_LS = "currentUser"

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintWelcome(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.remove("form")
    form.addEventListener("submit",handleSubmit);
}

function paintWelcome(text){
    form.classList.add("form");
    welcome.classList.remove("welcome")
    welcome.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();
    }else{
        paintWelcome(currentUser);
    }
}

function init2(){
    loadName();
}

init2();