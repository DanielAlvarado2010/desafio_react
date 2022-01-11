import "./PostDetail.css";

import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

// RR
import { useNavigate, useParams } from "react-router-dom";

// Components
import ImagePost from "../../components/ImagePost";
import Tag from "../../components/Tag";
import UserData from "../../components/UserData";
import PostContent from "../../components/PostContent";
import AsideLeftPost from "../../components/AsideLeftPost";
import AsideRightPost from "../../components/AsideRightPost";
import Footer from "../../components/Footer";

// Service
import { getPost } from "../../services/posts";
import { deletePost } from "../../services/posts";

export default function PostDetail() {
	const [post, setPost] = useState({});
	const [tags, setTags] = useState({});	

	const params = useParams();
	const navigate = useNavigate();

	const postID = "61a65429f4ff3c9f4961ff37";

	useEffect(() => {
		const get = async () => {
			const response = await getPost(postID);
			console.log(response);
			setPost(response.posts);			
			setTags(Object.values(response?.posts.tags))
		};
		get();
		
	}, [postID]);

	
	const handleDelete = async () => {
		console.error("eliminado");
		await deletePost(postID);
		navigate("/posts");
	};

	
	const dateTimer = (datePublication) => {

		let compoundDate = "Posted on ";
	
		const currentDay = new Date().getTime();
		const days = Math.floor((currentDay - datePublication.miliseconds) / (1000 * 60 * 60 * 24));
		const hours = Math.floor(((currentDay - datePublication.miliseconds) - (days * (1000 * 60 * 60 * 24))) / (1000 * 60 * 60));
	
		switch (datePublication.month) {
			case 1:
				compoundDate += `Jan ${datePublication.day}`;
				break;
			case 2:
				compoundDate += `Feb ${datePublication.day}`;
				break;
			case 3:
				compoundDate += `Mar ${datePublication.day}`;
				break;
			case 4:
				compoundDate += `Apr ${datePublication.day}`;
				break;
			case 5:
				compoundDate += `May ${datePublication.day}`;
				break;
			case 6:
				compoundDate += `Jun ${datePublication.day}`;
				break;
			case 7:
				compoundDate += `Jul ${datePublication.day}`;
				break;
			case 8:
				compoundDate += `Aug ${datePublication.day}`;
				break;
			case 9:
				compoundDate += `Sep ${datePublication.day}`;
				break;
			case 10:
				compoundDate += `Oct ${datePublication.day}`;
				break;
			case 11:
				compoundDate += `Nov ${datePublication.day}`;
				break;
			case 12:
				compoundDate += `Dec ${datePublication.day}`;
				break;
			default:
				compoundDate = "";
				break;
		}
	
		return compoundDate;	
	};
	
		
	return (
		<Container >
			<Row className="justify-content-center p-0">			
				<Col xxl={1} xl={1} lg={1} md={1} >
					<AsideLeftPost
						reaction = {post?.likes} 
						unicorn = {post?.unicorns}
						comment = {post?.comments}
					/>
				</Col>
				<Col xxl={7} xl={7} lg={8} md={11} sm={"auto"} className="cardPost" >
					<ImagePost 
						srcImage={post?.coverImage}
						idImage="imgCover"
						clase="card-img-top"
					/>
					<div className="card-post">
						<h1 className="fs-3xl m:fs-4xl l:fs-5xl fw-bold lh-tight mb-4 long" id="title">
							{post?.title}
						</h1>
						{/* {
							tags.map((tag) => (
								<Tag
									element = {tag}
								/>
							))
						} */}
						<div className="subhead d-flex align-items-center mb-3 flex-wrap">
							<div id="avatar">
								<ImagePost 
									srcImage={post?.userImg}
									idImage=""
									clase="border border-light border border-1 rounded-circle avatar"
								/>
							</div>
							{/* <UserData 
								userName = {post?.user}
								datePost = {dateTimer(post?.datePublication)}
							/> */}
						</div>
						<PostContent 
							content = {post?.content}
						/>
					</div> 
				</Col>
				<Col xxl={3} xl={4} lg={4} md={{ span: 11 }}>
					<AsideRightPost 
						avatarImage={post?.userImg}
						userName={post?.user}
					/>
				</Col>
			</Row>			
		</Container>
	);
}