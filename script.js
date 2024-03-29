let input = document.querySelector('.input');
let listElement = document.querySelector('.list-group');
let clock = document.getElementById('clock');

input.addEventListener('keypress', (event) => {
    if (event.which === 13){
        addTask();
    }
});

listElement.addEventListener('click', (event) => {

    if (event.target.className === 'form-check-input me-1'){
        event.target.parentNode.classList.toggle('alert-dark');
        event.target.parentNode.classList.toggle('mark-completed');
    }

    if (event.target.className === 'btn-close'){
        event.target.parentNode.remove();
    }

});

function time() {
    let date = new Date();
    clock.textContent = date;
}

setInterval(time, 1000);

function addTask(){

    if (input.value != ""){
        const childElement = document.createElement("div")

        const newItem = `
                <div class="alert alert-info alert-dismissible fade show" style="text-align: left" role="alert">
                    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                    ${input.value}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
        `;
        listElement.append(childElement);
        $(childElement).append(newItem);
        
    }

    input.value = '';
}