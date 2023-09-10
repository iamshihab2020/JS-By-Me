
const todoLIst = document.querySelector('#todoList'),
addText = document.querySelector('#addText'),
addBtn = document.querySelector('.addBtn'),
mainContainer = document.querySelector('main');




// Function to format the date as DD/MM/YY
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
}

// Update the date element in the header
function updateDate() {
    const dateElement = document.getElementById('date');
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    dateElement.textContent = formattedDate;
}

// Call the updateDate function to display the initial date
updateDate();




addBtn.addEventListener('click', ()=>{
    // Get the text entered into the input field
    const taskText = addText.value;
    // Create a new <p> element using template literals
    const newTaskHTML = `<div class="todoList">
    <p class="list"><button class="circle"></button> ${taskText} <button class="dlt"><i class="fa-solid fa-x fa-beat-fade"></i></button></p></div>`;
    // Append the new <p> element to the main container
    mainContainer.innerHTML += newTaskHTML;
    // Clear the input field
    addText.value = '';



    // Get the X icons in the newly added tasks
    const deleteIcons = document.querySelectorAll('.dlt');

    // Add a click event listener to each X icon
    deleteIcons.forEach((deleteIcon) => {
        deleteIcon.addEventListener('click', () => {
            // Get the parent <div> and remove it from the todoList
            const taskContainer = deleteIcon.closest('.todoList');
            if (taskContainer) {
                taskContainer.remove();
            }
        });
    });

    
    const circles = document.querySelectorAll('.circle');
    const list = document.querySelectorAll('.list');
    circles.forEach((circle,index) => {
        circle.addEventListener('click', () => {
            circle.style.background = '#0C356A';
            list[index].style.textDecoration = 'line-through';
        });
    });

});

