// Quando se lida com aplicativos complexos em Mojo, um desafio significativo é o gerenciamento eficiente do estado e dos dados em larga escala.
// Isso inclui a organização e estruturação adequada dos dados, a implementação de fluxos de dados unidirecionais (como Flux ou Redux) e a sincronização eficiente de alterações nos dados com a interface do usuário.

import mojo from 'mojo';

class Store {
constructor(initialState) {
this.state = initialState;
this.subscribers = [];
}

getState() {
return this.state;
}

setState(newState) {
this.state = newState;
this.notifySubscribers();
}

subscribe(callback) {
this.subscribers.push(callback);
}

unsubscribe(callback) {
this.subscribers = this.subscribers.filter(subscriber => subscriber !== callback);
}

notifySubscribers() {
this.subscribers.forEach(subscriber => subscriber());
}
}

// Exemplo de uso do Store

const initialState = {
counter: 0,
todos: []
};

const store = new Store(initialState);

function render() {
const state = store.getState();

// Renderizar a interface do usuário com base no estado atual

console.log('Counter:', state.counter);
console.log('Todos:', state.todos);
}

function incrementCounter() {
const state = store.getState();
const newState = {
...state,
counter: state.counter + 1
};
store.setState(newState);
}

function addTodo(todo) {
const state = store.getState();
const newTodos = [...state.todos, todo];
const newState = {
...state,
todos: newTodos
};
store.setState(newState);
}

store.subscribe(render);

incrementCounter();
addTodo('Tarefa 1');
addTodo('Tarefa 2');

// Saída esperada:
// Counter: 1
// Todos: [ 'Tarefa 1', 'Tarefa 2' ]