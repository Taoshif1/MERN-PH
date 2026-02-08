// console.log("Connected");

const handlePost = () => {
    const container = document.getElementById('post-container');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            console.log("Users data-> ", data)
            container.innerHTML = ''; 
            data.slice(0, 50).forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.className = 'post-card';
                postDiv.innerHTML = `
                    <h3>${post.title.substring(0, 20)}...</h3>
                    <p>${post.body.substring(0, 50)}...</p>
                    <button class="view-btn" onclick="viewSinglePost(${post.id})">View Details</button>
                `;
                container.appendChild(postDiv);
            });
        });
}

const viewSinglePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(post => {
            // Hide list, show details
            document.getElementById('list-screen').style.display = 'none';
            const detailScreen = document.getElementById('detail-screen');
            detailScreen.style.display = 'block';

            // Inject content
            document.getElementById('single-post-content').innerHTML = `
                <div class="post-card" style="margin-top: 20px;">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <small>Post ID: ${post.id}</small>
                </div>
            `;
        })
        .catch(err => console.error("Error fetching single post:", err));
}

const showList = () => {
    document.getElementById('list-screen').style.display = 'block';
    document.getElementById('detail-screen').style.display = 'none';
}


// =============================================================

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// =============================================================

// const handlePost = () =>  {
//     alert("Clicked");
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(result => result.json())
//     .then(data => console.log("Data -> ", data))
// }

// const handlePost = () => {
//     const container = document.getElementById('post-container');
    
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => {
//             // Clear previous posts 
//             container.innerHTML = ''; 

//             data.forEach(post => {
//                 const postDiv = document.createElement('div');
//                 postDiv.classList.add('post-card'); // For styling
//                 postDiv.innerHTML = `
//                     <h3>${post.title}</h3>
//                     <p>${post.body}</p>
//                     <hr>
//                 `;
//                 container.appendChild(postDiv);
//             });
//         })
//         .catch(err => console.error("Fetch error:", err));
// }








