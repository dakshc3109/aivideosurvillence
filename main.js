//main.js
objects = [];
var status = "";
var video = "";

function preload(){
    video = createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas = createCanvas(480 ,320);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 480, 320);
    if(status != ""){
        objectDetector.detect(video, gotResults);
        for(i = 0; i < objects.length ; i++){
            fill("#ff0000");
            percentage = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percentage + "%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            document.getElementById("status").innerHTML = "Objects Detected";
            document.getElementById("name-of-objects").innerHTML = "Number of objects detected "+objects.length;
        }
    }
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded(){
    console.log("model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResults(error, results){
    if(error){
        console.error();
    }
    else{   
         //console.log(results);
        objects = results;
        console.log(objects);
    }
}