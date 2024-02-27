function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => displayPosts(json));
}

function displayPosts(data) {
  const container = document.getElementById("posts-container");
  for (const post of data) {
    console.log(post);
    const div = document.createElement("div");
    div.innerHTML = `
    <h4>User:${post.userId} </h4>
    <h5>Post Title: ${post.title} </h5>
    <p>Post Description: ${post.body} </p>
    
    `;
    container.appendChild(div);
    div.classList.add("post");
  }
}
loadPosts();

function deletePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
}
