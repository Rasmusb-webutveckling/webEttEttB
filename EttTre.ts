const colorList : string[] = ["red", "green", "yellow", "blue"];

function start():void {
    const interations:number = 500;

    for (let index:number = 0; index < interations; index++){
        line(random(200), random(200), random(200), random(200), 2, getRandomColor());
    }
}


function getRandomColor():string{
    return randomElement(colorList);
}




function rectangle(x,y,z,a,b):void{}
function random(x:number):number{return 0;}
function line(x1,y1,x2,y2,r,c):void{}
function randomElement(x:string[]):string{return "";}