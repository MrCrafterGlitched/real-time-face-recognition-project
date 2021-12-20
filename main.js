function preload() {
    
}
function setup() {
    canvas=createCanvas(500,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Zv00hYFv5/",model_loaded)
}
function model_loaded() {
    console.log("Model has been loaded")
}
function draw() {
image(video,0,0,500,300)
classifier.classify(video,getResult)
}
function getResult(error,results) {
    if (error) {
        console.log(error)
    }else{
        console.log(results)
        document.getElementById("Object_name").innerHTML=results[0].label
        document.getElementById("Object_Accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}