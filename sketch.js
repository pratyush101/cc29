const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var grouns1;
var ground2, ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25,block26,block27,block28,block29,block30;
var block31,block32;
var block33,block34,block35,block36,block37,block38,block39,block40;
var block41,block42,block43,block44,block45,block46,block47,block48,block49,block50;
var block51;
var ball;
var chain;
var ballimage;


function preload(){


ballimage =loadImage("polygon.png");

}

function setup()
{

        createCanvas(1200,700);
        engine = Engine.create(); // create copy of the world 
        world = engine.world;
        Engine.run(engine);

        grouns1 = new Ground(600,height,1200,20);
       
        ground2 = new Ground(500,500,300,10);
        ground3 = new Ground(900,300,300,10);
/*
500 x pos = 1st box
1st box = width = 30 = chaudaai.

2nd box = 500 +30 = 530
3rd box = 530+30 = 560
*/

        

        block1 = new Block(500,475,30,40);
        block2 = new Block(530,475,30,40);
        block3 = new Block(560,475,30,40);
        block4 = new Block(590,475,30,40);
        block5 = new Block(620,475,30,40);


        block6 = new Block(410,475,30,40);
        block7 = new Block(440,475,30,40);
        block8 = new Block(470,475,30,40);
        block9 = new Block(380,475,30,40);

        block10 = new Block(590,435,30,40);
        block11 = new Block(410,435,30,40);
        block12 = new Block(441,435,30,40);
        block13 = new Block(470,435,30,40);
        block14 = new Block(500,435,30,40);
        block15 = new Block(530,435,30,40);
        block16 = new Block(560,435,30,40);

        block17 = new Block(560,395,30,40);
        block19 = new Block(530,395,30,40);
        block20 = new Block(499,395,30,40);

        block21 = new Block(438,395,30,40);
        block22 = new Block(470,395,30,40);

        
        block23 = new Block(495,355,30,40);
        block24 = new Block(465,355,30,40);
        block25 = new Block(525,355,30,40);
        block26 = new Block(495,315,30,40);

        block27 = new Block(900,275,30,40);
        block28 = new Block(870,275,30,40);
        block29 = new Block(840,275,30,40);
        block30 = new Block(810,275,30,40);
        block31 = new Block(780,275,30,40);
        block32 = new Block(930,275,30,40);
        block33 = new Block(960,275,30,40);
        block34 = new Block(990,275,30,40);
        block35 = new Block(1020,275,30,40);
        block36 = new Block(900,235,30,40);
        block37 = new Block(870,235,30,40);
        block38 = new Block(840,235,30,40);
        block39 = new Block(810,235,30,40);
        block40 = new Block(930,235,30,40);
        
        block41 = new Block(960,235,30,40);
        block42 = new Block(990,235,30,40);
        block43 = new Block(960,195,30,40);
        block44 = new Block(930,195,30,40);
        block45 = new Block(899,195,30,40);
        block46 = new Block(870,195,30,40);
        block47 = new Block(840,195,30,40);

        block48 = new Block(930,155,30,40);
        block49 = new Block(900,155,30,40);
        block50 = new Block(870,155,30,40);

        block51 = new Block(900,115,30,40);

        ball = Bodies.circle(50,200,20);
        World.add(world,ball);

        chain = new Slingshot(this.ball,{x:100,y:200});
       


        

} 

function draw()
{
        background("blue");


        grouns1.display();

        ground2.display();
        ground3.display();


        // bottom flour
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        block8.display();
        block9.display();

        // middle flour
        block10.display();
        block11.display();
        block12.display();
        block13.display();
        block14.display();
        block15.display();
        block16.display();
        block17.display();
        block19.display();
        block20.display();
        
        // sec middle flour
        block21.display();
        block22.display();

        
        block23.display();
        block24.display();
        block25.display();
        block26.display();
        block27.display();
        block28.display();
        block29.display();
        block30.display();
        block31.display();
        block32.display();

        block33.display();
        block34.display();
        block35.display();
        block36.display();
        block37.display();
        block38.display();
        block39.display();
        block40.display();
        
        block41.display();
        block42.display();
        block43.display();
        block44.display();
        block45.display();
        block46.display();
        block47.display();
        block48.display();
        block49.display();
        block50.display();
        block51.display();

      //  ball.display();

        

        imageMode(CENTER);
        image(ballimage,ball.position.x,ball.position.y,40,40);

        chain.display();



      

        drawSprites();
}


function mouseDragged(){


Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});


}

function mouseReleased(){


chain.fly();


}


function keyPressed(){

        if(keyCode === 32){
      
            chain.attach(ball.body);
      
        }
      
      
      }

