
let socket;

function setup() {
    createCanvas(420,420);
    background(68, 55, 55);

    socket = io.connect('http://localhost:3000');
    socket.on('mouse', newDrawing);


}

function newDrawing(data){
    noStroke();
    fill(255, 0, 100);
    ellipse(data.x, data.y, 10, 10);
    
}

function mouseDragged() {
    console.log('Sending: ' + mouseX + ',' + mouseY);

    const data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse', data);

    noStroke();
    ellipse(mouseX, mouseY,10, 10);
    fill(255);
}

function draw() {
    rect(155, 65, 10, 290, 20);
    rect(255, 65, 10, 290, 20);
    rect(65, 155, 290, 10, 20);
    rect(65, 255, 290, 10, 20);

}
