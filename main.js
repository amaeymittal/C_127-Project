song1 = ""
song2 = ""
var rightwrist_x
var rightwrist_y
var leftwrist_x
var leftwrist_y
function preload(){
    song1 = loadSound("song1.mp3")
    song2 = loadSound("song2.mp3")
}
function setup(){
    canvas = createCanvas(600,500)
    canvas.center();

    video = createCapture(VIDEO)
    video.hide()

    pose_net = ml5.poseNet(video,modelLoaded)

    pose_net.on('pose',getPoses)

}
function draw(){
    image(video,0,0,600,500)
}
function modelLoaded(){
    console.log("pose net is initialized");
}
function getPoses(results){
    if (results.length > 0){
        console.log(results);
        rightwrist_x = results[0].pose.rightWrist.x
        rightwrist_y = results[0].pose.rightWrist.y
        leftwrist_x = results[0].pose.leftWrist.x
        leftwrist_y = results[0].pose.leftWrist.y
        console.log("RightWrist x="+rightwrist_x+"RightWrist y="+rightwrist_y)
        console.log("leftWrist x="+leftwrist_x+"leftWrist y="+leftwrist_y)
    }
}