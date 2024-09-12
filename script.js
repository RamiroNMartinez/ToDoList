const botonAgregar = document.getElementById('btnAgregar');
const tarea = document.getElementById('toDo');
const lista = document.getElementById('lista');
let contador = 0;
let checkboxex = [];

function agregarTarea(){
    const nuevoDiv = document.createElement('div');
    const nuevoInput = document.createElement('input');
    const textInput = document.createElement('p');
    nuevoDiv.id=contador;
    nuevoInput.type = 'checkbox';
    nuevoInput.id=contador++;
    textInput.style.display = 'inline';
    textInput.textContent = tarea.value;
    //ver cómo evalúo cada uno de los checkbox 
    lista.appendChild(nuevoDiv);
    nuevoDiv.appendChild(nuevoInput);
    nuevoDiv.appendChild(textInput);
    prepararNuevaTarea();
}

function prepararNuevaTarea (){
    tarea.value = "";

}


botonAgregar.addEventListener('click', ()=>{
    agregarTarea();    
    document.getElementById('customAlert').style.display = 'flex';
});

document.getElementById('closeAlert').addEventListener('click', () => {
    document.getElementById('customAlert').style.display = 'none';
});

