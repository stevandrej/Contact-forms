
//Movement Animation to happen
const card = document.querySelectorAll(".card");
const cardInvisible = document.querySelectorAll(".card-invisible");

//Moving Animation Event
cardInvisible.forEach((element, index) => {
	element.addEventListener("mousemove", (e) => {
		let xAxis = (window.innerHeight / 2 - e.pageX) / 50;
		let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
		card[index].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
	});
});
//Animate In
cardInvisible.forEach((element, index) => {
	element.addEventListener("mouseenter", (e) => {
		card[index].style.transition = "none";
		//Popout
		card[index].style.transform = "translateZ(150px) ";
	});
});

//Animate Out
cardInvisible.forEach((element, index) => {
	element.addEventListener("mouseleave", (e) => {
		card[index].style.transition = "all 0.5s ease";
		//Popback
		card[index].style.transform = "translateZ(0px)";
	});
});