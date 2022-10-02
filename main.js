hairofsetx=""
hairofsety=""

noseofsetx=""
noseofsety=""

nosex=""
nosey=""
function preload(){

}
function setup(){
canvas= createCanvas(500,500)
canvas.position(500,200)
video= createCapture(VIDEO)
video.size(500,500)
video.hide()
posenet=ml5.poseNet(video,modelloaded) 
posenet.on("pose",gotPoses)
}
function draw(){
image(video,0,0,500,500)

//fill("red")//
//circle(nosex,nosey,40)//
}
 function modelloaded() {
    console.log("The Model had Loaded")
}
 function gotPoses(result){
    if (result.length > 0)
    {console.log(result)
        nosex=result[0].pose.nose.x
        nosey=result[0].pose.nose.y
       
       
 }
 

   
