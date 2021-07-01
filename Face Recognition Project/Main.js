
//Fixing the camera settings.
Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 100
});

//They say we need this to activate the webcam but last class we didnt use this and it went fine. But i want good grades so here it is.
camera = document.getElementById("camera")

//Attaching camera so it appears on screen
Webcam.attach('#camera');

//Capture function so that we can get the picture. We are also displaying it.
function Capture(){
    Webcam.snap(function(data_uri){
        console.log(data_uri);
        document.getElementById("result").innerHTML = `<img id="pic" src="` + data_uri + `">`
    });
}

//Checking the ml5 version.
console.log(ml5.version);

//Not sure what this is. It was in the video so now its here.
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_WopVxN_7/model.json',modelLoaded);

//Identify function still a work in progress.
function identify(){

}