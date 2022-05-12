img4 = "";
status44 = "";
objects4 = [];

function setup()
{
    canvas = createCanvas(600, 380);
    canvas.center();
    oneshot4 = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status4").innerHTML = "Detecting Objects";
}

function modelLoaded()
{
    console.log("Coco SSD Model is loaded!");
    status44 = true;
    oneshot4.detect(img4, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
      console.log(error);
    }
    else
    {
      console.log(results);
      objects4 = results;
    }
}

function preload()
{
    img4 = loadImage("fruitbasket.jpg");
}

function draw()
{
    image(img4, 10, 10, 600, 380);
    if(status44 != "empty")
    {
       for(i = 0; i < objects4.length; i++)
       {
           fill("orange")
           text(objects4[i].label, objects4[i].x, objects4[i].y);
       }
    }
}