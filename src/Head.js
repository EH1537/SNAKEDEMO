class Head {

  constructor($el) {
    this.node = $('<img id="head"></img>');
    this.node.attr('src', 'src/assets/SSJ0 Goku.png');
    this.currentDirection = 'right';
    this.SPEED = 250;
    $el.append(this.node);
    this.node.css({ top: 0, left: 0 });    
  }
transform(count){
  
  if (count == 3){
    this.node.attr('src', 'src/assets/Goku KaoKen.png');
    this.SPEED -= 25;
  }
  else if (count == 5){
    this.node.attr('src', 'src/assets/SSJ1 Goku.png');
    this.SPEED -= 25;
  }
  else if (count == 8){
    this.node.attr('src', 'src/assets/SSJ2 Goku.png');
    this.SPEED -= 25;
  }
  else if (count == 13){
    this.node.attr('src', 'src/assets/SSj3 Goku.png');
    this.SPEED -= 25;
  }
}

 move() {
    let direction = this.currentDirection;
    let position = this.node.position();
    if (direction === 'right') {
      position.left += 50;
      this.left += 50;
    }
    if (direction === 'left'){
      position.left -= 50;
      this.left -= 50;
    }
    if (direction === 'up'){
      position.top -= 50;
      this.top -= 50;
    }
    if (direction === 'down'){
      position.top += 50;
      this.top += 50
    }

    if (position.left < 0 || position.left === 700 || position.top < 0 || position.top === 700){
      location.reload();//this will serve as a 'game over' a simple refresh of the cage
    }
    let tester = [];
    tester.push(position.left); //this is just a number
    tester.push(position.top);

    this.node.css(position);  //reason why the collision detector isn't working is taht we are comparing 200px, 150px (the information stored in the window.position) to 200,150, causing a break in logic
    for (let i = 1; i < window.positionArr.length-1; i+= 1) {


      let another = [];

      another.push(parseInt(window.positionArr[i][0])) //this is the "number + px"
      another.push(parseInt(window.positionArr[i][1]))

      if (another[0] === tester[0] && another[1] === tester[1]) {
        location.reload();
      }
    }
  }

}
