$(document).ready(function () {
  const head = new Head($('#board'))
  const apple = new Apple($('#board'));
  //construct our apple and head initially, declare global variables in window object
  window.snakeArr = [];
  //this array hold object pointers
  window.snakeArr.push(head); //head needs to be there
  //this array  holds positions of all elements for tail placement
  window.positionArr = [];
  window.counter = 0;
  //this array holds direction for moving the body
  window.directionArr = [];
  let moveTick = false;

  $('body').on('keydown', function (e) { ///our movement controls that affect the head.move function
    backgroundPlay();
    if (e.keyCode === 37) {
      if (head.currentDirection === 'right'|| head.currentDirection === 'left' || moveTick) {
        return;
      }
      head.currentDirection = 'left';
      moveTick = true
    }
    if (e.keyCode === 39) {
      if (head.currentDirection === 'left' || head.currentDirection === 'right' || moveTick) {
        return;
      }
      head.currentDirection = 'right'
      moveTick = true
    }
    if (e.keyCode === 38) {
      if (head.currentDirection === 'down'|| head.currentDirection === 'up' || moveTick) {
        return;
      }
      head.currentDirection = 'up'
      moveTick = true
    }
    if (e.keyCode === 40) {
      if (head.currentDirection === 'up'|| head.currentDirection === 'down' || moveTick) {
        return;
      }
      head.currentDirection = 'down'
      moveTick = true
    }
  });


  function movement() { //move the head, the body will follow
    head.move();
    //updating arrays to move!!!!
    let currenArr = [document.getElementById("head").style.left, document.getElementById("head").style.top];
    let currentDir = head.currentDirection;  //load a direction matrix, which will be used for following the head
    window.positionArr.unshift(currenArr);
    window.directionArr.unshift(currentDir);
    if (window.positionArr.length > window.counter + 2) { //this allows to store current head position, and the last head position
      window.positionArr.pop();
      window.directionArr.pop();
    }

    //we feed the direction into the snake array, changeing each element of the body to have the direction of it's predecessor, 
    //allowing it to "follow" it's companion
    for (let i = 1; i < window.snakeArr.length; i += 1) {
      window.snakeArr[i].bodyDirection = window.directionArr[i];
    }
    for (let i = 1; i < window.snakeArr.length; i += 1) {
      window.snakeArr[i].follow();
    }
    moveTick = false;
    //EATIN THE POINT EVENT HERE
    if (window.positionArr[0][0] === document.getElementById("apple").style.left && window.positionArr[0][1] === document.getElementById("apple").style.top) {
      powerUpPlay(); //play your power up
      apple.randomizer(); //find a new apple placement
      let body = new Body($('#board'), window.positionArr[window.counter + 1])  //creat the body, add it to array
      window.snakeArr.push(body);
      window.counter++;
      scoreIncrease(); //increment score
      head.transform(window.counter); //for changing Goku
    }
    setTimeout(movement, head.SPEED); //updating the frame
  }

  movement(); //initial movement call///////////////////////////////////////////////////////////////////////////

  //sound/CSS instantiators
  let background = document.getElementById("backgroundMP3");
  function backgroundPlay() {
    background.play();
  }

  let powerUp = document.getElementById("powerUpOGG");
  function powerUpPlay() {
    powerUp.play();
  }

  let scoreBoard = document.getElementById("score");
  function scoreIncrease() {
    scoreBoard.innerHTML = "Score: " + window.counter;
  }

});