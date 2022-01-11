import { BASE_URL } from "../utils/constants";

const USERS_PATH = "posts/";

const createPost = async (data) => {
	const response = await fetch(`${BASE_URL}${USERS_PATH}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
		// body: data,
	});
	return await response.json();
};

const getPosts = async () => {
	const response = await fetch(`${BASE_URL}${USERS_PATH}`);
	return await response.json();
};

const getPost = async (id) => {
	const response = await fetch(`${BASE_URL}${USERS_PATH}${id}`);
	return await response.json();
};

const updatePost = async (id, data) => {
	const response = await fetch(`${BASE_URL}${USERS_PATH}${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
		// body: data,
	});
	return await response.json();
};

const deletePost = async (id) => {
    const response = await fetch(`${BASE_URL}${USERS_PATH}${id}`, {
        method: "DELETE",  		
    });
    return await response.json();
};

export { createPost, getPosts, getPost, updatePost, deletePost };
