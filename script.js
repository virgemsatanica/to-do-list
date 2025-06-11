const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function adicionar(){
    if (inputBox == ''){
        alert("Adicione algo para ser feito!")
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}