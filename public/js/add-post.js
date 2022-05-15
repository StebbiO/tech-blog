const { json } = require("express/lib/response");

async function createPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('input[name="post-content"]').value.trim();
    
    if (content) {
        const response = await fetch('api/posts', {
            method: 'POST',
            body: json.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);