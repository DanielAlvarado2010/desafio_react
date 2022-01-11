import React from 'react'

//Styles
import './Card.css';



 const Card = ({id,comments,content,coverImage,image,likes,tags,title,user,userImg, datePublication}) => {

    return (
        
        <div className="first-article">
            
        <div>
            <img className="img-fluid" src={coverImage} alt=""/>
        </div>
        <div className="first-article-content">
            <div className="img-author">
                <div className="img-conteiner">
                    <img src={userImg} alt=""/>
                </div>
                <div className="text-conteiner">
                    <div  className="top-text">{user}</div>
                    <div  className="down-text">{datePublication.month}  {datePublication.year}</div>
                </div>
            </div>
            <div className="title" >
                <h2>{title}</h2>
            </div>
            <div className="hashtag-conteiner">
                <div><span>#</span>{tags.t1}</div>
                <div><span>#</span>{tags.t2}</div>
                <div><span>#</span>{tags.t3}</div>
                <div><span>#</span>{tags.t4}</div>
            </div>
            
                <div className="icons-conteiner">
                    <div className="left-conteiner">
                        <div className="reaction-conteiner">
                            <i className="far fa-heart"></i>
                            <p>{likes} reactions</p>
                        </div>
                        <div className="comment-conteiner">
                            <i className="far fa-comment"></i>
                            <p>{comments} comments</p>
                        </div>
                    </div>
                    <div className="icons-right">
                        <div className="save-container">
                            <p>5 min read</p>
                            <button>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
    )
}

export default Card;