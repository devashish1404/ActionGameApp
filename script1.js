score = 0;
cross = true; //if they cross to each other score may be increase//

audio = new Audio('Music.mp3');
audiogo = new Audio('gameover.wav');
setTimeout(() => {
	audio.play();
}, 1000);
document.onkeydown = function(e){
	console.log("key code is:" ,e.keyCode)
	if(e.keyCode==38){
			Ninja = document.querySelector('.Ninja');
			Ninja.classList.add('animateNinja');
			setTimeout(() => {
				Ninja.classList.remove('animateNinja')
			},700);
		}

		if(e.keyCode==39){
			Ninja = document.querySelector('.Ninja');
			Ninja.classList.add('animateNinja');
			NinjaX = parseInt(window.getComputedStyle(Ninja, null).getPropertyValue('left'));
			Ninja.style.left = NinjaX + 112 + "px";
		}

		if(e.keyCode==37){
			Ninja = document.querySelector('.Ninja');
			Ninja.classList.add('animateNinja');
			NinjaX = parseInt(window.getComputedStyle(Ninja, null).getPropertyValue('left'));
			Ninja.style.left = (NinjaX - 112) + "px";
		}
}

setInterval(() => {
	Ninja = document.querySelector('.Ninja');
	gameOver = document.querySelector('.gameOver');
	obstacle = document.querySelector('.obstacle');
	

	Nx = parseInt(window.getComputedStyle(Ninja, null).getPropertyValue('left'));//from this command we are given the left value of ninja//
	Ny = parseInt(window.getComputedStyle(Ninja, null).getPropertyValue('top'));//from this command we are given the top value of ninja//

	ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));//from this command we are given the left value of obstacle//
	oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));//from this command we are given the top value of obstacle//

	offsetX = Math.abs(Nx-ox);//here we are taking the differnce of ninja and obstacle disance according to x and y//
	offsetY = Math.abs(Ny-oy);//if it comes to close each other they will die//
	console.log(offsetX, offsetY)
	if(offsetX< 73 && offsetY< 52){
		gameOver.innerHTML = "Game Over!! - Restart"
		obstacle.classList.remove('obstacleAni');
		audiogo.play();
		setTimeout(() => {
			audiogo.pause();
		}, 1000);
	}
	else if(offsetX< 145 && cross){
		score+=1;//if not not collison//
		updateScore(score); //call score method//
		cross = false;
		setTimeout(() => {
			cross = true;
		}, 1000);//timer for when they cross each other//
		setTimeout(() => {
		aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
		newDur = aniDur - 0.1;
		obstacle.style.animationDuration = newDur + 's';//for obstacle speed through new variable like aniDur and newDur//
		console.log('New animation duration: ', newDur)
		}, 500);//this set timer for vibration in ninja during running time//
	
	}


}, 10);//set interval used for collison purpose of object/character//
function updateScore(score){
	scorecont.innerHTML = "Your score: " + score //for score assumption//
}