import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Home from "./pages/Home";
import PostDetailContainer from "./pages/PostDetailContainer";
import PostDetail from "./pages/PostDetail";
import PostUpdate from "./pages/PostUpdate";
import NewPost from "./pages/NewPost";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>NOT FOUND!</h1>} />
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/NewPost" element={<NewPost />} />
          <Route path="detail" element={<PostDetailContainer />}>
            <Route index element={<PostDetail />} />
            <Route path="update" element={<PostUpdate />} />
          </Route>
          {/* </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
