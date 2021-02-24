export class TareasList{

    constructor(){
        // this.todos = [];
        this.CargarLocalStorage();
    }

    newTarea(todo){
        this.todos.push(todo);
        this.GuardarLocalStorage();
    }

    DeleteTarea(id){
        this.todos = this.todos.filter(todo => todo.id != id);
        this.GuardarLocalStorage();
    }

    MarcarCompletado(id){
        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado =! todo.completado;
                this.GuardarLocalStorage();
                break;
            }
        }
    }

    DeleteCompletes(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.GuardarLocalStorage();
    }

    GuardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    CargarLocalStorage(){
        this.todos = (localStorage.getItem('todo'))
        ? JSON.parse(localStorage.getItem('todo'))
        : [];
    }
}