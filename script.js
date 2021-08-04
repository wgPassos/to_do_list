// alert("Funcionou?");

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");

function inputLenght() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

   

    var liChild = document.createElement("div");
    li.appendChild(liChild);

    var okBtn = document.createElement("button");
    okBtn.classList.toggle("okButton");
    okBtn.appendChild(document.createTextNode("OK"));
    liChild.appendChild(okBtn);
    okBtn.addEventListener("click", opacityListItem);

    function opacityListItem() {
        li.classList.toggle("opacity");
    }

    var dBtn = document.createElement("button");
    dBtn.classList.toggle("cancel");
    dBtn.appendChild(document.createTextNode("X"));
    liChild.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete");
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick() {
    if (inputLenght() > 0) {
        createListElement();
    }
}

function addListAfterKeypress() {
    if (inputLenght() > 0  && event.which === 13) {
        createListElement();
    }
}

localStorage