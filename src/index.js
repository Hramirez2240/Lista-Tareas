import './styles.css';
import{Tareas, TareasList} from './classes';
import {CrearTareaHtml} from './js/componentes';

export const todoTareas = new TareasList();

todoTareas.todos.forEach(CrearTareaHtml);