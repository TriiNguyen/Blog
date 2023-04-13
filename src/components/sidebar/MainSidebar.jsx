import React from "react";
import "./sidebar.css";

const MainSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">ABOUT ME</div>
        <img
          src="https://images.pexels.com/photos/15628122/pexels-photo-15628122.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam
          beatae quos labore error expedita culpa, animi enim impedit explicabo,
          nisi iste!
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Anime</li>
          <li className="sidebarListItem">Stoicism</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Books</li>
          <li className="sidebarListItem">Code</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">FOLOW US</div>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default MainSidebar;
