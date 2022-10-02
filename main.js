hairofsetx=""
hairofsety=""
clown_hair= ""
noseofsetx=""
noseofsety=""
clown_nose=""
nosex=""
nosey=""
function preload(){
clown_nose=loadImage("clown_nose_img.jpg")
clown_hair=loadImage("clown_hair_img.jpg")
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
image(clown_nose,noseofsetx,noseofsety,40,40)
image(clown_hair,hairofsetx,hairofsety,150,150)
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
        noseofsetx=nosex-20
        noseofsety=nosey-20
        hairofsetx=nosex-20
        hairofsety=nosey-150
    }

 }
 

   
