img = "";
status1 = "";
objects = [];

function setup()
{
    canvas = createCanvas(600, 380);
    canvas.center();
    oneshot = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded()
{
    console.log("Coco SSD Model is loaded!");
    status1 = true;
    oneshot.detect(img, gotResults);
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
      objects = results;
    }
}

function preload()
{
    img = loadImage("bedroomsupreme.jpg");
}

function draw()
{
    image(img, 10, 10, 600, 380);
    if(status1 != "empty")
    {
       for(i = 0; i < objects.length; i++)
       {
           fill("orange")
           text(objects[i].label, objects[i].x, objects[i].y);
       }
    }
}