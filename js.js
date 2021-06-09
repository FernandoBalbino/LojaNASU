var menu = document.querySelector('#menu-icon')

menu.addEventListener('click', open_close)

function open_close (argument) {
	if(menu.getAttribute('class', 'menu') === 'menu_closed'){
		menu.setAttribute('class', 'menu')
		menu.src='menu.svg'
	} else{
		menu.setAttribute('class', 'menu_closed')
		menu.src='close.svg'
	}
}