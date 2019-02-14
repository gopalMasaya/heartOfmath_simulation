var total = 200;
var r;
var factor = 1;
var slider1,slider2;
var font;

function getVector(index){
	let angle = map(index % total,0,total,0,TWO_PI);
	let v = p5.Vector.fromAngle(angle+PI);
	v.mult(r);

	return v;
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	r= width/5;
font = loadFont('assets/dancingscript-regular.otf');
slider1 = createSlider(0, 0.02, 0.01,0.001);
slider1.position(100, 50);
slider1.style('width', '200px');

slider2 = createSlider(10,400, 200,2);
slider2.position(100, 100);
slider2.style('width', '200px');

textFont(font);
}

function draw() {
background(20);
fill(217,179,16);
textSize(28);
text("speed",20,60);
text("points",20,110);
noFill();
	var val1 = slider1.value();
  var val2 =slider2.value();
	factor+= val1;
	total = val2;
translate(width/2,height/2);
ellipse(0,0,r*2,r*2);
	for(let i= 0; i< total;i++){
	let angle = map(i,0,total,0,TWO_PI);
	var x = r*cos(angle);
	var y = r* sin(angle);
	noStroke(); fill(255);
	ellipse(x,y,10,10);
	stroke(217,179,16);noFill();
	}

		for(let i= 0; i< total;i++){

let a = getVector(i);
let b = getVector(i*factor);
line(a.x,a.y,b.x,b.y);
		}

}
