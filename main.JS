var mouseevent="empty";
var lastpostionofX,lastpostionofY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
linewidth=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(m){
    console.log("mymousedown");
    mouseevent="mousedown";
    color=document.getElementById("color").value;
    linewidth=document.getElementById("linewidth").value;
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(m){
    currentpostionofX=m.clientX-canvas.offsetLeft;
    currentpostionofY=m.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=linewidth;
        ctx.moveTo(lastpostionofX,lastpostionofY);
        ctx.lineTo(currentpostionofX,currentpostionofY);
        ctx.stroke();
    }
    lastpostionofX=currentpostionofX;
    lastpostionofY=currentpostionofY;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(m){
    mouseevent="mouseup";

}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(m){
     mouseevent="mouseleave";
}
function clear_area(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);    
}