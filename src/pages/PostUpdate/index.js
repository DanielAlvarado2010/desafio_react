import React, { useState, useEffect } from "react";

import "./PostUpdate.css";

// Services
import { getPost, updatePost } from "../../services/posts";

// RR
// El useParams, se utiliza para obtener los parametros que se están enviando desde la URL
import { useParams } from "react-router-dom";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/Input";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

function PostUpdate() {
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [likes, setLikes] = useState("");
  const [unicorns, setUnicorns] = useState("");
  const [comments, setComments] = useState("");

  // Aquí instanciamos a una variable el useParams, para tener acceso a los parametros de la URL
  const params = useParams();

  // const postID = "61a65429f4ff3c9f4961ff37";

  useEffect(() => {
    const get = async () => {
      // Aquí al momento de invocar el servicio de getUser, enviamos el parametro de userID, que obtuvimos desde la URL con el useParams
      // const { firstName, lastName, gender, occupation, birthdate } = await getPost(postID);
      const response = await getPost(params.postID);
      const { user, title, content, likes, unicorns, comments } =
        response.posts;
      setUser(user);
      setTitle(title);
      setContent(content);
      setLikes(likes);
      setUnicorns(unicorns);
      setComments(comments);
    };
    get();
    // Aquí es necesario que se este escuchando si el Id del usuario cambia
  }, [params.postID]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      user,
      title,
      content,
      likes,
      unicorns,
      comments,
    };

    // Para el metodo de actualización con el PATCH, estamos enviando el ID y los datos a actualizar desde el formulario
    // Según lo que nos comenta David, al ser un metodo PATCH, es mejor enviar la data completa desde el Front y el Back es el que se debe encargar de revisar
    // que es lo que debe actualizarse
    await updatePost(params.postID, data);
    console.log("holi");
  };

  return (
    <Container>
      <Row>
        <Col className="m-2">
          <form onSubmit={handleSubmit}>
            <Input
              id="userName"
              label="User Name"
              value={user}
              setValue={setUser}
            />
            <Input id="title" label="Title" value={title} setValue={setTitle} />
            <label className="label" htmlFor="content">
              Contenido
            </label>
            <textarea
              className="textArea"
              name="content"
              cols="150"
              rows="16"
              id="content"
              value={content}
              setValue={setContent}
            ></textarea>
            <Input id="likes" label="Likes" value={likes} setValue={setLikes} />
            <button type="submit" className="btn btn-primary">
              Actualizar
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default PostUpdate;
