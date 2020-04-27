class Body {

  constructor($el, positionInfo) {
    this.node = $('<img id="body"></img>');
    this.node.attr('src', 'src/assets/tails.png');
    $el.append(this.node);
    this.bodyDirection;
    this.node.css({ left: positionInfo[0], top: positionInfo[1] });
    this.next = null;
  }

 follow() { //uses the directions fed into it, but follows the same overall algorythm of the head's movement
    let direction = this.bodyDirection;
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

    this.node.css(position);
  }
  }
