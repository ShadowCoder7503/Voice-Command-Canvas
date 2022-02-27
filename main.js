x = 0;
y= 0;
circle1="";
rectangle="";
triangle1="";
function setup(){
    canvas = createCanvas(900,600);
}
var speechRecognition = window.webkitSpeechRecognition;
var recognition =new speechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening....";
    console.log("Speech Recognition has started");
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
     var content = event.results[0][0].transcript;
     document.getElementById("status").innerHTML = "The speech has been recognized as "+content;
     if(content == "rectangle"){
           x =Math.floor(Math.random()*900);
           y =Math.floor(Math.random()*600);
           document.getElementById("status").innerHTML ="Started drawing Rectangle";
           rectangle ="set"
     }
  if(content == "circle"){
    x =Math.floor(Math.random()*900);
    y =Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML ="Started drawing circle";
    circle1 ="set";
}
if(content == "triangle"){
    
    document.getElementById("status").innerHTML ="Started drawing triangle";
   triangle1 ="set";
}
}
function draw(){
    if(circle1=="set"){
        radius=Math.floor(Math.random()*200);
    circle(x,y,radius);
    document.getElementById("status").innerHTML ="Circle has been drawn";
    circle1="";
    }
    if(rectangle=="set"){
        height=Math.floor(Math.random()*200);
        width=Math.floor(Math.random()*300);
    rect(x,y,height,width);
    document.getElementById("status").innerHTML ="Rectangle has been drawn";
    rectangle="";
    }
    if(triangle1=="set"){
    triangle(100,250,250,170,330,300);
    document.getElementById("status").innerHTML ="Triangle has been drawn";
    triangle1="";
    fill("red");
    }
}