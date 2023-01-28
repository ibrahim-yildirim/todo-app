// Definition of DOM
var textInputDOM = document.querySelector("#textInput");
var btnSubmitDOM = document.querySelector("#btnSubmit");
var btnEditDOM = document.querySelector("#btnEdit");
var todoListDOM = document.querySelector(".todoList");
var inputValue = "";

function todoAdd() {

    // Check for empty value input
    if(textInputDOM.value == ""){
        alert("Listeye boş eleman ekleyemezsiniz.")
    } else{

        // Create li and span element
        let liElement = document.createElement("li");
        let spanElement = document.createElement("span");
        spanElement.textContent = textInputDOM.value;
        liElement.appendChild(spanElement);
        todoListDOM.appendChild(liElement)

        // Create delete button element
        let btnElement = document.createElement("button");
        btnElement.setAttribute("onclick","todoDelete(this)");
        btnElement.className = "btn btn-outline-danger float-end";
        btnElement.textContent = "Delete";
        liElement.appendChild(btnElement);

        // Create edit button element
        let btnElement2 = document.createElement("button");
        btnElement2.setAttribute("onclick","todoEdit(this)");
        btnElement2.className = "btn btn-outline-warning float-end mx-2";
        btnElement2.textContent = "Edit";
        liElement.appendChild(btnElement2);

    }

    // Reset text input value for next to do
    textInputDOM.value = "";
}

function todoDelete(button){

    // Remove li element (button.parentElement = li)
    button.parentElement.remove();
}

function todoEdit(button){

    // Submit button hide and edit button show
    btnEditDOM.classList.remove("visually-hidden");
    btnSubmitDOM.classList.add("visually-hidden");

    // Get li element text for edit
    inputValue = button.parentElement.firstChild;
    textInputDOM.value = inputValue.innerHTML;

    btnEditDOM.onclick = () => {
        
        // Write edited value, submit button show and edit button hide
        btnEditDOM.classList.add("visually-hidden");
        btnSubmitDOM.classList.remove("visually-hidden");
        inputValue.innerHTML = textInputDOM.value

        // Reset text input value for next to do
        textInputDOM.value = "";
    }

}