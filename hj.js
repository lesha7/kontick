"use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
// 	console.log(this.value);
	
// 	let self = this;
	
// 	function child() {
// 		console.log(Math.pow(self.value, 2));
// 	}
// 	child();
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
// 	square(this);
	
// 	function square(param) {
//         console.log(Math.pow(param.value, 2));	}
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
//     console.log(this.value);	
// 	let square = () => {
//         console.log(Math.pow(this.value, 2));	}
//         square()
// }
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// function func() {
// 	console.log(this.value);
// }
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);

// let elem = document.querySelector('#elem');
// let name = `nicita`
// let surname = `minzazizov`
// function func(surname, name) {
// 	console.log(this.value + ', ' + name 
// 		+ ' ' + surname); 
// }

// func.call(elem, surname, name)



// let elem = document.getElementById('elem');

// function func(name, surname) {
// 	console.log(this.value + ', ' + name 
// 		+ ' ' + surname); 
// }

// func = func.bind(elem)

// func('John', 'Smit'); 
// func('Eric', 'Luis');
