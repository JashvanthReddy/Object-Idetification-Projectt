img= ""

function preload(){
    img= loadImage('download.jpg')
}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHMTL= "status: Detecting Objects"
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#6a5acd");
    stroke("6a5acd");
    noFill();
    text("bus", 45, 75);
    rect(30,30,450,350);

    fill("#00BFFF");
    stroke("#00BFFF");
    noFill();
    text("car", 330, 75);
    rect(300, 50, 450, 350);
}

function modelLoaded(){
    console.log("modelLoaded");
    status= true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}