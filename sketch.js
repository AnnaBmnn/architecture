let tileWidth;
let tileHeight;
let tileCountY;
let tileCountX;
let imgTiles = [];
let cropX;
let cropY;
let imgGreen;
let imgCity;
let imgCityWidth;
let imgCityHeight;

function preload() {
  // Image source: https://unsplash.com/photos/cC3PtGqsh8Q by Paul Dufour
  imgCity = loadImage(
    "https://images.unsplash.com/photo-1557050116-c23b16277b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
  );
  imgGreen = loadImage(
    "https://images.unsplash.com/photo-1555600341-3f6805f22b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=80"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);

  imgCityWidth = imgCity.width;
  imgCityHeight = imgCity.height;
  // tileWidth = 50;
  // tileHeight = 50;
  // tileCountX = Math.floor(width / tileWidth);
  // tileCountY = Math.floor(height / tileHeight);
  tileCountX = 20;
  tileCountY = 15;
  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;

  cropTiles();
}

function cropTiles() {
  imgTiles = [];
  for (let gridY = 0; gridY < tileCountY; gridY++) {
    for (let gridX = 0; gridX < tileCountX; gridX++) {
      cropX = int(random(imgCityWidth * 0.4, imgCityWidth * 0.6));
      cropY = int(random(imgCityHeight * 0.5, imgCityHeight * 0.6));
      imgTiles.push(imgCity.get(cropX, cropY, tileWidth, tileHeight));
      image(
        imgCity.get(cropX, cropY, tileWidth, tileHeight),
        gridX * tileWidth - 1 * gridX,
        gridY * tileHeight - 1 * gridY,
        0,
        0
      );
    }
  }
}

function drawTiles() {
  for (let i = 0; i < imgTiles.length; i++) {
    let _gridX = i % tileCountX;
    let _gridY = ~~(i / tileCountX);
    let _x = tileWidth * _gridX - _gridX;
    let _y = tileHeight * _gridY - _gridY;
    image(imgTiles[int(random(imgTiles.length))], _x, _y);
  }
}

function draw() {
  background(255);
  // cropTiles();
  drawTiles();
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("mySketch", "jpg");
  }
}
