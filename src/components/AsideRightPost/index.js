import "./AsideRightPost.css";

import React from "react";
import Card from 'react-bootstrap/Card'

function AsaideRightPost({avatarImage, userName}) {
    return (
        <>                
            <div className="p_card rounded-3 mb-3">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div>
                            <img src={avatarImage} className="border border-light border border-1 rounded-circle avatar" alt="..."/>
                            <a href="#">
                                <span className="names_r pb-3" id="userNameRight">
                                    {userName}
                                </span>
                            </a>
                        </div>
                        <div className="boton-derecha py-3">
                            <button type="button" className="btn btn-primary btn-r">Follow</button>
                        </div>
                        <div className="card_author">
                            <p>An avid MERN stack developer, building websites that you'd love using.</p>
                            <p className="negrita">LOCATION</p>
                            <p>Mumbai</p>
                            <p className="negrita">EDUCATION</p>
                            <p>Bachelor of Engineering</p>
                            <p className="negrita">WORK</p>
                            <p>Student & Freelancer</p>
                            <p className="negrita">JOINED</p>
                            <p>6 de oct. 2019</p>
                        </div>                
                    </li>
                </ul>
            </div>
            <div className="p_card rounded-3">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item names_r">More from <a href="#">{userName}</a></li>
                    <li className="list-group-item card_author py-3">
                        <div className="tecs pb-3">
                            <a className="more_title" href="#">I Built a VSCode Inspired Developer Portfolio</a>
                        </div>
                        <div>
                            <a className="more_tags" href="#">#showdev</a>
                            <a className="more_tags" href="#">#webdev</a>
                            <a className="more_tags" href="#">#react</a>
                            <a className="more_tags" href="#">#nextjs</a>
                        </div>
                    </li>

                    <li className="list-group-item card_author py-3">
                        <div className="tecs pb-3">
                            <a className="more_title" href="#">Build a Crypto Discord Bot using Discord.js</a>
                        </div>
                        <div>
                            <a className="more_tags" href="#">#tutorial</a>
                            <a className="more_tags" href="#">#javascript</a>
                            <a className="more_tags" href="#">#programming</a>
                        </div>
                    </li>

                    <li className="list-group-item card_author py-3">
                        <div className="tecs pb-3">
                            <a className="more_title" href="#">You Need to Try These 10 NPM Packages as a React
                                Developer</a>
                        </div>
                        <div>
                            <a className="more_tags" href="#">#react</a>
                            <a className="more_tags" href="#">#javascript</a>
                            <a className="more_tags" href="#">#webdev</a>
                            <a className="more_tags" href="#">#beginners</a>
                        </div>
                    </li>

                </ul>
            </div>        
        </>        
    )
}

export default AsaideRightPost;