canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

img_array=["1.jpg","2.jpg","3.jpg","4.jpg"];

random_number=Math.floor(Math.random() *4);
console.log(random_number);

rover_w=100;
rover_h=90;

bg_img=img_array[random_number];
console.log("bg_img="+bg_img);
rover_img="rover.png";

rover_x=10;
rover_y=10;

function add(){
    bg_imgtag=new Image();
    bg_imgtag.onload=uploadBackground;
    bg_imgtag.src=bg_img;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadRover;
    rover_imgtag.src=rover_img;
}

function uploadBackground(){
    ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_w,rover_h);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        up();
        console.log("up");
    }
    if(keypressed=="40"){
        down();
        console.log("down");
    }
    if(keypressed=="37"){
        left();
        console.log("left");
    }
    if(keypressed=="39"){
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed, x="+rover_x+",y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed, x="+rover_x+",y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed, x="+rover_x+",y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed, x="+rover_x+",y="+rover_y);
        uploadBackground();
        uploadRover();
    }
}