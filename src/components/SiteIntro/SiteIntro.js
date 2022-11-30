import React from 'react';
import './SiteIntro.css';

const SiteIntro = () => {
    return (
        <>
        <center>
          <h1 className="about_title">ABOUT SITE</h1>
          <br />
        </center>
        <div className="aboutSite_container">
          <div className="aboutSite_card">
            <div className="aboutSite_card__content">
              <h1 className="about_name">Movie Night Site</h1>
              <div
                className="stroke"
                style={{
                  backgroundColor: "white",
                  height: "1px",
                  width: "100%",
                  marginTop: "4px",
                }}
              ></div>
              <br />
              <p>
                Hey there! If you are looking for some great and customized to you movie recommendations look no further! Here you will search for movies you like and add them to the favorites list below. After submitting you will get back your recommendations. 
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default SiteIntro;