import React from "react";
import { useAuth } from "../context/ContextHook";

const Footer = () => {
  const {mode} = useAuth();
  return (
    <>
      <div className="footer">
        <div className="d-flex justify-content-evenly pt-4">
          <div>
            <li className="fs-3 fw-bold mb-2 text-danger">Rahul Chouhan</li>
            <li>Information Technology</li>
            <li>Engineering Student</li>
          </div>
          <div>
            <li className="fs-3 fw-bold mb-2 text-danger">Get In Touch</li>
            <div className="d-flex justify-content-center gap-3"style={{filter:mode?'invert()':""}}>
            <a href="https://www.instagram.com/t/" target="_blank"><img src="/instagram.png" alt="instagram" /></a>
                <a href="https://www.linkedin.com/in/m/" target="_blank"><img src="/linkdin.png" alt="linkdin" /></a>
                <a href="https://github.com/" target="_blank"><img src="/github.png" alt="github" /></a>
            </div>
          </div>
        </div>
        <div className="website-rights d-flex justify-content-center text-secondary">
        <p>&copy; 2024 Rahul. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
