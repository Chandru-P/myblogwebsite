const blogForm = document.getElementById('blogForm');
const postsList = document.getElementById('postsList');

blogForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  try {
    const response = await fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    const data = await response.json();
    console.log('Created:', data);

    
    getPosts();
  } catch (error) {
    console.error('Error:', error);
  }
});

async function getPosts() {
  try {
    const response = await fetch('/posts');
    const posts = await response.json();

    postsList.innerHTML = ''; 

    posts.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <hr>
      `;
      postsList.appendChild(postElement);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}


getPosts();
