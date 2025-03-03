// main.js

/*******************************************************
 * MODAL-RELATED CODE (Only if using the pop-up modal)
 *******************************************************/
const createPostBtn = document.getElementById('createPostBtn');
const modalBackdrop = document.getElementById('modalBackdrop');
const createPostModal = document.getElementById('createPostModal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Show modal
if (createPostBtn && modalBackdrop && createPostModal) {
  createPostBtn.addEventListener('click', () => {
    modalBackdrop.style.display = 'block';
    createPostModal.style.display = 'flex';
  });
}

// Close modal
if (closeModalBtn && modalBackdrop && createPostModal) {
  closeModalBtn.addEventListener('click', () => {
    modalBackdrop.style.display = 'none';
    createPostModal.style.display = 'none';
  });
}

// Close modal by clicking backdrop
if (modalBackdrop && createPostModal) {
  modalBackdrop.addEventListener('click', () => {
    modalBackdrop.style.display = 'none';
    createPostModal.style.display = 'none';
  });
}

/*******************************************************
 * TITLE CHARACTER COUNTER (create_post.html)
 *******************************************************/
const titleInput = document.getElementById('titleInput');
const titleCounter = document.getElementById('titleCounter');
const maxTitleChars = 300;

if (titleInput && titleCounter) {
  titleInput.addEventListener('input', () => {
    const currentLength = titleInput.value.length;
    titleCounter.textContent = currentLength + '/' + maxTitleChars;
  });
}

/*******************************************************
 * HANDLE FORM SUBMISSION (Add Post)
 *******************************************************/
const addPostForm = document.getElementById('addPostForm');
if (addPostForm) {
  addPostForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent normal form submission

    // If using Quill, update hidden input with the Quill editor's HTML
    const editorElem = document.getElementById('editor');
    const bodyInput = document.getElementById('bodyInput');
    if (editorElem && bodyInput && typeof quill !== 'undefined') {
      bodyInput.value = quill.root.innerHTML; // store Quill's HTML
    }

    // Prepare form data
    const formData = new FormData(this);

    // Send POST request to add_post.php
    fetch('php/add_post.php', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        const messageDiv = document.getElementById('postMessage');
        if (data.success) {
          // Show success message
          if (messageDiv) {
            messageDiv.textContent = data.message;
            messageDiv.style.color = 'green';
          }

          // Reset the form fields
          this.reset();

          // Clear Quill editor if it exists
          if (typeof quill !== 'undefined') {
            quill.setContents([]);
          }

          // If we're on the modal in index.html, close it
          if (modalBackdrop && createPostModal) {
            modalBackdrop.style.display = 'none';
            createPostModal.style.display = 'none';
          }

          // If on create_post.html, redirect to index.html to see new post
          if (window.location.pathname.includes("create_post.html")) {
            window.location.href = 'index.html';
          }
          // If feedContainer exists (i.e. we are on index.html), reload posts
          else if (document.getElementById('feedContainer')) {
            loadPosts();
          }
        } else {
          // Show error message
          if (messageDiv) {
            messageDiv.textContent = data.message;
            messageDiv.style.color = 'red';
          }
        }
      })
      .catch(error => console.error('Error:', error));
  });
}

/*******************************************************
 * LOAD POSTS DYNAMICALLY INTO THE FEED
 *******************************************************/
function loadPosts() {
  const feedContainer = document.getElementById('feedContainer');
  if (!feedContainer) return;

  fetch('php/get_posts.php')
    .then(response => response.json())
    .then(data => {
      // Clear existing posts
      feedContainer.innerHTML = '';

      // Loop over each post and build HTML
      data.forEach(post => {
        const postHTML = `
          <div class="post-card">
            <div class="post-content">
              <div class="post-header">
                <img class="profile-pic" src="https://i.postimg.cc/6Q6KFGYG/channels4-profile.jpg" alt="User Pic">
                <a href="#" class="subreddit-link">r/fuomai</a>
                <span>• Posted by u/someUser on ${new Date(post.created_at).toLocaleString()}</span>
              </div>
              <div class="post-title">${post.title}</div>
              <div class="post-body">${post.body}</div>
              <div class="post-footer">
                <button class="btn pill-btn vote-pill">
                  <span class="material-symbols-outlined">thumb_up</span>
                  <span class="vote-count">1123</span>
                  <span class="material-symbols-outlined">thumb_down</span>
                </button>
                <button class="btn pill-btn">Comments</button>
                <button class="btn pill-btn">Award</button>
                <button class="btn pill-btn">Share</button>
                <button class="btn pill-btn">...</button>
              </div>
            </div>
          </div>
        `;
        feedContainer.innerHTML += postHTML;
      });
    })
    .catch(error => console.error('Error loading posts:', error));
}

// On DOM load, try loading posts (only if feedContainer is present)
document.addEventListener("DOMContentLoaded", loadPosts);