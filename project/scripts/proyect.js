 // Function to toggle the navigation menu
 function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
   }
   
  
   // Event listener for the menu toggle button
   const menuToggle = document.querySelector('.menu-toggle');
   if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
   }
   
  
   // Example JavaScript object
   const siteConfig = {
    primaryColor: '#1E3A8A',
    secondaryColor: '#FACC15',
   };
   
  
   // Example JavaScript array and method (for Community page, needs to check if element exists)
   const communityFeed = document.getElementById('community-feed');
   let communityPosts = [
    { author: 'Trader123', content: 'Just made a great trade!' },
    { author: 'CopyCat', content: 'Following top traders on cTrader.' }
   ];
   
  
   function displayPosts() {
    if (!communityFeed) return; // Exit if the communityFeed element doesn't exist
    communityFeed.innerHTML = ''; // Clear existing posts
    communityPosts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('community-post');
    postDiv.innerHTML = `<p class="post-author"><strong>${post.author}:</strong></p><p class="post-content">${post.content}</p>`;
    communityFeed.appendChild(postDiv);
    });
   }
   
  
   // Initial display of posts and add to the array for new ones
   displayPosts();
   
  
   //Load more posts
   const loadMoreButton = document.getElementById('load-more');
   if(loadMoreButton){
    loadMoreButton.addEventListener('click', function() {
    // Add a new post
    communityPosts.push({ author: 'NewUser', content: 'This is another awesome trading insight.' });
    displayPosts(); // Re-render posts
    });
   }
  