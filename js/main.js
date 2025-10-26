// Updates Copyright Footer

const year = document.querySelector(
	'#current-year'
);
//Connects footer to code

year.innerHTML = new Date().getFullYear();
//Pulls new year to update footer