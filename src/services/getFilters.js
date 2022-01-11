// get posts

const getPosts = async () => {
	const response = await fetch(`http://localhost:8081/posts`);
	return await response.json();
};

export {getPosts};