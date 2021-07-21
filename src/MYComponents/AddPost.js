import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "../App.css";
import { useHistory } from "react-router-dom";
import { Home } from "./Home";
import useFetch from "./useFetch";

export const AddPost = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  var temp = false;
  const PostContent = (e) => {
    e.preventDefault();
    const pasta = { title, content, username };
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pasta),
    }).then((res) => {
      props.updateUI();
    });

  };
  // const { data, isPending, error } = useFetch("http://localhost:8000/posts");
  // props.Post(data);
  return (
    <>
      <div className="container input-form">
        <form onSubmit={PostContent}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              type="Text"
              className="form-control"
              id="exampleFormControlInput1"
              required
              placeholder=""
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              required
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
          </div>
          <button type="button " className="btn btn-outline-primary">
            Post
          </button>
        </form>
      </div>
    </>
  );
};
