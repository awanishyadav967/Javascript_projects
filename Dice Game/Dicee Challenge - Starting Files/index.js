var n=Math.floor(Math.random()*6)+1;
var random_dice_image="dice"+n+".png";

var random_dice_show="images/"+random_dice_image;

var img11=document.querySelectorAll("img")[0];

img11.setAttribute("src",random_dice_show);

//for 2nd Dicee

var n2=Math.floor(Math.random()*6)+1;
var random_dice_image2="images/dice"+n2+".png";

document.querySelectorAll("img")[1].setAttribute("src",random_dice_image2);

if(random_dice_show>random_dice_image2){
document.querySelector("h1").innerHTML="Player 1 Win";

}
else if(random_dice_show<random_dice_image2){
document.querySelector("h1").innerHTML="Player 2 Win";

}
else{
document.querySelector("h1").innerHTML="Game Tie";

}
