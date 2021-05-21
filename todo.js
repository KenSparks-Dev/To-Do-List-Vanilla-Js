let todos = [
	{
		id: 1,
		title: 'Do Something',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque harum minima eos molestias, pariatur exercitationem consequuntur ipsa. Ullam repellat nostrum cupiditate laborum magni! Et laboriosam sunt nulla vel ullam beatae.',
		createdOn: '',
		updatedOn: '',
		isCompleted: false,
	},
	{
		id: 2,
		title: 'Do Another Something',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro sed, aliquid qui animi provident rerum dolores aliquam nostrum in ullam odio expedita aspernatur dicta labore eaque necessitatibus ratione soluta autem?',
		createdOn: new Date(),
		updatedOn: new Date(),
		isCompleted: false,
	},
	{
		id: 3,
		title: 'Work on to-do list',
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero a inventore ullam possimus, tenetur dolores, cum fugiat consequatur, minima perferendis recusandae debitis molestias in sed ipsum sint. Eveniet, culpa hic?',
		createdOn: '',
		updatedOn: '',
		isCompleted: false,
	},
];

todos.forEach(printTodos);
function printTodos(todo) {
	const formItemInner = `
	<div class="form-item">
		<div class="form-item-checkbox">
			<input type="checkbox" id="${todo.id}"><label for="${todo.id}">${todo.title}</label>
		</div>
		<img src="/images/notes.svg">
	</div>
		<div class="delete-task">
			<button class="delete-btn"><img src="/images/c-remove.svg"/></button>
		</div>
	`;

	let container = document.createElement('div');
	container.classList.add('form-item-group');
	container.innerHTML = formItemInner;

	let form = document.querySelector('.form');
	form.append(container);
}
