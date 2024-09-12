const btnAgregar = document.getElementById('btnAgregar');
const tarea = document.getElementById('toDo');
const lista = document.getElementById('lista');
const editar = document.getElementById('editar');
const eliminar = document.getElementById('eliminar');
const alertaAgregada = document.getElementById('customAlert');
const btnAlertaAdd = document.getElementById('closeAlert');
const alertaError = document.getElementById('errorAlert');
const btnAlertaError = document.getElementById('cerrarAlerta');

function agregarTarea(){
    const nuevoDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    const textInput = document.createElement('label');
    const textInput2 = document.createElement('del');
    // nuevoDiv.id=contador;
    // checkbox.id=contador++;
    checkbox.type = 'checkbox';
    textInput.textContent = tarea.value;
    textInput2.textContent = tarea.value;
    textInput2.style.display = 'none';

    //ver cómo evalúo cada uno de los checkbox 
    lista.appendChild(nuevoDiv);
    nuevoDiv.appendChild(checkbox);
    nuevoDiv.appendChild(textInput);
    nuevoDiv.appendChild(textInput2);
    prepararNuevaTarea();

    checkbox.addEventListener('change', (evento) =>{
        if(evento.target.checked){
            textInput.style.display = 'none';
            textInput2.style.display = 'inline';
        }
        else{
            textInput2.style.display = 'none';
            textInput.style.display = 'inline';
        }
    });

}

function prepararNuevaTarea (){
    tarea.value = "";
}


btnAgregar.addEventListener('click', ()=>{
    if(tarea.value != ''){
        agregarTarea();    
        alertaAgregada.style.display = 'flex';
    }
    else{
        alertaError.style.display = 'flex';
    }
});

btnAlertaAdd.addEventListener('click', () => {
    alertaAgregada.style.display = 'none';
});


btnAlertaError.addEventListener('click', () => {
    alertaError.style.display = 'none';
});