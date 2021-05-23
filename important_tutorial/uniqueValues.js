const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },

  {
    name: 'burger',
    category: 'lunch',
  },

  {
    name: 'steak',
    category: 'dinner',
  },

  {
    name: 'bacon',
    category: 'breakfast',
  },

  {
    name: 'eggs',
    category: 'breakfast',
  },

  {
    name: 'pasta',
    category: 'dinner',
  },
];

/**
 * map -> get all the instances
 * new set -> narrow down
 * ['all' , ... ] -> turn object back to the array
 */

const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories);

const result = document.querySelector('.result');
result.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join('');

/**
 * breakfast : [ 'pancakes', 'eggs',  backon;]
 * lunch : [ ..... ]
 * dinner : [ ..... ]
 * */

// const arr = [2, 'name', 'pramod', 34];
// let category = 'pramod';
// if (arr[arr.indexOf(category)] == 'pramod') {
//   console.log('arr');
// }

const data = {
  breakfast: [],
  lunch: [],
  dinner: [],
};

const value = menu.map((item) => {
  const { name, category } = item;
  //   data[category] = [];
  if (categories[categories.indexOf(category)] === category) {
    data[category].push(name);
  }
});
console.log(data);
