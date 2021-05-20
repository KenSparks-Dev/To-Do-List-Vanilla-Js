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

	//create delete task btn
	let deleteTask = document.createElement('div');
	let deleteTaskBtn = document.createElement('button');
	let deleteIcon = document.createElement('img');
	deleteIcon.src = '/images/c-remove.svg';
	deleteTask.classList.add('delete-task');
	deleteTaskBtn.classList.add('delete-btn');
	deleteTask.append(deleteTaskBtn);
	deleteTaskBtn.append(deleteIcon);

	//append title from todos objects to the label
	label.append(todo.title);

	//append input and label to form-item-checkbox div
	formItemCheckbox.append(input, label);

	//append formItemCheckbox to form item div
	formItem.append(formItemCheckbox, icon);

	//formItemGroup
	var formItemGroup = document.createElement('div');
	formItemGroup.classList.add('form-item-group');
	formItemGroup.append(formItem, deleteTask);

	//Select form from html and append formItem to it.
	var form = document.querySelector('.form');
	form.append(formItemGroup);
}

//Animations

//Add Task Btn animation
let addTaskBtn = document.querySelector('.add-task-btn');
let addTaskBtnText = document.querySelector('.btn-text');

addTaskBtn.onmouseover = function () {
	// addTaskBtnText.style.display = 'block';
	// addTaskBtn.style.width = '120px';
	// addTaskBtn.style.borderRadius = '5px';
	// addTaskBtn.style.display = 'flex';
	// addTaskBtn.style.justifyContent = 'space-between';
};
// addTaskBtn.onmouseout = function () {
// 	addTaskBtnText.style.display = 'none';
// 	addTaskBtn.style.width = 'inherit';
// };

//Delete Task Btn Animation
// let deleteTaskBtn = document.querySelector('.delete-btn');
// let formItemHover = document.querySelector('.form-item-group');
// formItemHover.onmouseover = function () {
// 	deleteTaskBtn.style.display = 'block';
// };
// formItemHover.onmouseout = function () {
// 	setTimeout(() => {
// 		deleteTaskBtn.style.display = 'none';
// 	}, 3500);
// };
