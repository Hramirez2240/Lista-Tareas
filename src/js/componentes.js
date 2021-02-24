import{Tareas, TareasList} from '../classes';
import{todoTareas} from '../index'

//Referencias html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const filtros = document.querySelector('.filters');
const anchorfiltro = document.querySelectorAll('.filtro');

export const CrearTareaHtml = (todo) =>{

    const htmlTareas = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.completado ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTareas;

    divTodoList.append(div.firstElementChild);
    return div.firstElementChild;

}

txtInput.addEventListener('keyup', (event) => {
    
    if(event.keyCode == 13 && txtInput.value.length > 0){
        console.log(txtInput.value);
        const newTarea = new Tareas(txtInput.value);

        CrearTareaHtml(newTarea);
        todoTareas.newTarea(newTarea);
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click', (event) => {
    
    const NombreEtiqueta = event.target.localName; //De esta variable se obtendrá el nombre de la etiqueta
    const todoElemento = event.target.parentElement.parentElement;
    const TodoId = todoElemento.getAttribute('data-id'); //Aquí se obtendrá el id

    if(NombreEtiqueta.includes('input')){
        todoTareas.MarcarCompletado(TodoId);
        todoElemento.classList.toggle('completed');
    }

    else if(NombreEtiqueta.includes('button')){
        todoTareas.DeleteTarea(TodoId);
        divTodoList.removeChild(todoElemento);
    }

});

btnBorrar.addEventListener('click', () => {

    todoTareas.DeleteCompletes();
    
    for(let i = divTodoList.children.length - 1; i >= 0; i--){
        const element = divTodoList.children[i];

        if(element.classList.contains('completed')){
            divTodoList.removeChild(element);
        }

    }
});

filtros.addEventListener('click', (event) =>{

    const filtro = event.target.text;

    if(!filtro){return;}

    anchorfiltro.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const element of divTodoList.children){
        
        element.classList.remove('hidden');
        const complete = element.classList.contains('completed');

        switch(filtro){

            case 'Pendientes':
                if(complete){
                    element.classList.add('hidden');
                }
            break;

            case 'Completados':
                if(!complete){
                    element.classList.add('hidden');
                }
            break;
        }
    }
});