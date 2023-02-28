const taskContainer = document.querySelector(".task__container");
// create a function to read the date and console log it

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageurl: document.getElementById("imageUrl").value,
        tasktitle: document.getElementById("taskTitle").value,
        tasktype: document.getElementById("taskType").value,
        taskdescription: document.getElementById("taskDescription").value
    };
    
    const newCard = `
        <div class="col col-md-4" id=${taskData.id}>
            <div class="card">
                <div class="card-header d-flex justify-content-end gap-2">
                    <button type="button" class="btn btn-outline-success p-2"><i class="fa-solid fa-pencil" ></i></button>
                    <button type="button" class="btn btn-outline-danger p-2"><i class="fa-solid fa-trash-can"></i></button>
                </div>
                <div class="card-body d-flex flex-column">
                    <img class="card-image-top pb-3" src=${taskData.imageurl} alt="Image">
                    <h5 class="card-title text-primary text-start fw-bold">${taskData.tasktitle}</h5>
                    <p class="card-text text-start">${taskData.taskdescription}</p>
                    <a href="#" class="btn btn-primary text-start">${taskData.tasktype}</a>
                </div>
            </div>
        </div> 
    `;

    taskContainer.insertAdjacentHTML("beforeend", newCard);  
};