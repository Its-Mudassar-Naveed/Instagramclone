import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileData } from "../Data/Profile";
import Button from "react-bootstrap/Button";
import { IoArrowBackOutline } from "react-icons/io5";
import { postsData } from "../Data/Data";
import "./userprofile.css";
function Userprofile() {
  const back = useNavigate();
  const [userProfile, setUserProfile] = useState("");
  const [userPost, setUserPost] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    setUserProfile(ProfileData.find((user) => user.id === userId));
    setUserPost(postsData.filter((post) => post.userId === userId));
  }, [userId]);

  console.log(userPost);
  return (
    <>
      <Container>
        <div className="profile-header">
          <span className="mt-3">
            <IoArrowBackOutline
              style={{ fontSize: 25 }}
              onClick={() => back("/")}
            />
          </span>
          <span className="display-5 mb-3">{userProfile.userName}</span>
          <span></span>
        </div>
        <div className="single-profile">
          <div>
            <img src={userProfile.profileImage} alt="profile" />
          </div>
          <table>
            <tr>
              <td>Posts</td>
              <td>Followers</td>
              <td>Following</td>
            </tr>
            <tr>
              <td>{userPost.length}</td>
              <td>{userProfile.followers}</td>
              <td>{userProfile.following}</td>
            </tr>
          </table>
          <span></span>
          <span></span>
        </div>
        <div className="profile-infor">
          <strong>{userProfile.Username}</strong>
          <p>
            <strong>{userProfile.des}</strong>
          </p>
          <p>
            <pre>{userProfile.profiledesc}</pre>
          </p>
          <Button
            variant="secondary"
            onClick={() => back("/src/components/Message.js")}
          >
            Message
          </Button>

          {userPost.map((posts, index) => (
            <div key={index}>
              <div className="grid-wrapper d-flex">
                <div className="posts">
                  <img
                    className="post-image"
                    src={posts.picture}
                    alt="posts"
                    style={{ width: 200 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
export default Userprofile;
