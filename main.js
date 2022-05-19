bird = 0;
cat = 0;
dog = 0;
lion = 0;

function startClassifier() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sZ_J44bSc/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        red = Math.floor(Math.random() * 255) + 1;
        green = Math.floor(Math.random() * 255) + 1;
        blue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("results_count").innerHTML = "Dog = " +  dog  + '<br>' +  "Cat = " +  cat + '<br>' + "Lion = " + lion + '<br>' + "Bird = " + bird;
        document.getElementById("results_label").innerHTML = "Detected sound is of - " + results[0].label;
        document.getElementById("results_count").style.color = "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("results_label").style.color = "rgb(" + red + "," + green + "," + blue + ")";

        img = document.getElementById("pic");

        if (results[0].label == "Dog") {
            img.src = "dog gif.gif";
            dog = dog + 1;
        } else if (results[0].label == "Cat") {
            img.src = "cat gif.gif";
            cat = cat + 1;
        } else if (results[0].label == "Lion") {
            img.src = "lion gif.gif";
            lion = lion + 1;
        } else if (results[0].label == "Bird") {
            img.src = "bird gif.gif"
            bird = bird + 1;
       } else {
            img.src = "hear.jpg"
       }
    }
}
