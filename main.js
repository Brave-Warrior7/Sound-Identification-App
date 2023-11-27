function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    calssifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cwsmfaaC6/model.json', modelReady);
}

function modelReady(){
    calssifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
      console.log(error)
    }
    else{
console.log(results);

random_number_r = Math.floor(Math.random() * 255) +1;
random_number_g = Math.floor(Math.random() * 255) +1;
random_number_b = Math.floor(Math.random() * 255) +1;

document.getElementById("result").innerHTML=results[0].label;
document.getElementById("result").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    console.log(results)
    img1=document.getElementById("gif");
  
    
    if(results[0].label=="zzz"){
    img1.src="zzz.jpg";
    img1.height=250;
    img1.width=300;

    } 
    else if (results[0].label=="clap"){
    img1.src="R.jpg";
    img1.height=300;
    img1.width=300;

    }
    else{
        img1.src="bg-noise.jpg";
        img1.height=200;
        img1.width=300;
    }
    
}}
