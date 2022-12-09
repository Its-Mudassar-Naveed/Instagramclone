import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { postsData } from "../Data/Data";
import { AiOutlineHeart } from "react-icons/ai";
import { TfiComments } from "react-icons/tfi";

import "./postheader.css";
import Header from "./Header";
import { useEffect, useState } from "react";
function Postheader() {
  const [herat, setHeart] = useState("");
  return (
    <>
      <Container>
        <Header />
      </Container>
      <div>
        {postsData.map((posts) => (
          <Container>
            <div className="wrapper d-flex">
              <div className="img-holder">
                <Link to={{ pathname: `/Userprofile/${posts.userId}` }}>
                  <img src={posts.picture} alt="" className="" />
                </Link>
              </div>
              <span className="profil-name"> {posts.Username}</span>
            </div>
            <div className="profile-details">
              <p>{posts.postDescription}</p>
            </div>
            <div className="post-image">
              <img src={posts.ProfileImage} alt="profileimagehere" />
            </div>
            <ul className="post-icon">
              <li>
                <AiOutlineHeart style={{ fontSize: 35 }} />
              </li>
              <TfiComments style={{ fontSize: 25 }} />
            </ul>
          </Container>
        ))}
      </div>
    </>
  );
}
export default Postheader;
