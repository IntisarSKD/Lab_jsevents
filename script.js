let list = document.querySelector("#list"); 
const enter = document.getElementById("enter");
enter.addEventListener("click", (event) => {
    // when user clicks, the enter listener should grab an input
    const input = document.getElementById("new-todo").value;
    // if(input !== ""){
        const listItem = document.createElement("li")
        listItem.innerText = input;
        list.appendChild(listItem);
    // } 
    // creates an element that is attached to existing ul 
    // every li element has a delete button 
    const deleteItem = document.createElement("button");

    // add innerText that explains the buttons functionality
    deleteItem.innerText = "delete item";

    // append the button created to the listItem
    listItem.appendChild(deleteItem);

    // add event listener - "click" and event
    deleteItem.addEventListener("click", (event) => {
        event.preventDefault();
    // create a function: remove node.parentNode button 
        const listItem = event.target.parentNode
        list.removeChild(listItem);
    })    
});