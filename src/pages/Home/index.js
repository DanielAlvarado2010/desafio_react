import React, { useEffect, useState } from "react";

import Li from "../../components/Li";

// RR
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../services/posts";

export default function Home() {
	const [posts, setPosts] = useState({});
	
	const navigate = useNavigate();
	
	useEffect(() => {
		const get = async () => {
			const response = await getPosts();	
			const parsedResponse = Object.values(response).map((post, index) => {
				const { _id } = post[index];
				return {
					id: _id,
				};
			});

			setPosts(parsedResponse);										
		};
		get();		
	}, []);

	
	return (
		<div>
			<ul>
				{/* {posts.map(({ id }) => (
					<Li
						key={id}
						buttonText="Detalle"
						callback={() => navigate(`${id}`)}
					/>
				))} */}
			</ul>
		</div>
	);
}