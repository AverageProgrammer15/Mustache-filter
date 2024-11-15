// noseX = 0
// noseY = 0

// function preload(){
//     clown_nose =loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png')
// }

// function setup(){
//     canvas = createCanvas(300,300)
//     canvas.center();
//     video = createCapture(VIDEO);
//     video.size(300,300);
//     video.hide();

//     poseNet = ml5.poseNet(video,modelLoaded);
//     poseNet.on('pose',gotPoses)
// }

// function gotPoses(results){
//     if(results.length>0){
//         console.log(results)
//         noseX = results[0].pose.nose.x
//         noseY = results[0].pose.nose.y
//         console.log("nose x ="+ results[0].pose.nose.x)
//         console.log("nose y ="+ results[0].pose.nose.y)
//     }
// }

// function modelLoaded(){
//     console.log('PoseNet Is Initialized');

// }

// function draw(){
//     image(video,0,0,300,300)
//     // fill(255,0,0)
//     // stroke(255,0,0)
//     // circle(noseX,noseY,20)
//     image(clown_nose,noseX,noseY,30,30)
// }

// function take_snapshot(){
//     save('myFilterImage.png')
// }


noseX=0;
noseY=0;
results=0;
function preload(){
    clown_nose = loadImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAADq6uonJyfv7+/6+voXFxcEBAQLCwv29vbBwcGqqqrKysolJSWzs7Pn5+cREREbGxt6enpKSkptbW3f398gICC9vb3X19eenp4/Pz9RUVGlpaWvr68vLy9dXV1oaGiNjY02NjaWlpaEhIRERER1dXVgYGCQkJBNTU2ZmZlF/WvzAAADgElEQVR4nO3aaXOqMBSA4UbQyiIi4oa2uNf6/3/gRcQRLbLEoJeZ9/nQTiGBcyRkqx8fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADURbet48zpZ5xpm5ZlZp1okulqIM7W5t2pvn8+0d2M3hKaEl/fImWYzkT34mPueOwKEdxn3xCWuBfayanpOT/hah23N+iMhdbAHO2O+Pz8k6MIlvvl7vKHq3WF+NREJ/o1bL074opW8SuWkWLaoHP6qSWlJu+OuYrRMOlF8lPsalE/NOhd/twb7467LDO85lCUYqejpYp403fHntI29FZEN4x26mDLnoW3ORQ+xbsCvjXVb29zuo+uv/D5tszjfji4i9Qda9/aODOHghR7mUejy/UG3bujvbm3sGvO1HD83HizuAUpVr1ex6tvZDHD4vtn5VDQo0rY1/K+WtKB1pCiWNvFEVdjVm5NKXWkKHZKp7Ptn+eiqSVFcVCX4OjpYOpJMVDVsU4UBFNLhkKoWV06SmKpKUUVL6OKJ1ij55/i9N0pFGkX55DLUB3QdldcppLhkxnOFcfzq/4zOz6VoJpe5moXXVNXfM2nXsV2+kK+M4rbvD798jJXBMXm8VV1V652sJ2M4hHQmFrptvVMOz1cL2PdvtEtR2Iavr98cIFEXfN2eNdX13Pyc9TrI9xknZ5UnMs516rbajW9rByM5eV0IJ3hLLnC+FFLbzvD0lHebqbZ5Vvq8uF60LwUkV5MJeuJeV6Z1kwrFeefnbRNuc/FyRvvWkmE+5wyeZLBPiwqNzpk7l+kDKyMau1DQS0RLPSMemlGsp0il2DyspTqqUab9eNAfx72BHmNfG6V2SNOhh7JjY24+bllS+uTbUaWA8/MnVbpX8u/lcT8YJedjJ1Xdl7ZKG9vHtetNnkfmYutPw807TuY+yur3M5Yy15sl7/rU6VwH1Wqtr8f/3tkXKnKhX2qqnAdXZe4pUvNvxdPvMKv1D/FKTVenDoap7jY++1luxo/WpirDqYWp4eYNRwVCh9M1v4/0Zs4k6kXqtroqZ0jmeFSaKpDqUk0ri1k6nliqzqUunzLdYnHZvSkJ57cEnEivyh5tZkomqJn6ovGfD1iIjkzEc355oAvV89vToaS31SxGzIcRhnKPovGPMPGBAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeJl/4sQo3tu2EBcAAAAASUVORK5CYII=');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet Is Initialized');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y+20;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
        
    }
}
function draw(){
    image(video,0 , 0,300 ,300)
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX,noseY, 20);
    image(clown_nose, noseX, noseY, 30, 30);
}
function take_snapshot(){
    save("myFilterImage.png");
}