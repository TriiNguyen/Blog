import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/892649/pexels-photo-892649.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i class="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>King King</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quos
          earum eius rem, nesciunt unde. Blanditiis quis, asperiores molestiae
          nisi tenetur voluptas quae harum delectus dicta quo. Quas, excepturi
          temporibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Harum quos earum eius rem, nesciunt unde. Blanditiis quis, asperiores
          molestiae nisi tenetur voluptas quae harum delectus dicta quo. Quas,
          excepturi temporibus? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Harum quos earum eius rem, nesciunt unde. Blanditiis
          quis, asperiores molestiae nisi tenetur voluptas quae harum delectus
          dicta quo. Quas, excepturi temporibus? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Harum quos earum eius rem, nesciunt
          unde. Blanditiis quis, asperiores molestiae nisi tenetur voluptas quae
          harum delectus dicta quo. Quas, excepturi temporibus?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
