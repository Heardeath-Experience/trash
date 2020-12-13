const myForm = document.querySelector('#my-form')
const question = document.querySelector('#question')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

const answers =
	[
		["Frank"]
		/*
		[
			"Frank", 0
		]
		,
		[
			"Kathe", 1
		]
		*/
	];

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();

	if(question.value === '') 
	{
		msg.classList.add('error');
		msg.innerHTML = 'Please enter all fields';

		setTimeout(() => msg.remove(), 3000);
	} 
	else 
	{
		answer = answers[0][0]
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(answer));
		userList.appendChild(li);
		questin.value = '';
		/*
		const json = `{"data" : [{"name" : "John Doe"}]}`
		console.log(JSON.parse(json).data[0].name);
		*/
		/*
		fetch("./answers.json").then(function(response){
			return response.json();}).then(function(data){
				console.log(data);
			});
			*/
			/*
		answer = JSON.parse(json)[0].name;
		const li = document.createElement('li');
		li.appendChild(doocument.createTextNode(answer.name));
		userList.appendChild(li);
		questin.value = '';
		console.log (data)
		*/
		/*
		{
		   	const li = document.createElement('li');
			li.appendChild(document.createTextNode('ERROR'));
			userList.appendChild(li);
			question.value = '';
		});
		*/
		
	}
}