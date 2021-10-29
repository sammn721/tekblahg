const postPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#newPostTitle').value.trim();
    const content = document.querySelector('#newPostText').value.trim();

    if (title && content) {
       const response = await fetch(`/api/posts`, {
           method: 'POST',
           body: JSON.stringify({ title, content }),
           headers: {
               'Content-Type': 'application/json',
           },
       });
       if (response.ok) {
           document.location.replace(`/dashboard`);
       } else {
           alert('failer');
       }
    }
}

document.querySelector('#postForm').addEventListener('submit', postPostHandler);