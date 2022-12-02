import React from 'react';
import './SiteIntro.css';

const SiteIntro = () => {
    return (
        <>
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
                Are you looking for a simple way to get some movie recommendations? Look no further! All you need to do is search for five of your favorite movies, select them as they pop up in the search bar, and click "Go!". 
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default SiteIntro;