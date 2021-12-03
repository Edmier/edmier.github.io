"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var maze1;
var maze2;
var shiftSpeed;
var canvasWidth = 800;
var canvasHeight = 450;
var Scale = 50;
var xPos1;
var xPos2;
var score;
var highscore;
var fps;
var moveCounter;
var currentCell;
var obstacles = [{
  mTop: 3,
  mBottom: 0,
  layout: [[1, 1, 1, 0], [1, 0, 1, 0], [1, 0, 1, 0], [1, 0, 1, 1]]
}, {
  mTop: 3,
  mBottom: 0,
  layout: [[1, 1, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0], [1, 0, 1, 1]]
}, {
  mTop: 3,
  mBottom: 0,
  layout: [[1, 1], [1, 0], [1, 0], [1, 0]]
}, {
  mTop: 2,
  mBottom: 0,
  layout: [[1, 1, 1], [1, 0, 0], [1, 0, 0]]
}, {
  mTop: 1,
  mBottom: 0,
  layout: [[1, 1, 1], [1, 0, 0]]
}, {
  mTop: 3,
  mBottom: 0,
  layout: [[1, 1, 1, 0], [1, 0, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0]]
}, {
  mTop: 4,
  mBottom: 0,
  layout: [[0, 0, 1, 1], [0, 0, 1, 0], [1, 1, 1, 0], [1, 0, 0, 0], [1, 0, 0, 0]]
}, {
  mTop: 2,
  mBottom: 0,
  layout: [[0, 1, 1], [1, 1, 0], [1, 0, 0]]
}, {
  mTop: 4,
  mBottom: 0,
  layout: [[1, 1, 1, 1], [1, 0, 0, 0], [1, 1, 1, 0], [0, 0, 1, 0], [1, 1, 1, 0]]
}, {
  mTop: 2,
  mBottom: 2,
  layout: [[1, 1, 1, 1], [1, 0, 1, 0], [1, 0, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0]]
}, {
  mTop: 2,
  mBottom: 0,
  layout: [[1, 1, 1, 1], [1, 0, 1, 0], [1, 1, 1, 0]]
}, {
  mTop: 4,
  mBottom: 0,
  layout: [[1, 1, 1], [1, 0, 0], [1, 1, 0], [0, 1, 0], [1, 1, 0]]
}, {
  mTop: 1,
  mBottom: 0,
  layout: [[1, 1, 1, 0], [1, 0, 1, 1]]
}, {
  mTop: 1,
  mBottom: 1,
  layout: [[0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 1, 1], [1, 1, 1, 1, 1, 0]]
}, {
  mTop: 3,
  mBottom: 1,
  layout: [[0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 0, 0, 1, 0], [1, 1, 0, 0, 0, 1, 0], [1, 0, 0, 0, 1, 1, 1], [1, 1, 1, 1, 1, 0, 0]]
}, {
  mTop: 2,
  mBottom: 2,
  layout: [[0, 1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 0, 0, 0, 0, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 1, 1, 0, 0, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 0, 0, 0]]
}, {
  mTop: 2,
  mBottom: 2,
  layout: [[1, 1, 1, 1, 1, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 1, 1, 1], [1, 1, 0, 0, 0, 0, 0, 1, 0], [0, 1, 0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0]]
}, {
  mTop: 2,
  mBottom: 2,
  layout: [[1, 1, 1, 0, 0, 0], [1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 1, 1], [0, 0, 1, 0, 1, 0], [0, 0, 1, 1, 1, 0]]
}, {
  mTop: 1,
  mBottom: 1,
  layout: [[1, 1, 1, 0, 0, 0], [1, 0, 1, 0, 1, 1], [0, 0, 1, 1, 1, 0]]
}];

function resetValues() {
  var w = window.innerWidth;
  canvasWidth = w; //(w > 1000) ? w * 0.9 : w;

  score = 0;
  shiftSpeed = 5;
  xPos1 = 0;
  xPos2 = canvasWidth * 2;
  snakeSpeed = 5;
  direction = 'right';
  fps = 60;
  moveCounter = fps;
}

var initialized = false;

function init() {
  createCanvas(canvasWidth, canvasHeight).parent("game");
  document.getElementById('game').setAttribute("style", "width:".concat(canvasWidth, "px !important; height:").concat(canvasHeight, "px !important;"));
  frameRate(fps);
  noStroke();
  initialized = true;
}

function setup() {
  if (localStorage.getItem('highscore') !== undefined) {
    highscore = +localStorage.getItem('highscore');
  } else {
    highscore = 0;
    localStorage.setItem('highscore', '0');
  }

  if (score > highscore) {
    highscore = score;
    localStorage.setItem('highscore', '' + score);
  }

  resetValues();
  if (!initialized) init();
  if (maze1) maze1.remove();
  if (maze2) maze2.remove();
  maze1 = createGraphics(canvasWidth * 2, canvasHeight);
  maze2 = createGraphics(canvasWidth * 2, canvasHeight);
  maze1.mazeID = 1;
  maze2.mazeID = 2;
  path = Math.floor(height / Scale / 2);
  endPath = path;
  var temp = path;
  createMaze(maze1, true);

  for (var y = 0; y < maze1.cells.length; y++) {
    for (var x = 0; x < 4; x++) {
      var cell = maze1.cells[y][x];

      if (cell.row === temp) {
        cell.snake = true;
        cell.filled = false;
        cell.draw(maze1);
        currentCell = cell;
      }
    }
  }

  createMaze(maze2);
}

var oldPosition = 0;

function draw() {
  background('#533f2f');
  xPos1 -= shiftSpeed;
  xPos2 -= shiftSpeed;

  if (xPos1 <= -maze1.width) {
    createMaze(maze1);
    xPos1 += maze1.width * 2;
  }

  if (xPos2 <= -maze2.width) {
    createMaze(maze2);
    xPos2 += maze2.width * 2;
  }

  var xPosition = currentCell.mazeID === 1 ? xPos1 : xPos2;

  if (xPosition + currentCell.x < -canvasHeight / 2) {
    setup();
  } else {
    moveCounter += moveCounter === fps ? -fps : 1;

    if (moveCounter === 0) {
      shiftSpeed += 0.05; // snakeSpeed -= shiftSpeed % 1 ? 1 : 0;
    }

    if (Math.abs(xPosition - oldPosition) > 25 - snakeSpeed) {
      score++;

      if (!moveSnake()) {
        moveSnake(true);
      }

      oldPosition = xPosition;
    }
  }

  image(maze1, xPos1, 0);
  image(maze2, xPos2, 0);
  fill('#cdcdcd');
  textSize(40);
  textAlign(RIGHT, CENTER);
  text("" + score, width - 20, 40);

  if (highscore !== undefined) {
    fill('#707070');
    textSize(20);
    textAlign(LEFT, CENTER);
    text("HI " + highscore, 20, 30);
  }
}

var oldDirection = 'right';
var direction = 'right';

function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    direction = 'left';
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    direction = 'right';
  } else if (keyCode === UP_ARROW || keyCode === 87) {
    direction = 'up';
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    direction = 'down';
  }
}

function moveSnake() {
  var slide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var col = currentCell.col;
  var row = currentCell.row;
  var dir = slide ? oldDirection : direction;

  if (dir === 'right') {
    if (col < maze1.width / Scale) col += 1;
  } else if (dir === 'up') {
    if (row > 0) row -= 1;
  } else if (dir === 'down') {
    if (row < maze1.height / Scale) row += 1;
  } else {
    if (col > 0) col -= 1;
  }

  var maze = currentCell.mazeID === 1 ? maze1 : maze2;

  if (col > maze.cells[0].length - 1) {
    maze = maze.mazeID === 1 ? maze2 : maze1;
    col = 0;
  }

  if (!maze || !maze.cells) {
    return;
  }

  var selectedCell = getCell(row, col, maze);

  if (selectedCell && selectedCell.filled) {
    selectedCell.snake = true;
    selectedCell.filled = false;
    selectedCell.draw(maze);
    currentCell = selectedCell;
    oldDirection = direction;
    return true;
  }

  return false;
}

function getCell(row, col, maze) {
  if (col > maze.cells[0].length - 1) {
    maze = maze.mazeID === 1 ? maze2 : maze1;
    col = 0;
  }

  for (var x = 0; x < maze.cells.length; x++) {
    // x -> row
    for (var y = 0; y < maze.cells[0].length; y++) {
      // y -> column
      var cell = maze.cells[x][y];

      if (cell && cell.col === col && cell.row === row) {
        return cell;
      }
    }
  }

  return null;
}

var path = 4;
var endPath = 3;

function createMaze(maze) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  maze.cells = []; //Cursed that you can just add a parameter like this

  for (var i = 0; i < maze.height / Scale; i++) {
    maze.cells.push([]);
  }

  maze.noStroke();
  maze.clear();
  var mazeID = maze.mazeID;

  for (var x = 0; x < maze.width / Scale; x++) {
    // x -> row
    for (var y = 0; y < maze.height / Scale; y++) {
      // y -> column
      var row = maze.cells[y]; //Grab row

      if (x % 15 === 0 && x < maze.width / Scale - 10 && !(start && x === 0)) {
        var obs = getPlaceableObs(path);

        if (obs) {
          insertObstacle(x, obs, maze);
          x += obs.layout[0].length;
        }

        var cell = new Cell(x, y, mazeID, Scale, y === path);
        cell.draw(maze);
        row.push(cell);
      } else {
        var _cell = new Cell(x, y, mazeID, Scale, y === path);

        _cell.draw(maze);

        row.push(_cell);
      }
    }
  }
}

function insertObstacle(xPos, obs, maze) {
  var layout = obs.layout;
  var topMargin = path - obs.mTop;
  var mazeID = maze.mazeID;

  for (var y = 0; y < topMargin; y++) {
    for (var x = 0; x < layout[0].length; x++) {
      var cell = new Cell(xPos + x, y, mazeID, Scale, false);
      cell.draw(maze);
      maze.cells[y].push(cell);
    }
  }

  for (var _y = 0; _y < layout.length; _y++) {
    var row = layout[_y];

    for (var _x = 0; _x < row.length; _x++) {
      var _cell2 = new Cell(xPos + _x, _y + topMargin, mazeID, Scale, row[_x] === 1);

      _cell2.draw(maze);

      maze.cells[_y + topMargin].push(_cell2);

      if (_x === row.length - 1 && row[_x] === 1) {
        endPath = _y + topMargin;
      }
    }
  }

  for (var _y2 = 0; _y2 < maze.height / Scale - topMargin - layout.length; _y2++) {
    for (var _x2 = 0; _x2 < layout[0].length; _x2++) {
      var _cell3 = new Cell(xPos + _x2, _y2 + topMargin + layout.length, mazeID, Scale, false);

      _cell3.draw(maze);

      maze.cells[_y2 + topMargin + layout.length].push(_cell3);
    }
  }

  path = endPath;
}

var triesLeft = obstacles.length * 2;
var lastObs;

function getPlaceableObs(pathNum) {
  var index = Math.floor(Math.random() * obstacles.length);

  if (index === lastObs && triesLeft-- > 0) {
    return getPlaceableObs(pathNum);
  } else {
    lastObs = index;
  }

  var obs = obstacles[index];
  var reversed = flipObs(obs);
  var obsValid = isObsValid(obs, pathNum);
  var revValid = isObsValid(reversed, pathNum);

  if (obsValid && revValid) {
    return Math.round(Math.random()) === 1 ? obs : reversed;
  } else if (obsValid || revValid) {
    return obsValid ? obs : reversed;
  } else {
    if (triesLeft-- > 0) {
      return getPlaceableObs(pathNum);
    } else {
      triesLeft = obstacles.length * 2;
      return null;
    }
  }
}

function flipObs(obs) {
  var rLayout = obs.layout.slice(0).reverse();
  var result = {
    mTop: obs.mBottom,
    mBottom: obs.mTop,
    layout: rLayout
  };
  return result;
}

function isObsValid(obs, pathNum) {
  var obsValid = true;
  var mTop = pathNum - obs.mTop;
  var mBottom = pathNum + obs.mBottom;

  if (mTop <= 0 || mTop > canvasHeight / Scale - 1 || mTop <= 0 || mBottom > canvasHeight / Scale - 1) {
    obsValid = false;
  }

  return obsValid;
}

var Cell =
/*#__PURE__*/
function () {
  function Cell(xp, yp, mazeID, size, filled) {
    var snake = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    _classCallCheck(this, Cell);

    this.x = xp * size;
    this.y = yp * size;
    this.col = xp;
    this.row = yp;
    this.size = size;
    this.filled = filled;
    this.snake = snake;
    this.mazeID = mazeID;
  }

  _createClass(Cell, [{
    key: "draw",
    value: function draw(canvas) {
      canvas.noStroke();

      if (this.snake) {
        canvas.fill('#3ada58');
        canvas.rect(this.x, this.y, this.size, this.size);
      } else if (this.filled) {
        canvas.fill('#70543e');
        canvas.rect(this.x, this.y, this.size, this.size);
      }
    }
  }]);

  return Cell;
}();

window.addEventListener("keydown", function (e) {
  if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
    e.preventDefault();
  }
}, false);