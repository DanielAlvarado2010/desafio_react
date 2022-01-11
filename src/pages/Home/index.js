import React, { useEffect, useState } from "react";

import Li from "../../components/Li";
import "bootstrap/dist/css/bootstrap.min.css"
import { LeftSidebar } from "../../components/LeftSidebar";
import  SideBarRight  from '../../components/SideBarRight'
import FiltersNav from "../FiltersNav";
import Container from 'react-bootstrap/Container'
import  Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

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
			<Container>
				
				<Row className="justify-content-md-center">
				
					<Col sm lg ={3}>  <LeftSidebar/>  </Col>
					<Col sm lg ={6}> <FiltersNav/>   </Col>
					<Col sm lg ={3}>  <SideBarRight/>  </Col>
				
				</Row>
			
			</Container>
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