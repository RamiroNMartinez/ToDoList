const botonAgregar = document.getElementById('btnAgregar');
const tarea = document.getElementById('toDo');
const lista = document.getElementById('lista');
let contador = 0;


function agregarTarea(){
    const nuevoDiv = document.createElement('div');
    const nuevoInput = document.createElement('input');
    const textInput = document.createTextNode(tarea.value);
    nuevoDiv.id=contador;
    nuevoInput.type = 'checkbox';
    nuevoInput.id=contador++;
    textInput.class= `text${contador-1}`;
    lista.appendChild(nuevoDiv);
    nuevoDiv.appendChild(nuevoInput);
    nuevoDiv.appendChild(textInput);
    prepararNuevaTarea();
}

function prepararNuevaTarea (){
    tarea.value = "";

}

// $('input').click(function(){
//     if($('input').is(':checked')){
//         alert("funciona");
//      } else {
//         alert("no funciona");
//      }
//     });


botonAgregar.addEventListener('click', ()=>{
    agregarTarea();    
    document.getElementById('customAlert').style.display = 'flex';
});

document.getElementById('closeAlert').addEventListener('click', () => {
    document.getElementById('customAlert').style.display = 'none';
});