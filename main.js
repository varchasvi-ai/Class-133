img = " ";
status = "";
objects = [];

function setup()
{
    canvas = createCanvas(500,600);
    canvas.position(500,250);
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function preload()
{
    img = loadImage("dog_cat.jpg");
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
        
    }
    else
    {
        console.log(results); 
    }
    
    objects = results;

}



function draw()
{
    image(img, 0 ,0, 640, 420);

    if(status != "")
    {
        for(i=0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("FF0000");
            percent = floor(objects[i].confidence = 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("FF0000");
            rect(objects[i].x , objects[i].y, objects[i].width, objects[i].height);
            }
    }


}
