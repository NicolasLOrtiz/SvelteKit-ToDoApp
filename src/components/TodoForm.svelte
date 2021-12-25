<script>
	import { addTodo } from '../stores/todoStore.ts';

	let todo = '';

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(todo);
		todo = '';
		console.log('submitting');
	};
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col text-sm mb-2">
		<input
			bind:value={todo}
			class="appearance-none shadow-sm border border=gray-200 p-2
			        focus:outline-none focus:border-gray-500 rounded-lg"
			name="todo"
			placeholder="O que temos que fazer hoje?"
			type="text"
		/>
	</div>
	<button
		class="w-full shadow-sm rounded bg-blue-500 houver:bg-blue-700
		        text-white py-2 px-4 font-bold"
		type="submit"
		>Partiu
	</button>
</form>
