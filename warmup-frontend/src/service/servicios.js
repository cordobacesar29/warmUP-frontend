// This file get all endpoint to api url 

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// get all posts from api url
export const getAll = () => { 
  return fetch(API_URL).then(res => res.json());
};

// get one single post from api 
export const getOneById = id => {
  return fetch(`${API_URL}/${id}`).then(res => {
    if (!res.ok) throw new Error('Post not found');
    return res.json();
  });
};

// add one post to array api
export const addOne = ({ body, title }) => {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body, title }),
  }).then(res => res.json());
};

// update one post
export const updateOne = (id, { body, title }) => {
  return fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body, title }),
  }).then(res => res.json());
};

// delete one post
export const deleteOne = id => {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};