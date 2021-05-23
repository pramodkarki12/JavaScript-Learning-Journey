/*
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');

const countDown = document.querySelector('.count-down');

let count = 0;
increase.addEventListener('click', () => {
  count += 1;
  countDown.innerHTML = count;
});

decrease.addEventListener('click', () => {
  count -= 1;
  countDown.innerHTML = count;
});
reset.addEventListener('click', () => {
  count = 0;
  countDown.innerHTML = count;
});

console.log(resetTime + 1);
*/

/**  Another Method */

/**Set the values and buttons */
const values = document.querySelector('.count-down');
const btns = document.querySelectorAll('.btn');

let count = 0; /** Set initial Count */
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    /** Set the color */
    if (count > 0) {
      values.style.color = 'green';
    } else if (count < 0) {
      values.style.color = 'red';
    } else values.style.color = 'black';

    values.textContent = count;
  });
});
