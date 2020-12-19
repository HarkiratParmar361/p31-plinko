var engine, world
var particles =[];
var plinkos=[];
var divistions=[];
var divistionHeight=300;


function setup() {
  createCanvas(480,800);
  createSprite(400,200,50,50);
}

function draw(){
  background(255,255,255);  
  drawSprites();
  for(var k= 0;k<=width;k=k+80){
    divistions.push(new divistions(k,height-divistions/2,10,divistionHeight));

    for (var j=40; j<=width;j=j+50);
    {
      plinkos.push(newPlinko(j,75));
    }
 for (var j=15;j<=width-10;j=j+50);
  }
  {
    plinkos.push(newPlinko(j,175));
  }
}
for (varj=0; j<particles.length;j++){
  particles[j].display();
  }
for (var k=0;k<divistions.length;k++){
  divistions[k].display();
}
if(framecount%60===0){
  particles.push(newParticles(random(width/2+10),10,10));
}