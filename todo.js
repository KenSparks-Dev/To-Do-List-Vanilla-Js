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
		createdOn: '',
		updatedOn: '',
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
	//create form-item-checkbox div and assign class
	let formItemCheckbox = document.createElement('div');
	formItemCheckbox.classList.add('form-item-checkbox');

	//create form item div and assign class
	let formItem = document.createElement('div');
	formItem.classList.add('form-item');

	//create input and label element. Give input checkbox type.
	let label = document.createElement('label');
	label.htmlFor = todo.id;
	let input = document.createElement('input');
	input.type = 'checkbox';
	input.id = todo.id;

	//create img element and assign the notes icon to it.
	let icon = document.createElement('img');
	icon.src = '/images/notes.svg';

	//append title from todos objects to the label
	label.append(todo.title);

	//append input and label to form-item-checkbox div
	formItemCheckbox.append(input, label);

	//append formItemCheckbox to form item div
	formItem.append(formItemCheckbox, icon);

	//Select form from html and append formItem to it.
	let form = document.querySelector('.form');
	form.append(formItem);
	console.log(label);
}
