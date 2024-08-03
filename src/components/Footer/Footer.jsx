import { Link, NavLink, useNavigate } from "react-router-dom";
import { FooterElement } from "./Footer.element";

export const Footer = () => {
  return (
    <>
    <FooterElement>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column ">
            <h2>About Us</h2>
            <ul>
              {" "}
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>Careers</li>
              <li>Owners</li>
              <li>Stack</li>
            </ul>
          </div>
          <div className="footer-column ">
            <h2>Quick Links</h2>
            <ul>
            <NavLink to={"/feed"} >
            <li> Feed</li>
              </NavLink>
         

           
           
              <NavLink to={"/roomSearch"} >
               <li> Room Search</li>
              </NavLink>
          

        
              <NavLink to={"/createRoom"} >
               <li>Create Room</li> 
              </NavLink>
        
              <NavLink to={"/createPost"} >
                <li>Create Post</li> 
              </NavLink>
            </ul>
          </div>
          <div className="footer-column ">
            <h2>Follow Us</h2>
            <ul>
              <li>Linkedin</li>
              <li>Gmail</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Connect-a-mate. All rights reserved.</p>
        </div>
      </footer>
      </FooterElement>
    </>
  );
};
