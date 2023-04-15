//  Variables
let container = document.querySelector(".container");
let scrollbar = document.querySelector(".scroll-container");
let inputText = document.querySelector('#inputText');
let toDoList = document.querySelectorAll('.lists');
let listContainer = document.querySelector(".todoList");
let index;

// User click enter button
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if(inputText.value != ""){
            mainFunction();
        }
    }
});

// Onlick to add icon
document.querySelector('.addIcon').addEventListener('click', () => {
    if(inputText.value != ""){
        mainFunction();
    }
});


function mainFunction() {
    let inputValue = inputText.value;

    appendText_appendBtn(inputValue, index);
    cancelBtn_scrollBar();

    index++
    inputText.value = ""  // After getting input
}

function appendText_appendBtn(inputValue, index){
    // Appending Div in container then Appending text in Div
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML = inputValue;
    div.appendChild(p);
    div.classList.add("listItems");
    listContainer.appendChild(div);

    // Appending button in Div
    let removeBtn = document.createElement('div');
    removeBtn.innerHTML = "&#10006";
    removeBtn.value = index
    removeBtn.classList.add("cancelBtn");
    div.appendChild(removeBtn);
}

function cancelBtn_scrollBar(){
    let allBtn = document.querySelectorAll(".cancelBtn");
    allBtn.forEach((e)=>{
        e.addEventListener('click',()=>{
            e.parentNode.remove(); // removing block of text and button

            // Removing scrollbar if there is space in container 
            if(container.offsetHeight <= 601){
                scrollbar.classList.remove("scrolling");
            }
            // Adding scrollbar if container size is full
            if(container.offsetHeight >= 600){
                scrollbar.classList.add("scrolling");
            }
        })
    })
    // Adding scrollbar if container size is full
    if(container.offsetHeight >= 600){
        scrollbar.classList.add("scrolling");
    }
}


