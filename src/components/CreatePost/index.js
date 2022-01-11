import { render } from "@testing-library/react";
import { react, useState, useEffect } from "react";
import Select from "react-select";
import styles from "./styles.css";

const getUsers = async () => {
  const response = await fetch("http://localhost:8080/users");
  const result = Object.values(response);
  const renderUser = result[0];

  const dataLength = renderUser.length;

  const randomNumber = Math.floor(Math.random() * dataLength);

  const userName = renderUser[randomNumber].name;
  const userImg = renderUser[randomNumber].image;

  return { userName, userImg, randomNumber };
};

const CreatePost = () => {
  const [sideDisplay, setSideDisplay] = useState(0);
  const titleDisplay = sideDisplay && sideDisplay === 1 ? "show" : "dontShow";
  const tagDisplay = sideDisplay && sideDisplay == 2 ? "show" : "dontShow";
  const contentDisplay = sideDisplay && sideDisplay == 3 ? "show" : "dontShow";

  // getWeek sets the data for the specific date when the user creates the post

  function getWeek(currentDate) {
    let oneJan = new Date(currentDate.getFullYear(), 0, 1);
    let numberOfDays = Math.floor(
      (currentDate - oneJan) / (24 * 60 * 60 * 1000)
    );
    let result = Math.ceil((currentDate.getDay() + 1 + numberOfDays) / 7);
    return result;
  }

  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const week = getWeek(dateObj);
  const mili = dateObj.getTime();

  // Hooks to get all the tags from the DB and render them on the select tag
  const [tags, setTags] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);

  const tagArray = (event) => {
    console.log(event);
    setSelectedTags([...selectedTags, event.value]);
    console.log(selectedTags);
  };

  useEffect(() => {
    const getTags = async () => {
      const response = await fetch("http://localhost:8080/tags");
      const data = await response.json();
      const result = Object.values(data);
      const tagObject = result[0];
      const renderTags = Object.values(tagObject[0]);
      setTags(renderTags);
    };

    getTags();
  }, []);

  // Hooks for the post method

  const [titlePost, setTitlePost] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postImg, setPostImg] = useState("");

  const renderTagOptions = () => {
    const renderedTags = tags.map((element) => {
      return { value: `${element}`, label: `${element}` };
    });

    console.log(renderedTags);
    return renderedTags;
  };

  renderTagOptions();

  const handleSubmit = async (event) => {
    // event.preventDefault();

    const { userName, userImg, randomNumber } = await getUsers();

    const post = {
      user: userName[randomNumber],
      userImg: userImg[randomNumber],
      title: titlePost,
      content: postBody,
      tags: {
        t1: selectedTags[0],
        t2: selectedTags[1],
        t3: selectedTags[2],
        t4: selectedTags[3],
      },
      coverImage: postImg,
      datePublication: {
        day: day,
        miliseconds: mili,
        month: month,
        year: year,
        week: week,
      },
      image: postImg,
      likes: 3,
      comments: 1,
      unicorns: 15,
    };

    const response = await fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    return await response.json();
  };

  return (
    <div>
      <header>
        <div className="container-fluid c-fluid newPostBarBackground">
          <nav className="navbar navbar-expand-lg navbar_bar">
            <div className="container container_bar editPostBar">
              <a className="navbar-logo" href="../index.html">
                <svg
                  width="50"
                  height="40"
                  viewBox="0 0 50 40"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="50"
                    height="40"
                    rx="3"
                    style={{ fill: "#000" }}
                  ></rect>
                  <path
                    d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z"
                    style={{ fill: "var(--base-inverted)" }}
                  ></path>
                </svg>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <span className="create">Create Post</span>
                <ul className="navbar-nav mb-2 mb-lg-0 navbar-nav_bar">
                  <li className="nav-item createFilter">
                    <a className="item-link filterElement" href="#">
                      Edit
                    </a>
                    <span className="item-line"></span>
                  </li>
                  <li className="nav-item createFilter">
                    <a className="item-link filterElement2" href="#">
                      Preview
                    </a>
                    <span className="item-line"></span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-g-7 col-md-7 col-s-12 editNewPost">
            <div className="inputContainer">
              <div>
                <input
                  className="inputNewTitle"
                  type="text"
                  placeholder="New post title here..."
                  id="titlePost"
                  value={titlePost}
                  onClick={() => setSideDisplay(1)}
                  onChange={(event) => setTitlePost(event.target.value)}
                />
              </div>
              <div>
                <Select
                  name="select"
                  id="tagSelector"
                  className="inputAddTags"
                  placeholder="Add up to 4 tags..."
                  // value={selectedTags}
                  onClick={() => {
                    setSideDisplay(2);
                  }}
                  onChange={(event) => tagArray(event)}
                  options={tags.map((element) => {
                    return { value: `${element}`, label: `${element}` };
                  })}
                >
                  {/* <option value="" className="inputAddTags">
                    Add up to 4 tags...
                  </option> */}
                </Select>
              </div>
            </div>
            <div className="imgContainer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="crayons-icon"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
              >
                <title id="a17qec5pfhrwzk9w4kg0tp62v27qqu9t">
                  Upload image
                </title>
                <path d="M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
              <input
                type="text"
                name="userImg"
                className="userImg"
                placeholder="URL image"
                id="postImg"
                value={postImg}
                onChange={(event) => setPostImg(event.target.value)}
              />
            </div>
            <div className="formContainer">
              <textarea
                name="texto"
                cols="30"
                rows="16"
                className="textArea"
                placeholder="Write your post content here..."
                id="postBody"
                value={postBody}
                onClick={() => setSideDisplay(3)}
                onChange={(event) => setPostBody(event.target.value)}
              ></textarea>
            </div>
          </div>
          <div className={`titleAside col-3 ${titleDisplay}`} id="titleAside">
            <p className="titleAsideHeader">Writing a Great Post Title</p>
            <p>
              Think of your post title as a super short (but compelling!)
              description — like an overview of the actual post in one short
              sentence. Use keywords where appropriate to help ensure people can
              find your post by search.
            </p>
          </div>
          <div className={`col-3 tagAside ${tagDisplay}`} id="tagAside">
            <p className="titleAsideHeader">Tagging Guidelines</p>
            <p>
              Tags help people find your post. Think of tags as the topics or
              categories that best describe your post. Add up to four
              comma-separated tags per post. Combine tags to reach the
              appropriate subcommunities. Use existing tags whenever possible.
              Some tags, such as “help” or “healthydebate”, have special posting
              guidelines.
            </p>
          </div>
          <div
            className={`col-3 contentAside ${contentDisplay}`}
            id="contentAside"
          >
            <p className="titleAsideHeader">Editor Basics</p>
            <p>
              Use Markdown to write and format posts. Commonly used syntax You
              can use Liquid tags to add rich content such as Tweets, YouTube
              videos, etc. In addition to images for the post's content, you can
              also drag and drop a cover image
            </p>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-g-7 col-md-7 col-s-12 finalbuttons">
            <button
              className="submitbutton"
              id="saveButton"
              onClick={() => handleSubmit()}
            >
              <a className="styleDeleter" href="../index.html">
                Publish
              </a>
            </button>
            <button className="saveDraft">Save Draft</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
