const person = {
  name: 'John',
};

console.log(person.name); /** dot Notation */

person.age = 25;
person.email = 'person@email.com';
console.log(person);

/** Array Inside the Object */
const items = {
  'featured-items': ['item_1', 'item_2'],
};

console.log(items['featured-items']); /** Square Bracket Notation */

const appState = 'loading';
const app = {
  [appState]: true,
};
console.log(app);
const keyName = 'fruits';
app[keyName] = 'mango';
console.log(app);

const state = {
  loading: true,
  name: '',
  job: '',
};

function updateState(key, value) {
  state[key] = value;
}
updateState('name', 'john');
updateState('job', 'Software Engineer');
updateState('products', []);
console.log(state);
