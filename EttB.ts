function start():void {
    circle(20,12,20,"yellow"); //head
    circle(17,10,10,"black");   //eye left
    circle(23,10,10,"black");   //eye right

    

    rectangle(14,22,12,"blue"); //body
    
    rectangle(6,26,10,2,"blue").rotate(45); //arm left
    rectangle(22,26,10,2,"blue").rotate(45); //arm right

    rectangle(16,42,2,10);  //leg left
    rectangle(22,42,2,10);  //leg right

}