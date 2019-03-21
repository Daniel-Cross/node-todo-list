window.addEventListener('DOMContentLoaded', () => {
	fetch('/api/todos', {
		method: 'GET',
	})
		.then(function(res) {
			return res.json();
		})
		.then(addTodos)
		.catch(function(err) {
			console.log(err);
		});
});

addTodos = (todos) => {
	todos.forEach((todo) => {
		const newTodo = todo.name.split(',');
		console.log(newTodo);
		console.log(todo.completed);

		for (name in newTodo) {
			const newElement = document.createElement('LI');

			if (todo.completed) {
				newElement.className = 'done';
			} else {
				newElement.className = 'task';
			}
			newElement.innerHTML = newTodo[name];
			document.body.appendChild(newElement);
		}
	});
};

function handle(e) {
	if (e.which === 13) {
		e.preventDefault(); // function runs when enter is pressed

		alert('Enter was pressed');
	}
}

createTodo = () => {};

axios
	.get('/api/todos')
	.then(function(res) {
		console.log(res);
	})
	.catch(function(err) {
		console.log(err);
	});
