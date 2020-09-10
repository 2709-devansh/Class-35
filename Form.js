class Form{
	constructor(){
		
	}
	display(){
		var title = createElement('h2');
		title.html("Car Racing Game");
		title.position(50,20);
		var input = createInput("Name");
		var Button = createButton("Play");
		var greeting = createElement('h3');
		input.position(80,90);
		Button.position(80,150);
		Button.mousePressed(function(){
			input.hide();
			Button.hide();
			var Name = input.value();
			playerCount = playerCount+1;
			player.updateName(Name);
			player.updateCount(playerCount);
			greeting.html(" Hello "+Name);
			greeting.position(250,250);
		})
	}
}