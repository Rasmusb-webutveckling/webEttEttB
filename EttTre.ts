const colorList : string[] = ["red", "black", "orange", "blue"];

function start():void {
    const interations:number = 200;

    for (let index:number = 0; index < interations; index++){
        rectangle(random(200), random(200), 10, 10, "blue");
    }
}


function getRandomColor():string{
    return randomElement(colorList);
}




function rectangle(x,y,z,a,b):void{}
function random(x:number):number{return 0;}
function randomElement(x:string[]):string{return "";}