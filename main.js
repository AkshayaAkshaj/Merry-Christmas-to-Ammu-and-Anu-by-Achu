var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById('myAudio');

function new_image()
{
fabric.Image.fromURL('MC.gif',function(Img){
    block_image_object =Img;


    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeight(510);
    block_image_object.set({
        top:0,
        left:0
    });
    canvas.add(block_image_object)	;

})	;

}

function giveResult(){
	x.play();
    mc1='<img id="mc1" src="MC1.jpeg" style="width:700;height:900;"></img><br><br>';
    mc2='<img id="mc2" src="MC2.jpeg" style="width:700;height:900;"></img><br><br>';
    mc3='<img id="mc3" src="MC3.jpeg" style="width:700;height:900;"></img><br><br>';
    mc4='<img id="mc4" src="MC4.jpeg" style="width:700;height:900;"></img><br><br>';


    document.getElementById("result").innerHTML=mc1+mc2+mc3+mc4;
}