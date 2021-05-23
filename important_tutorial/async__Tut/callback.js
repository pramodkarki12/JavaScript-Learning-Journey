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
    console.log(output);

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// getPosts();
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
