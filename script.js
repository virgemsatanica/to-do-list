// constantes para os elementos de input e a lista
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Função de adicionar e salvar
function adicionar(){
    if (inputBox.value == ''){
        alert("Adicione algo para ser feito!")
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}   
// evento de clickar para riscar ou remover a tarefa
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); 
        saveData()
    }
}, false);

// Função de salvar dados
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Função de carregar dados
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();