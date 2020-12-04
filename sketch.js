const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var pig1;
var pig2;
var pig3;
var log1;
var log2;
var log3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,50);
    box3 = new Box(260,120,50,50);
    box4 = new Box(280,140,50,50);
    ground = new Ground(200,height,400,20)
    pig1 = new pig(220,200,30,30);
    pig2 = new pig(250,150,30,30);
    pig3 = new pig(270,170,30,30);
    log1 = new log(200,350,20,100,PI/6);
    log2 = new log(220,370,20,100,PI/6);
    log3 = new log(240,390,20,100,PI/6);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    pig3.display();
    log1.display();
    log2.display();
    log3.display();
}