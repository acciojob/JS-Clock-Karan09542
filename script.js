//your code here
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");


setInterval(()=> {
	const now = new Date()
	const hour = 30*now.getHours() + 90;
	const min = 6*now.getMinutes() + 90;
	const sec = 6*now.getSeconds() + 90;
	console.log(hour)
	hourHand.style.transform = `rotate(${hour}deg)`	
	minHand.style.transform = `rotate(${min}deg)`	
	secondHand.style.transform = `rotate(${sec}deg)`	
}, 1000)