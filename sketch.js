//Create variables here
var doghappy,dogimage,dog,database,foodstock,gravity
function preload()
{doghappy = loadImage("./images/dogImg1.png")
dogimage = loadImage("./images/dogImg.png")
	//load images here
}

function setup() {

  createCanvas(600, 600);
 dog = createSprite(300,300,30,30)
 dog.addImage(dogimage)
 dog.scale = 0.12
  database = firebase.database()
  gravity = 10
  database.ref("Food").on("value",(data)=>{
foodstock = data.val()


  })
  
}


function draw() {  
background("red")
if (keyDown("UP_ARROW")&&foodstock>0) {
  dog.addImage(doghappy)
  writestock(foodstock)
 
} else {
  dog.addImage(dogimage)
  
}

  drawSprites();
  //add styles here
text("FOOD: "+foodstock,300,250)


}
function writestock(x){
  if(x>0){
    x-=1
  }
  else{
    x = 0
  }
  database.ref("/").update({
    Food:x
  })
}

