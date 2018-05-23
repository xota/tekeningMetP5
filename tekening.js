var achtergrond = 220;

function setup() {
	createCanvas(400, 400);
}
    	
function draw() {
	background(achtergrond);
	achtergrond += 1;
	achtergrond %= 255; //rest modulo 255 om waarde tussen 0 en 255 te krijgen

	noFill();
	rect(50, 50, 200, 200);
	fill(255, 0,0); //rood
	rect(60, 60, 180, 180);
	fill(0,0,255); //blauw
	ellipse(200,200,100,50);
        
}
    
