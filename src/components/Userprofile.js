import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileData } from "../Data/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";
import {postsData} from "../Data/Data"
import "./userprofile.css";
function Userprofile() {
  const [userProfile, setUserProfile] = useState("");
  const [userPost, setUserPost] = useState("");
  const { userId } = useParams();
  useEffect(() => {
    setUserProfile(ProfileData.find((user) => user.id === userId));
    setUserPost(postsData.filter((post) => userId === post.userId));
  }, [userId]);
  const back = useNavigate();
  return (
    <>
 {ProfileData.map((posts,index)=>(
            <Container>
        <div className="profile-header">
            <span className="mt-3" onClick={()=> back('/')}>
                Back
            </span>
            <span className="display-5 mb-3">{ProfileData.Username}</span>
            <span></span>
        </div>
        <div className="single-profile">
            <div>
                <img src= {posts.profileImage} alt="profile-image"/>
            </div>
            <table>
                <tr>
                    <td>Posts</td>
                    <td>Followers</td>
                    <td>Following</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>{posts.followers}</td>
                    <td>{posts.following}</td>
                </tr>
            </table>
            <span></span>
            <span></span>
        </div>
        <div className="profile-infor">
            <strong>
                {posts.Username}
            </strong>
            <p>
            <strong>
                {posts.des}
            </strong>
            </p>
            <p>
                <pre>
                    {posts.profiledesc}
                </pre>
            </p>
            <Button variant="secondary" onClick={()=> back('/src/components/Message.js')}>Message</Button>

            {/* Posts section here */}
            <div className="grid-wrapper">
             <div className="posts">
               <img src={posts.post1} alt="posts" />
             </div>
             <div className="posts">
               <img src={posts.post2} alt="posts" />
             </div>
             <div className="posts">
               <img src={posts.post2} alt="posts" />
             </div>
             <div className="posts">
               <img src={posts.post2} alt="posts" />
             </div>
           </div>
        </div>
       </Container>

    ))} 
    </>
  );
}
export default Userprofile;
