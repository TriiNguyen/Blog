import React from "react";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="top">
      <div className="top-left">
		<i className="topIcon fa-brands fa-square-facebook"></i>
		<i className="topIcon fa-brands fa-square-twitter"></i>
		<i className="topIcon fa-brands fa-square-pinterest"></i>
		<i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="top-center">
		<div className="topList">
			<div className="topListItem">HOME</div>
			<div className="topListItem">ABOUT</div>
			<div className="topListItem">CONTACT</div>
			<div className="topListItem">WRITE</div>
			<div className="topListItem">LOGOUT</div>
		</div>
	  </div>
      <div className="top-right">
		<img src="https://images.pexels.com/photos/662417/pexels-photo-662417.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="topImg" />
		<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
	  </div>
    </div>
  );
};

export default Topbar;
