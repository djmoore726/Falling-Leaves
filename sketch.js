// let shapeX = 0
// let shapeY = 100
// let shapeSize = 30

// let bubbleX
// let bubbleY
// let bubbleSize = 800
// let bubbleImage

// let timer = 0
// let increment = 0.2

// let bubble2X
// let bubble2Y
// let bubble2Size = 800
// let bubble2Image

// let treeImg;

// function preload() {
//   treeImg = loadImage('deadtree.png');
// }

// function preload(){
//   bubble2Image = loadImage("bubble.png")
//    bubble2Image = loadImage("bubble.png")
//     bubble2Image = loadImage("bubble.png")
//      bubble2Image = loadImage("bubble.png")
// }

// function preload(){
//   bubbleImage = loadImage("bubble2.png")
//    bubbleImage = loadImage("bubble2.png")
//     bubbleImage = loadImage("bubble2.png")
//      bubbleImage = loadImage("bubble2.png")
// }

// function setup(){
//   bubbleX = windowWidth/2
//   bubbleY = windowHeight/2

//   bubble2X = windowWidth/2
//   bubble2Y = windowHeight/2

//   createCanvas(windowWidth, windowHeight)
//   background("deadtree.png")
// }

// function draw(){
//   timer = timer + increment
// }


// // function setup() {
// //   createCanvas(windowWidth, windowHeight);
// //   background(0)
// // }

// function draw() {

//   background("deadtree.png");
//   // circle(shapeX, shapeY, shapeSize)
//   //  circle(shapeX, 20, shapeSize)
//   //   circle(shapeX, 0, shapeSize)
//   //   circle(shapeX, 40, shapeSize)
//   //   circle(shapeX, 60, shapeSize)
//   //   circle(shapeX, 80, shapeSize)
//   //   circle(shapeX, 100, shapeSize)
    

  
//   shapeX = shapeX + 0.3
//   fill(97, 55, 36)
//   stroke(97, 55, 36)
//   rect(110, 100, 50, 900)
//   rect(170, 100, 50, 900)
//   rect(230, 100, 50, 900)
//   rect(290, 100, 50, 900)
//   rect(350, 100, 50, 900)
//   rect(410, 100, 50, 900)
  

//    fill(6, 99, 54)
//    stroke(255, 0, 255)
 
   
//    timer = timer + increment
//   image(bubbleImage, 100 ,timer, 100, 100)
//   image(bubbleImage, 200 ,timer, 100, 100)
//   image(bubbleImage, 300 ,timer, 100, 100)
//   image(bubbleImage, 400 ,timer, 100, 100)

//    timer = timer + increment
//   image(bubbleImage, 100 ,timer, 100, 100)
//   image(bubbleImage, 200 ,timer, 100, 100)
//   image(bubbleImage, 300 ,timer, 100, 100)
//   image(bubbleImage, 400 ,timer, 100, 100)
// }

// function mousePressed(){
//   bubbleSize = bubbleSize + 10
// }

let bubbleImage;
let treeImg;

let bubbles = [];
let increment = 0.2;
let kahootMusic;

function preload() {
  bubbleImage = loadImage("bubble2.png");
  treeImg = loadImage("deadtree.png");
  kahootMusic = loadSound("kahootmusic.m4a"); // Load the audio file
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(treeImg);

  // Create an array of bubbles with random Y positions
  for (let i = 0; i < 7; i++) {
    let yPos = random(height); // Random starting Y position
    bubbles.push(new Bubble(i * 100 + 100, yPos)); // Spread bubbles horizontally
  }

  // Start audio playback on mouse click
  userStartAudio().then(() => {
    kahootMusic.setLoop(true); // Loop the audio
    kahootMusic.setVolume(10); // Set volume (0.0 to 1.0)
    kahootMusic.play(); // Play the audio
  });
}

function draw() {
  background(treeImg);

  // Update and display each bubble
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
  }
}

// Bubble class to handle individual bubble behavior
class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 100;
    this.speed = increment;
  }

  update() {
    this.y += this.speed; // Move the bubble down
    if (this.y > height) {
      this.y = -this.size; // Reset to top if it goes off screen
    }
  }

  display() {
    image(bubbleImage, this.x, this.y, this.size, this.size);
  }
}
