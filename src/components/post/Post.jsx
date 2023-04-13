import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
	  className="postImg"
        src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">music</span>
          <span className="postCat">music</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
        eveniet reiciendis vero aut fugiat odio, tenetur quasi sapiente
        quisquam. Odit molestias numquam nam earum dolore nihil minima corporis
        temporibus ipsam.
      </p>
    </div>
  );
};

export default Post;
