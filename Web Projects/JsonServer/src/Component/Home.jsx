import React, { useEffect, useState } from 'react'

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    const addPost = () => {
        const newPost = { title: "New Post", content: "This is a new post." };
        fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(response => response.json())
            .then(data => setPosts([...posts, data]));
    };

    const updatePost = (id) => {
        const updatedPost = { title: "Updated Title", content: "Updated content." };
        fetch(`http://localhost:5000/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPost)
        })
            .then((response) => response.json())
            .then(data => {
                const updatedPosts = posts.map(post => (post.id === id ? data : post));
                setPosts(updatedPosts);
            });
    };

    const deletePost = (id) => {
        fetch(`http://localhost:5000/posts/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                const remainingPosts = posts.filter(post => post.id !== id);
                setPosts(remainingPosts);
            });
    };

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title}: {post.content}
                        <button onClick={() => updatePost(post.id)}>Update</button>
                        <button onClick={() => deletePost(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={addPost}>Add Post</button>
        </div>
    )
}
