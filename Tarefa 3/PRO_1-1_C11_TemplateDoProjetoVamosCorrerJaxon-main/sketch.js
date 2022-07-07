var path,boy, leftBoundary,rightBoundary, leftinvisivel,rigthinvisivel;
var pathImg,boyImg;



function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path = createSprite(170,400,);
path.addImage("pista", pathImg);




//Criando menino que corre 
boy = createSprite(200,200,)
boy.addAnimation("correndo", boyImg);
boy.scale = 0.09

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
leftinvisivel = createSprite(0,0,100,800); 
leftinvisivel.visible = false;
  

//Crie Boundary direito 
rightBoundary=createSprite(360,400,100,800);
rightBoundary.visible = false;
rigthinvisivel = createSprite(360,400,100,800); 
rigthinvisivel.visible = false;
  
}


function draw() {
background(0);
path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);
boy.collide(rightBoundary);
boy.collide(leftBoundary);
boy.isTouching(leftinvisivel);
boy.isTouching(rigthinvisivel);
boy.x = World.mouseX;

 //Reiniciar o fundo

 if(path.y < 400){
    path.y = path.width/2;         
  }

 drawSprites();

 }




