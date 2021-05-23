const posts = [
  { title: 'Post One', body: 'This is the post one' },
  { title: 'Post Two', body: 'This is the post two' },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, idx) => {
      output += `<li>${post.title}</li>`;
    });
    // console.log(output);

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error : Something went wrong.');
      }
    }, 2000);
  });
}

// createPost({ title: 'Post Three', body: 'This is post three' })
//   .then(getPosts)
//   .catch((err) => console.log(err));

/*** You may be working with a lot of Promises. */

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye');
});

promise4 = fetch(
  'https://jsonplaceholder.typicode.com/users'
).then((response) => response.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
