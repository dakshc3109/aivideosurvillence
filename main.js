//main.js
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
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects"
}

function modelLoaded(){
    console.log("model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}