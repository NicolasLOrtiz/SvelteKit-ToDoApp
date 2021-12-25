import { writable } from 'svelte/store';

export type Todo = {
	text: string;
	completed: boolean;
	id: number;
};

export const todos = writable<Todo[]>([]);

export const addTodo = (text: string): void => {
	if (text === '') return;

	todos.update((cur) => {
		const newTodos = [...cur, { text, completed: false, id: Date.now() }];
		return newTodos;
	});
};

export const deleteTodo = (id: number): void => {
	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = (id: number): void => {
	todos.update((todos) => {
		const toggleTodos = todos.map((todo) =>
			todo.id === id
				? {
						...todo,
						completed: !todo.completed
				  }
				: todo
		);

		return toggleTodos;
	});
};
