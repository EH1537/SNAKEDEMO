class Apple {

  constructor($el) {
    this.node = $('<img id="apple"></img>');
    this.node.attr('src', 'src/assets/dapple.png');
    $el.append(this.node);
    this.top = Math.floor(Math.random() * 14) * 50;
    this.left = Math.floor(Math.random() * 14) * 50;
    this.node.css({ top: this.top, left: this.left }); //take 700/50 = 14  generate number between 0 to 14, multiply by 50
  }
  randomizer (){
    let checker = false;
    let appleTemp = [];
    let checkcount = 0
    while (checker===false){
      console.log(checkcount);
      checkcount++;
      let tryMe = true;
      appleTemp = [];
      appleTemp.push(Math.floor(Math.random() * 14) * 50)
      appleTemp.push(Math.floor(Math.random() * 14) * 50)
      for (let i = 0; i < window.positionArr.length; i+= 1){
        let checker = [];
        checker.push(parseInt(window.positionArr[i][0])) //this is the "number + px"
        checker.push(parseInt(window.positionArr[i][1]))
        if (checker[0] == appleTemp[0] && checker[1] == appleTemp[1]){
          tryMe = false;
        }
      }
      if (tryMe == true){
        checker = true;
      }
    }
    this.top = appleTemp[1];
    this.left = appleTemp[0];
    this.node.css({ top: this.top, left: this.left });
  }
}
