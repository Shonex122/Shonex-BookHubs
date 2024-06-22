import React from "react";
import "./About.css";
import aboutImg from "../../images/About.webp";

function About() {
  return (
    <section className="about">
      <div className=" container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>

          <div className="about-text">
            <h2 className="about-title fs-26 ls-1"> About Shonex BookHubs</h2>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              est esse ratione debitis error quia accusantium, eius ut repellat!
              Cum, ut voluptatibus ratione sunt iure consequatur et, aperiam
              molestias assumenda culpa delectus animi est, aspernatur dolorum
              libero. Repudiandae, repellat iste!
            </p>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              est esse ratione debitis error quia accusantium, eius ut repellat!
              Cum, ut voluptatibus ratione sunt iure consequatur et, aperiam
              molestias assumenda culpa delectus animi est, aspernatur dolorum
              libero. Repudiandae, repellat iste!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
