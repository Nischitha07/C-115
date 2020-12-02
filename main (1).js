function preload(){

}
function setup(){
    canvas = createCanvas(500 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500 , 400);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function draw(){
image(video , 0 , 0 , 500 , 400);
}
function take_snapshot()
{
    save("Filter_snapshot.png");
}
function modelLoaded()
{
    console.log("modelLoaded");
}
function gotPoses(results)
{
console.log("Pose Net has initialized");
if(results.length > 0)
{
 console.log(results);
 console.log("nose x = " + result [0].pose.nose.x);
 console.log("nose y = " + result [0].pose.nose.y);
}
}