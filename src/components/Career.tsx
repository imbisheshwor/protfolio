import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Laravel Developer</h4>
                <h5>Cubit: IT Services</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Expert Laravel developer building secure, scalable, and efficient
              web applications with ease.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer </h4>
                <h5>WHive</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Full-stack development with skill in Node.js, Laravel and React.js
              crafting scalable, dynamic web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech Lead</h4>
                <h5>Naya Yug Innovation </h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Experienced tech lead driving innovation, mentoring teams, and
              delivering scalable tech solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
