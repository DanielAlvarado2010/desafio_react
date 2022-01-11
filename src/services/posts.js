
const getPosts = async () => {
	const response = await fetch(`http://localhost:8080/posts`);
	return await response.json();
};

const getPost = async (id) => {
	const response = await fetch(`http://localhost:8080/posts/${id}/`);
	return await response.json();
};


export {getPosts, getPost};