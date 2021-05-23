document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.gird div');
  const scoreDisplay = document.querySelector('span');
  const startBtn = document.querySelector('.start');

  const width = 10;

  let currentIndex = 0; /* first div in our grid */
  let appleIndex = 0;
  /** So the div in our grid being 2(for th e head) and 0 being the end(Tail) */
  let currentSnake = [2, 1, 0];

  let direction = 1;
  let score = 0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;

  function startGame() {
    currentSnake.forEach((index) => squares[index].classList.remove('snake'));
    squares[appleIndex].classList.remove('apple');
    clearInterval(interval);

    /** Random Apple */
    direction = 1;
    scoreDisplay.innerText = score;
    intervalTime = 1000;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentIndex.forEach((index) => squares[index].classList.add('snake'));
    interval = setInterval(moveOutcomes, intervalTime);
  }

  /*** Function that deals with all the outcomes of the snake. */
  function moveOutcomes() {
    /** Deals with snake hitting border and snake hitting self */

    /** 1. if snake hits bottom
            2. if snake hits the right wall
            3. if snake hits the left wall
            4. if snake hits the top
            5. if snake hits oneself
       */
    if (
      (currentSnake[0] + width >= width * width && direction === width) ||
      (currentSnake[0] % width === width - 1 && direction === 1) ||
      (currentSnake[0] % width === 0 && direction === -1) ||
      (currentSnake[0] - width < 0 && direction == -width) ||
      squares[currentIndex[0] + direction].classList.contains('snake')
    ) {
      return clearInterval(interval);
    }

    const tail = currentSnake.pop(); //remove the last of the array
    squares[tail].classList.remove('snake');
    /** gives direction to the head */
    currentSnake.unshift(currentSnake[0] + direction);

    /** Deals with the snakes getting apples */
    if (squares[currentSnake[0]].classList.contains('apple')) {
      squares[currentSnake[0]].classList.remove('apple');
      squares[tail].classList.add('snake');
      currentSnake.push(tail);

      /** random apple */
      score++;
      scoreDisplay.textContent = score;
      clearInterval(interval);
      intervalTime = intervalTime + speed;
      interval = setInterval(moveOutcomes, intervalTime);
    }
    squares[currentSnake[0]].classList.add('snake');
  }

  /** Generate the new apple once apple is eaten. */
  function randomApple() {
    do {
      appleIndex = Math.floor(Math.random() * squares.length);
    } while (squares[appleIndex].classList.contains('snake'));

    squares[appleIndex].classList.add('apple');
  }

  /** Assign function to keycodes */
  function controls(e) {
    squares[currentIndex].classList.remove(
      'snake'
    ); /** We are removing the class of the snake */

    if (e.keyCode === 39) {
      /** If we press the right arrow on our keyboard, the snake will go the right one*/
      direction = 1;
    } else if (e.keyCode === 38) {
      /** If we press the up arrow key, the snake will go back ten divs, appering to go up */
      direciton = -width;
    } else if (e.keyCode === 37) {
      /** If we press the left arrow on our keyboard, the snake will go the left one*/
      direction = -1;
    } else if (e.keyCode === 40) {
      /** If we press the down arrow on our keyboard, the snake head will instantly appear in the ten divs from where you are now. */
      direction = width;
    }
  }

  document.addEventListener('keyup', control);

  document.addEventListener('click', startGame);
});
